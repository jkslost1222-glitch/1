import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Safe resolution for both CJS and ESM
const projectRoot = process.cwd();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Nutri-Coach AI Endpoint
  app.post("/api/coach/chat", async (req, res) => {
    try {
      const { message, history = [], language = "es" } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(200).json({
          success: false,
          fallback: true,
          answer: language === "pt"
            ? "A gelatina bariátrica funciona criando um gel de alta viscosidade que ocupa espaço no estômago e estimula os receptores de saciedade mecânica. Tome sempre acompanhada de 300ml de água morna ou em temperatura ambiente 20 minutos antes da refeição principal."
            : language === "en"
            ? "Bariatric gelatin works by creating a high-viscosity mesh in the stomach that activates mechanical stretch receptors. Always drink 300ml of water alongside each portion, 20 minutes before meals."
            : "La gelatina bariátrica crea una matriz colágena de alta viscosidad en el estómago que estimula los mecanorreceptores de saciedad. Tómala siempre con 300 ml de agua 20 minutos antes de tu comida principal."
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const systemInstruction = `Eres "Nutri-Coach IA 24/7", el asistente nutricional experto de la plataforma oficial "Gelatina Bariátrica • El Secreto Reductor".
Tu objetivo es guiar, motivar y resolver cualquier duda del usuario sobre el método de la gelatina bariátrica, recetas reductoras de colágeno, shots matutinos, tés drenantes, cronograma de 21 días y técnicas anti-ansiedad.

Conocimientos clave:
1. Receta Madre (Gelatina Bariátrica): 2 sobres de gelatina sin sabor / neutra (24g) hidratados en 100ml de agua fría y disueltos en 300ml de agua caliente + jugo de limón + canela / cúrcuma + edulcorante puro (stevia o eritritol).
2. Regla de Oro INMUTABLE: Siempre beber 1 vaso grande (300 ml) de agua pura junto con la porción para expandir la fibra colágena en el estómago (efecto balón gástrico natural).
3. Horarios estratégicos: 20-30 minutos antes del almuerzo y 20-30 minutos antes de la cena.
4. Conservación: En recipiente de vidrio con tapa hermética en la nevera hasta por 5 días.
5. Variaciones de sabores funcionales: Frutos rojos antioxidante, Piña & Jengibre termogénica, Manzana & Canela glucorreguladora, Café Latte activa-metabolismo, Maracuyá anti-cortisol para la noche.
6. Plato Saciante 50/25/25 (50% vegetales y fibra verde, 25% proteína magra, 25% grasas buenas o carbohidrato complejo).
7. Protocolo SOS 3 minutos para antojos nocturnos de azúcar (hielo con limón y canela, respiración 4-7-8, porción nocturna de maracuyá).

Instrucciones de respuesta:
- Responde con tono empático, seguro, científico pero accesible y muy motivador.
- Responde en el idioma del usuario (${language === 'pt' ? 'Português' : language === 'en' ? 'English' : 'Español'}).
- Da instrucciones prácticas, claras y directas.`;

      // Build conversation contents
      const conversationContents: any[] = [];

      if (Array.isArray(history) && history.length > 0) {
        for (const h of history.slice(-6)) {
          if (h.sender === "user") {
            conversationContents.push({ role: "user", parts: [{ text: h.text }] });
          } else if (h.sender === "coach") {
            conversationContents.push({ role: "model", parts: [{ text: h.text }] });
          }
        }
      }

      conversationContents.push({ role: "user", parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: conversationContents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "Consulta procesada con éxito.";

      return res.json({
        success: true,
        answer: replyText,
      });
    } catch (err: any) {
      console.error("Coach Chat Error:", err);
      return res.status(500).json({
        success: false,
        error: err.message || "Failed to generate response",
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(projectRoot, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

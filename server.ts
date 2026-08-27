import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // AI Canine Coach Gemini Endpoint
  app.post("/api/coach/chat", async (req, res) => {
    try {
      const { message, history = [], isEn = false } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(200).json({
          success: false,
          fallback: true,
          message: isEn
            ? "API Key not configured. Using local veterinary knowledge base."
            : "Chave de API não configurada. Utilizando base de conhecimento local."
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

      const systemInstruction = isEn
        ? `You are "Canine Coach 24/7", a world-class veterinary holistic specialist and canine behaviorist for the Portal Pet platform.
Your expertise covers:
1. Canine Ear Care & Otitis prevention (the Goodbye Otitis / Adeus Otite method, "L-shaped" ear canal anatomy, safe natural cleansers, no deep cotton swabs, temperature warming).
2. Natural Nutrition & Functional Homemade Remedies (Golden Paste / Curcumin turmeric paste, Bone Broth, probiotics, pumpkin, toxic foods like chocolate/grapes/onions/xylitol).
3. Anti-Itch & Skin Soothing (Gentian Violet 1% dilution 15 drops in 500ml shampoo, organic apple cider vinegar paw sprays, chamomile + aloe vera for hot spots).
4. Canine Behavior & Training (positive reinforcement, stopping coprophagia/eating poop with pineapple/probiotics, potty training routines, separation anxiety, 432Hz calming frequencies).
5. Fresh breath, teeth hygiene & joint/mobility care.

Response formatting guidelines:
- Speak in a friendly, caring, highly competent tone.
- Give concrete, actionable advice with step-by-step instructions and safe dosages.
- Always include natural remedies or practical tips if relevant.
- Include a bulleted breakdown of 2-4 key actionable points.
- Include a safety disclaimer if symptoms are severe (foul black discharge, bleeding, constant vomiting, head tilt, intense lethargy -> see a vet).
- Return your answer in JSON format with fields:
  "text": string (main explanation),
  "bullets": string[] (optional key points),
  "warning": string (optional veterinary safety warning),
  "recipe": object { "title": string, "items": string[], "instructions": string } (optional recipe/step).`
        : `Você é o "Coach Canino 24h", um especialista veterinário holístico e adestrador positivo oficial da plataforma Portal Pet.
Sua especialidade inclui:
1. Cuidados e Higienização de Ouvidos / Otite Canina (Método Adeus Otite, anatomia do conduto auditivo em formato "L", nunca usar cotonete no fundo para não perfurar o tímpano, aquecer o frasco nas mãos por 2 min, massagem na cartilagem até ouvir som "tchuc-tchuc", extrato de Própolis Verde sem álcool com Calêndula).
2. Alimentação Natural Funcional & Remédios Caseiros Seguros (Pasta Dourada de Cúrcuma, Caldo de Ossos, probióticos, alimentos tóxicos como chocolate, uva, cebola, alho em excesso e xilitol).
3. Alívio de Coceiras, Alergias e Dermatites (Protocolo da Violeta Genciana 1% com 15 gotas em 500ml de shampoo neutro, tônico de vinagre de maçã orgânico 1:2 com água para patinhas, chá de camomila gelado e babosa).
4. Comportamento e Adestramento Positivo (Parar de comer fezes/coprofagia com abacaxi e enzimas, educar xixi e cocô no lugar certo sem broncas, ansiedade de separação, dessensibilização de latidos, ondas sonoras 432Hz).
5. Hálito fresco, tártaro e saúde articular/mobilidade (colágeno, cúrcuma, ômega 3).

Diretrizes de resposta:
- Responda sempre em Português do Brasil com tom acolhedor, profissional e prestativo.
- Dê orientações práticas e precisas, com dosagens e passo a passo claro.
- Seja empático e responda exatamente o que o tutor perguntou (mesmo se for uma saudação como "oi", uma dúvida sobre remédio caseiro ou um desabafo sobre o cão).
- Adicione marcadores explicativos (bullets) para facilitar a leitura no celular.
- Se os sintomas forem graves (sangue, secreção fétida escura, cabeça inclinada, vômitos contínuos, febre), adicione um alerta claro orientando consulta presencial.
- Retorne SEMPRE em formato JSON com as chaves:
  "text": string (resposta principal clara e empática),
  "bullets": array de strings (pontos de ação ou passos práticos),
  "warning": string (alerta veterinário se aplicável, ou string vazia),
  "recipe": objeto opcional { "title": string, "items": string[], "instructions": string } (se envolver receita natural como Pasta Dourada, Tônico, etc.).`;

      // Build conversation contents
      const conversationContents: any[] = [];

      // Add recent history if provided
      if (Array.isArray(history) && history.length > 0) {
        for (const h of history.slice(-6)) {
          if (h.sender === "user") {
            conversationContents.push({ role: "user", parts: [{ text: h.text }] });
          } else if (h.sender === "coach") {
            conversationContents.push({ role: "model", parts: [{ text: h.text }] });
          }
        }
      }

      // Add current message
      conversationContents.push({ role: "user", parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: "gemini-3.7-flash",
        contents: conversationContents,
        config: {
          systemInstruction: systemInstruction,
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      const rawText = response.text || "{}";
      let parsedData: any = {};
      try {
        parsedData = JSON.parse(rawText);
      } catch (parseErr) {
        parsedData = { text: rawText };
      }

      return res.json({
        success: true,
        answer: parsedData.text || rawText,
        bullets: parsedData.bullets || [],
        warning: parsedData.warning || "",
        recipe: parsedData.recipe || null,
      });
    } catch (err: any) {
      console.error("Gemini Coach Chat Error:", err);
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
    const distPath = path.join(process.cwd(), "dist");
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

import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Clock,
  Sparkles,
  Music,
  Waves,
  ShieldAlert,
  X
} from 'lucide-react';

interface AudioSynthesizerPlayerProps {
  onClose: () => void;
}

export const AudioSynthesizerPlayer: React.FC<AudioSynthesizerPlayerProps> = ({ onClose }) => {
  const { t, isEn } = useApp();
  const [selectedFreq, setSelectedFreq] = useState<number>(432);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.4);
  const [timerMinutes, setTimerMinutes] = useState<number>(30);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(30 * 60);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const tracks = isEn
    ? [
        {
          hz: 432,
          name: 'Deep Calming & Anti-Anxiety',
          tag: '432 Hz • Golden Frequency',
          benefit: 'Heart rate reduction, gentle calming of the autonomic nervous system.',
          color: 'from-teal-600 to-emerald-700'
        },
        {
          hz: 528,
          name: 'Pain Relief & Muscle Recovery',
          tag: '528 Hz • Miracle Frequency',
          benefit: 'Biological resonance for muscle tension relief, joint comfort, and post-surgery support.',
          color: 'from-cyan-600 to-blue-700'
        },
        {
          hz: 174,
          name: 'Restorative Sleep & Anti-Barking',
          tag: '174 Hz • Grounding Base Tone',
          benefit: 'Soothes dogs who bark at night due to loneliness, easing isolation anxiety.',
          color: 'from-indigo-600 to-purple-700'
        },
        {
          hz: 396,
          name: 'Thunder & Fireworks Shield',
          tag: '396 Hz • Sonic Shielding',
          benefit: 'Dissipates sudden acoustic fear and aids sound desensitization.',
          color: 'from-amber-600 to-rose-700'
        }
      ]
    : [
        {
          hz: 432,
          name: 'Calma Profunda & Anti-Ansiedade',
          tag: '432 Hz • Frequência Áurea',
          benefit: 'Diminuição do ritmo cardíaco, relaxamento consciente do sistema nervoso autônomo.',
          color: 'from-teal-600 to-emerald-700'
        },
        {
          hz: 528,
          name: 'Alívio de Dores & Regeneração',
          tag: '528 Hz • Frequência Milagrosa',
          benefit: 'Ressonância biológica de alívio muscular e suporte a dores articulares e pós-cirúrgicas.',
          color: 'from-cyan-600 to-blue-700'
        },
        {
          hz: 174,
          name: 'Sono Restaurador & Anti-Latidos',
          tag: '174 Hz • Tom Base Acolhedor',
          benefit: 'Acalma cães que latem à noite por solidão, reduzindo a sensação de isolamento.',
          color: 'from-indigo-600 to-purple-700'
        },
        {
          hz: 396,
          name: 'Dessensibilização a Trovões & Fogos',
          tag: '396 Hz • Blindagem Sonora',
          benefit: 'Dissipação de medos acústicos súbitos e contracondicionamento sonoro.',
          color: 'from-amber-600 to-rose-700'
        }
      ];

  const currentTrack = tracks.find(t => t.hz === selectedFreq) || tracks[0];

  // Stop audio synthesis
  const stopAudio = () => {
    try {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      if (osc2Ref.current) {
        osc2Ref.current.stop();
        osc2Ref.current.disconnect();
        osc2Ref.current = null;
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.suspend();
      }
    } catch (e) {
      // ignore
    }
    setIsPlaying(false);
  };

  // Start audio synthesis
  const startAudio = (hz: number) => {
    stopAudio();
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioContextClass();
      audioCtxRef.current = ctx;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.25, ctx.currentTime); // keep soft for sensitive dog ears
      masterGain.connect(ctx.destination);
      gainRef.current = masterGain;

      // Primary tone (warm sine wave)
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(hz, ctx.currentTime);

      // Secondary binaural harmonic (+4Hz delta beat)
      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(hz + 3.5, ctx.currentTime);

      const gainSub = ctx.createGain();
      gainSub.gain.setValueAtTime(0.5, ctx.currentTime);

      osc1.connect(masterGain);
      osc2.connect(gainSub);
      gainSub.connect(masterGain);

      osc1.start();
      osc2.start();

      oscRef.current = osc1;
      osc2Ref.current = osc2;
      setIsPlaying(true);
    } catch (e) {
      console.error('Audio synthesizer error:', e);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio(selectedFreq);
    }
  };

  const handleSelectTrack = (hz: number) => {
    setSelectedFreq(hz);
    if (isPlaying) {
      startAudio(hz);
    }
  };

  // Volume change
  useEffect(() => {
    if (gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.setTargetAtTime(volume * 0.25, audioCtxRef.current.currentTime, 0.05);
    }
  }, [volume]);

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setRemainingSeconds(prev => {
          if (prev <= 1) {
            stopAudio();
            return timerMinutes * 60;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, timerMinutes]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  // Visualizer Waveform Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let step = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const mid = height / 2;

      ctx.lineWidth = 2;
      ctx.strokeStyle = isPlaying ? '#00c5b3' : '#94a3b8';
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const amplitude = isPlaying ? 16 + Math.sin(step * 0.05) * 6 : 2;
        const freqScale = selectedFreq / 150;
        const y = mid + Math.sin((x * 0.03 * freqScale) + step) * amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      if (isPlaying) {
        step += 0.04;
      }
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, selectedFreq]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-teal-100 shadow-2xl flex flex-col">
      
      {/* Header */}
      <div className={`bg-gradient-to-r ${currentTrack.color} p-6 sm:p-8 text-white relative transition-all`}>
        <button
          onClick={() => {
            stopAudio();
            onClose();
          }}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/20">
            🎵
          </div>
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest bg-white/20 text-white px-2.5 py-0.5 rounded-md">
              {isEn ? 'Real-Time Canine Synthesizer' : 'Sintetizador Canino em Tempo Real'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-0.5">
              {isEn ? 'Therapeutic Relief Frequencies' : 'Frequências Terapêuticas de Alívio'}
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-white/90 max-w-3xl leading-relaxed mt-2 font-medium">
          {isEn
            ? 'Real-time synthesized pure sound waves calibrated specifically for canine hearing frequencies, fostering rapid relief from anxiety, fireworks, thunderstorms, and stress.'
            : 'Áudios sintetizados com ondas puras ajustadas para a faixa acústica dos cães, promovendo alívio imediato contra estresse, tempestades, fogos de artifício e hiperatividade.'}
        </p>
      </div>

      {/* Main Player Area */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Active Track Banner & Waveform */}
        <div className="bg-slate-950 rounded-2xl p-6 text-white border border-slate-800 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs font-black text-teal-400 uppercase tracking-widest">
                {currentTrack.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {currentTrack.name}
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                {currentTrack.benefit}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                  {isEn ? 'Timer' : 'Temporizador'}
                </span>
                <span className="text-lg font-black text-teal-300 font-mono">
                  {formatTime(remainingSeconds)}
                </span>
              </div>
            </div>
          </div>

          {/* Animated Waveform Canvas */}
          <div className="w-full bg-slate-900/90 rounded-xl p-3 border border-slate-800 flex flex-col items-center">
            <canvas
              ref={canvasRef}
              width={600}
              height={64}
              className="w-full h-16 rounded"
            />
            <span className="text-[10px] font-bold text-slate-500 mt-1">
              {isPlaying
                ? (isEn ? `Synthesizing ${selectedFreq} Hz with active delta modulation` : `Sintetizando ${selectedFreq} Hz com modulação delta ativa`)
                : (isEn ? 'Audio Paused' : 'Áudio Pausado')}
            </span>
          </div>

          {/* Player Controls (Play, Volume, Timer Presets) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-[#00c5b3] hover:bg-teal-400 text-teal-950 flex items-center justify-center shadow-lg hover:scale-105 transition-all cursor-pointer font-black"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVolume(v => (v > 0 ? 0 : 0.4))}
                  className="text-slate-400 hover:text-white"
                >
                  {volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={e => setVolume(Number(e.target.value))}
                  className="w-24 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#00c5b3]"
                />
                <span className="text-xs text-slate-400 font-mono">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            </div>

            {/* Timer Selector */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 px-2 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {isEn ? 'Timer:' : 'Tempo:'}
              </span>
              {[15, 30, 60].map(mins => (
                <button
                  key={mins}
                  onClick={() => {
                    setTimerMinutes(mins);
                    setRemainingSeconds(mins * 60);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    timerMinutes === mins
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {mins} min
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Available Frequency Cards */}
        <div>
          <h4 className="text-sm font-black text-slate-900 mb-3">
            {isEn ? 'Select Recommended Frequency for the Situation:' : 'Selecione a Frequência Recomendada para a Situação:'}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tracks.map(track => {
              const isSelected = track.hz === selectedFreq;
              return (
                <div
                  key={track.hz}
                  onClick={() => handleSelectTrack(track.hz)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'bg-teal-50/80 border-teal-500 shadow-md ring-2 ring-teal-400/40'
                      : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-black text-teal-700 bg-teal-100/80 px-2 py-0.5 rounded-md">
                        {track.tag}
                      </span>
                      <h5 className="text-sm font-extrabold text-slate-900 mt-1">
                        {track.name}
                      </h5>
                    </div>
                    {isSelected && isPlaying && (
                      <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {track.benefit}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Usage Advice */}
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 text-xs text-amber-950">
          <strong>{isEn ? 'Application Tip:' : 'Dica de Aplicação:'}</strong>{' '}
          {isEn
            ? 'Dogs have hearing about 4 times more sensitive than humans. Keep the volume at a gentle, ambient level without headphones on the pet, allowing the frequency to fill the room comfortably.'
            : 'Os cães possuem audição cerca de 4x mais sensível que a humana. Deixe o volume suave e ambiente, sem fones de ouvido no pet, permitindo que a frequência preencha a sala de forma relaxante.'}
        </div>

      </div>

    </div>
  );
};

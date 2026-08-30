import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Volume2, VolumeX, Sparkles, Moon, Zap } from 'lucide-react';

export const AudioSynthesizerPlayer: React.FC = () => {
  const { isPlayingAudio, toggleAudioPlay, audioFrequency, setAudioFrequency, isEn, isPt } = useApp();
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (isPlayingAudio) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(audioFrequency, ctx.currentTime);

        // Soft gentle fade in
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 2);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        gainRef.current = gain;
      } catch (e) {
        console.error('Audio synthesizer error:', e);
      }
    } else {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.setValueAtTime(gainRef.current.gain.value, audioCtxRef.current.currentTime);
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          oscRef.current?.stop();
          audioCtxRef.current?.close();
          oscRef.current = null;
          gainRef.current = null;
          audioCtxRef.current = null;
        }, 500);
      }
    }

    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          audioCtxRef.current?.close();
        } catch {
          // ignore
        }
      }
    };
  }, [isPlayingAudio, audioFrequency]);

  return (
    <div className="bg-slate-900/95 border-2 border-rose-500/40 rounded-2xl p-4 shadow-xl text-white backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-rose-300">
              {isPt ? 'Frequência Anti-Ansiedade' : isEn ? 'Anti-Anxiety Frequencies' : 'Frecuencia Anti-Ansiedad'}
            </h4>
            <p className="text-[11px] text-slate-300">
              {audioFrequency === 528 ? '528Hz (Regeneración & Calma)' : '432Hz (Reducción de Cortisol)'}
            </p>
          </div>
        </div>

        <button
          onClick={toggleAudioPlay}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer shadow-md ${
            isPlayingAudio
              ? 'bg-rose-500 text-white animate-pulse'
              : 'bg-slate-800 hover:bg-slate-700 text-rose-200 border border-rose-500/30'
          }`}
        >
          {isPlayingAudio ? (
            <>
              <Volume2 className="w-4 h-4" />
              <span>{isPt ? 'Pausar' : isEn ? 'Pause' : 'Pausar'}</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4" />
              <span>{isPt ? 'Ouvir Agora' : isEn ? 'Play Audio' : 'Escuchar'}</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
        <button
          onClick={() => setAudioFrequency(528)}
          className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
            audioFrequency === 528
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>528Hz Satiety</span>
        </button>

        <button
          onClick={() => setAudioFrequency(432)}
          className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
            audioFrequency === 432
              ? 'bg-rose-600 text-white shadow-xs'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
          <span>432Hz Anti-Cortisol</span>
        </button>
      </div>
    </div>
  );
};

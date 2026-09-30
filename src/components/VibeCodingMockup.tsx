import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Terminal, Code, LayoutDashboard, BarChart3, Users, TrendingUp } from 'lucide-react';

type Stage = 'prompt' | 'code' | 'ui';

export default function VibeCodingMockup() {
  const [stage, setStage] = useState<Stage>('prompt');
  const [typedText, setTypedText] = useState('');
  const fullPrompt = 'Crie um dashboard de vendas com gráficos e métricas...';
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const clearAll = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const safeSetStage = (s: Stage) => {
      if (mountedRef.current) setStage(s);
    };
    const safeSetTypedText = (t: string) => {
      if (mountedRef.current) setTypedText(t);
    };

    const cycle = () => {
      if (!mountedRef.current) return;
      
      // Stage 1: Typing prompt
      safeSetStage('prompt');
      safeSetTypedText('');
      
      let charIndex = 0;
      intervalRef.current = setInterval(() => {
        if (!mountedRef.current) {
          clearAll();
          return;
        }
        if (charIndex <= fullPrompt.length) {
          safeSetTypedText(fullPrompt.slice(0, charIndex));
          charIndex++;
        } else {
          clearAll();
          timeoutRef.current = setTimeout(() => {
            if (!mountedRef.current) return;
            // Stage 2: Code generation
            safeSetStage('code');
            timeoutRef.current = setTimeout(() => {
              if (!mountedRef.current) return;
              // Stage 3: UI reveal
              safeSetStage('ui');
              timeoutRef.current = setTimeout(() => {
                cycle();
              }, 3000);
            }, 2500);
          }, 800);
        }
      }, 50);
    };

    timeoutRef.current = setTimeout(cycle, 500);

    return () => {
      mountedRef.current = false;
      clearAll();
    };
  }, []);

  const chartBars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];
  const codeLineCount = 8;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow behind mockup */}
      <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative rounded-xl border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50"
      >
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 text-xs text-zinc-500">
            <Terminal className="w-3 h-3" />
            <span>vibe-coding.ai</span>
          </div>
        </div>

        {/* Content area */}
        <div className="p-5 min-h-[280px] flex flex-col">
          <AnimatePresence mode="wait">
            {stage === 'prompt' && (
              <motion.div
                key="prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Terminal className="w-3 h-3 text-blue-400" />
                  </div>
                  <span>Descreva o que você quer criar</span>
                </div>
                <div className="rounded-lg border border-white/[0.06] bg-black/50 p-4">
                  <p className="text-sm text-white font-mono leading-relaxed">
                    {typedText}
                    <span className="typing-cursor text-blue-400 ml-0.5">▎</span>
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="h-2 w-16 rounded-full bg-white/5" />
                  <div className="h-2 w-24 rounded-full bg-white/5" />
                  <div className="h-2 w-20 rounded-full bg-white/5" />
                </div>
              </motion.div>
            )}

            {stage === 'code' && (
              <motion.div
                key="code"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Code className="w-3 h-3 text-blue-400" />
                  </div>
                  <span>Gerando código...</span>
                </div>
                <div className="space-y-2">
                  {[...Array(codeLineCount)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-[10px] text-zinc-600 w-4 text-right font-mono">{i + 1}</span>
                      <div
                        className="code-shimmer rounded"
                        style={{
                          height: '10px',
                          width: `${30 + ((i * 17 + 23) % 50)}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === 'ui' && (
              <motion.div
                key="ui"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 text-xs text-green-400 mb-1">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <LayoutDashboard className="w-3 h-3 text-green-400" />
                  </div>
                  <span>Dashboard pronto! ✓</span>
                </div>
                
                {/* Mini dashboard mockup */}
                <div className="rounded-lg border border-white/[0.06] bg-black/60 p-3 space-y-3">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: BarChart3, label: 'Vendas', value: 'R$ 42.5k', color: 'text-blue-400' },
                      { icon: Users, label: 'Clientes', value: '1,284', color: 'text-purple-400' },
                      { icon: TrendingUp, label: 'Crescimento', value: '+23%', color: 'text-green-400' },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="rounded-md border border-white/[0.06] bg-[#111]/50 p-2"
                      >
                        <stat.icon className={`w-3 h-3 ${stat.color} mb-1`} />
                        <p className="text-[10px] text-zinc-500">{stat.label}</p>
                        <p className="text-xs font-semibold text-white">{stat.value}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Chart mockup */}
                  <div className="rounded-md border border-white/[0.06] bg-[#111]/30 p-2 h-16 flex items-end gap-1">
                    {chartBars.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                        className="flex-1 rounded-sm bg-gradient-to-t from-blue-500/60 to-blue-400/20"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

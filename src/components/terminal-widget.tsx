'use client';

import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

interface TerminalWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: string | readonly string[];
}

export function TerminalWidget({ isOpen, onClose }: TerminalWidgetProps) {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [input, setInput] = useState('');
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (history.length === 0) {
        handleCommand('help');
      }
      // Delay focus slightly to ensure the element is rendered and transition has started
      const timeoutId = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let output: string | readonly string[] = `command not found: ${trimmed}. Type 'help' for available commands.`;
    
    const commands = (PORTFOLIO_DATA.terminalCommands as unknown as Record<string, string | readonly string[]>) || {};
    
    if (commands[trimmed]) {
      output = commands[trimmed];
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setInput('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const quickCommands = ['help', 'projects', 'skills', 'contact'];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-200">
      <div className="w-full max-w-2xl rounded-2xl border border-[var(--c-line)] bg-[var(--c-canvas)] dark:bg-[#0b0f17] shadow-2xl flex flex-col overflow-hidden font-[family-name:var(--font-jetbrains)] text-sm">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--c-line)] bg-black/10 dark:bg-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-semibold text-xs text-[var(--c-ink)] opacity-70">
            nandu@portfolio:~$
          </div>
          <button onClick={onClose} className="text-[var(--c-muted)] hover:text-[var(--c-ink)] transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Quick Commands */}
        <div className="flex flex-wrap gap-2 p-4 border-b border-[var(--c-line)] bg-[var(--c-surface)]/30">
          {quickCommands.map(cmd => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1 rounded-full text-xs border border-[var(--c-line)] hover:bg-[var(--c-surface)] text-[var(--c-ink)] transition-colors bg-[var(--c-canvas)]"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Output Area */}
        <div ref={outputRef} className="flex-1 p-4 max-h-[400px] overflow-y-auto space-y-4">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-green-500">nandu@portfolio:~$</span>
                <span className="text-[var(--c-ink)]">{item.command}</span>
              </div>
              <div className="text-[var(--c-muted)] ml-4 whitespace-pre-wrap">
                {Array.isArray(item.output) ? (
                  item.output.map((line, i) => <div key={i}>{line}</div>)
                ) : (
                  <div>{item.output}</div>
                )}
              </div>
            </div>
          ))}

          {/* Input Area */}
          <div className="flex items-center gap-2 mt-4 pb-2">
            <span className="text-green-500">nandu@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-[var(--c-ink)] caret-[var(--c-ink)]"
              autoFocus
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

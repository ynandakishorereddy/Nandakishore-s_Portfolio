'use client';

import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

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
    <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-200">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden font-[family-name:var(--font-jetbrains)] text-sm">
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <div className="font-semibold text-xs text-slate-500">
            nandu@portfolio: ~
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Quick Commands */}
        <div className="flex flex-wrap gap-2 p-4 border-b border-slate-100 bg-slate-50/50">
          {quickCommands.map(cmd => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1 rounded-md text-xs font-medium border border-slate-200 bg-white hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-colors shadow-sm"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Output Area */}
        <div ref={outputRef} className="flex-1 p-4 max-h-[400px] overflow-y-auto space-y-4 bg-white">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-indigo-600 font-bold">$</span>
                <span className="text-slate-800 font-medium">{item.command}</span>
              </div>
              <div className="text-slate-600 ml-4 whitespace-pre-wrap leading-relaxed">
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
            <span className="text-indigo-600 font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-slate-800 caret-indigo-600 font-medium"
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

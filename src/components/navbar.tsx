'use client';

import * as React from 'react';
import { Menu, X, Terminal, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onTerminalOpen?: () => void;
}

export function Navbar({ onTerminalOpen }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('');

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-88px 0px -60% 0px',
      }
    );

    const sectionIds = ['about', 'projects', 'architecture', 'skills', 'credentials', 'contact'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-[88px] flex items-center transition-all duration-300',
          scrolled 
            ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm' 
            : 'bg-transparent border-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
          
          {/* Left Side: Logo & Status */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-200 shadow-sm text-indigo-600 font-bold text-xl transition-transform hover:scale-105"
            >
              YN
            </a>
            
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              <span className="text-xs font-semibold text-slate-700">Available for hire</span>
            </div>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 border border-slate-200/60 p-1 rounded-xl">
            {PORTFOLIO_DATA.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm transition-all',
                    isActive 
                      ? 'bg-white text-indigo-600 shadow-sm border border-slate-200/60 font-semibold' 
                      : 'text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-200/50 border border-transparent'
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Side: Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {onTerminalOpen && (
              <button
                onClick={onTerminalOpen}
                className="hidden md:flex p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors border border-transparent hover:border-indigo-100"
                aria-label="Open terminal"
              >
                <Terminal size={20} />
              </button>
            )}

            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium text-sm transition-all hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare size={16} />
              Let's Talk
            </a>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity lg:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeMobileMenu}
      />
      
      <div 
        className={cn(
          'fixed top-0 right-0 z-40 h-full w-[280px] bg-white border-l border-slate-200 pt-[88px] transition-transform duration-300 lg:hidden shadow-2xl',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col gap-2 p-4">
          {PORTFOLIO_DATA.navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className={cn(
                  'px-4 py-3 rounded-lg text-base transition-colors',
                  isActive 
                    ? 'bg-indigo-50 text-indigo-600 font-semibold border border-indigo-100' 
                    : 'text-slate-600 font-medium hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                )}
              >
                {link.label}
              </a>
            );
          })}
          
          <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-3">
            {onTerminalOpen && (
              <button
                onClick={() => {
                  onTerminalOpen();
                  closeMobileMenu();
                }}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-left text-base font-medium text-slate-700 hover:bg-slate-50 border border-transparent transition-colors"
              >
                <Terminal size={20} />
                Open Terminal
              </button>
            )}
            
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium text-base w-full hover:bg-indigo-700 transition-colors shadow-sm"
            >
              <MessageSquare size={18} />
              Let's Talk
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

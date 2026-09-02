'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Terminal, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onTerminalOpen?: () => void;
}

export function Navbar({ onTerminalOpen }: NavbarProps) {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('');

  React.useEffect(() => {
    setMounted(true);

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
          'fixed top-0 left-0 right-0 z-50 h-[88px] flex items-center transition-colors duration-300',
          scrolled ? 'nav-frost border-b border-[var(--c-line)]' : 'bg-transparent border-transparent'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          
          {/* Left Side: Logo & Status */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--c-accent-indigo)] text-white font-bold text-xl transition-transform hover:scale-105">
              YN
            </a>
            
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--c-line)] bg-[var(--c-surface)]">
              <span className="w-2 h-2 rounded-full bg-[var(--c-accent-emerald)] animate-pulse-dot" />
              <span className="text-xs font-medium text-[var(--c-ink)]">Available for hire</span>
            </div>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {PORTFOLIO_DATA.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                    isActive 
                      ? 'bg-[var(--c-surface)] text-[var(--c-accent-indigo)]' 
                      : 'text-[var(--c-muted)] hover:text-[var(--c-ink)] hover:bg-[var(--c-surface)]/50'
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Side: Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md text-[var(--c-muted)] hover:text-[var(--c-ink)] hover:bg-[var(--c-surface)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}

            {onTerminalOpen && (
              <button
                onClick={onTerminalOpen}
                className="hidden md:flex p-2 rounded-md text-[var(--c-muted)] hover:text-[var(--c-ink)] hover:bg-[var(--c-surface)] transition-colors"
                aria-label="Open terminal"
              >
                <Terminal size={20} />
              </button>
            )}

            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--c-ink)] text-[var(--c-canvas)] font-medium text-sm transition-transform hover:scale-105"
            >
              <MessageSquare size={16} />
              Let's Talk
            </a>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-md text-[var(--c-ink)]"
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
          'fixed inset-0 z-40 bg-[var(--c-canvas)]/80 backdrop-blur-sm transition-opacity lg:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeMobileMenu}
      />
      
      <div 
        className={cn(
          'fixed top-0 right-0 z-40 h-full w-[280px] bg-[var(--c-surface)] border-l border-[var(--c-line)] pt-[88px] transition-transform duration-300 lg:hidden shadow-2xl',
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
                  'px-4 py-3 rounded-md text-base font-medium transition-colors',
                  isActive 
                    ? 'bg-[var(--c-canvas)] text-[var(--c-accent-indigo)] border border-[var(--c-line)]' 
                    : 'text-[var(--c-muted)] hover:text-[var(--c-ink)] hover:bg-[var(--c-canvas)]/50'
                )}
              >
                {link.label}
              </a>
            );
          })}
          
          <div className="mt-4 pt-4 border-t border-[var(--c-line)] flex flex-col gap-3">
            {onTerminalOpen && (
              <button
                onClick={() => {
                  onTerminalOpen();
                  closeMobileMenu();
                }}
                className="flex items-center gap-2 px-4 py-3 rounded-md text-left text-base font-medium text-[var(--c-ink)] hover:bg-[var(--c-canvas)]/50 transition-colors"
              >
                <Terminal size={20} />
                Open Terminal
              </button>
            )}
            
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-[var(--c-ink)] text-[var(--c-canvas)] font-medium text-base w-full"
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

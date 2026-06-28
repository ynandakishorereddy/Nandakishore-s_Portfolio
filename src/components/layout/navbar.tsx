'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navItems, personalInfo } from '@/data/portfolio-data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold tracking-wider">
              NR
            </div>
            <span className="font-semibold text-lg hidden sm:block">Nandakishore</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600 relative py-2",
                    isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-300"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-white dark:bg-slate-950 shadow-2xl z-50 flex flex-col md:hidden overflow-y-auto"
            >
              <div className="p-4 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
                <span className="font-semibold text-lg">Menu</span>
                <button onClick={closeMenu} className="p-2">
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-col py-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "px-6 py-3 text-base font-medium transition-colors",
                        isActive 
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-600" 
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="p-6 mt-auto border-t border-slate-100 dark:border-slate-800">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors font-medium"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

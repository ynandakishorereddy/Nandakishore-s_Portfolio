import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-8">
        <h1 className="text-9xl font-extrabold text-slate-200 dark:text-slate-800 tracking-tighter">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-slate-900 dark:text-white">Page Not Found</span>
        </div>
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 text-lg">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25 active:scale-95"
      >
        <Home size={18} />
        Back to Home
      </Link>
    </div>
  );
}

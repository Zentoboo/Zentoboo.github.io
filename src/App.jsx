import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Portfolio from './Portfolio';
import Gallery from './Gallery';
import { Moon, Sun } from 'lucide-react';
import CursorGrid from "./CursorGrid";

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : false;
    });

    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className={`relative min-h-screen transition-colors duration-300 overscroll-none`}>
            {/* Navigation */}
            <nav className="border-gray-400 sticky top-0 bg-white/90 backdrop-blur-sm z-50 dark:bg-zinc-900/90 dark:border-zinc-700">
                <div className="max-w-4xl px-12 mx-auto py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold hidden">Bertrand Christopher</div>
                        <div className="text-xs font-bold text-gray-400 lg:block">
                            under construction... gonna continue after exam T.T
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex gap-4 md:gap-6 text-sm">
                                <Link
                                    to="/"
                                    className={`hover:text-gray-600 dark:hover:text-zinc-400 transition ${location.pathname === '/' ? 'font-semibold' : ''}`}
                                >
                                    portfolio
                                </Link>
                                <Link
                                    to="/gallery"
                                    className={`hover:text-gray-600 dark:hover:text-zinc-400 transition ${location.pathname === '/gallery' ? 'font-semibold' : ''}`}
                                >
                                    gallery
                                </Link>
                                <button
                                    onClick={() => setIsDarkMode(!isDarkMode)}
                                    className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                                    aria-label="Toggle dark mode"
                                >
                                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/gallery" element={<Gallery/>} />
            </Routes>

            {/* Footer */}
            <footer className="max-w-4xl px-12 mx-auto py-8">
                <div className="px-12 py-8 border border-gray-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 flex justify-between">
                    <div>Last Updated: 16/01/2026</div>
                    <div>Bertrand Christopher</div>
                </div>
            </footer>
            {/* CursorGrid at bottom */}
            <div className="fixed inset-0 -z-1">
                <CursorGrid isDarkMode={isDarkMode} />
            </div>
        </div>
    );
}
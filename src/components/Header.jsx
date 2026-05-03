import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-7 backdrop-blur-md border-b transition-all duration-500" style={{ backgroundColor: 'var(--app-bg)', borderColor: 'var(--app-border)', color: 'var(--app-text)' }}>
            <Link to="/" className="group flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:scale-110 transition-transform duration-300">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 3V5M12 19V21M3 12H5M19 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M16 8L18 6M6 18L8 16M18 18L16 16M8 8L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div className="flex flex-col">
                    <span className="font-display font-medium text-xl tracking-tight group-hover:opacity-80 transition-opacity duration-300">
                        Second Look
                    </span>
                </div>
            </Link>

            <div className="flex items-center gap-6 md:gap-10">
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        to="/analyze"
                        className="nav-link font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 opacity-70 hover:opacity-100"
                    >
                        Audit Tool
                    </Link>
                    <Link
                        to="/audit"
                        className="nav-link font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 opacity-70 hover:opacity-100"
                    >
                        Sample Report
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        to="/analyze"
                        className="btn-primary px-6 py-3 bg-transparent border font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-400 opacity-80 hover:opacity-100"
                        style={{ borderColor: 'var(--app-border)' }}
                    >
                        <span>Start Audit →</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

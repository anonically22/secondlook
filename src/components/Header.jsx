import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 md:px-12 py-8 bg-transparent relative z-50">
            <div className="flex items-center gap-2">
                <Link to="/" className="text-2xl font-display font-bold tracking-tighter uppercase">Second Look</Link>
            </div>
            <div className="flex items-center gap-12">
                <nav className="hidden md:flex items-center gap-8 uppercase text-[11px] tracking-widest font-medium">
                    <Link className="hover:text-primary transition-colors" to="/analyze">Analyze</Link>
                </nav>
                <div className="flex gap-4">
                    {/* Minimalist Approach: Navigation reduced as requested */}
                </div>
            </div>
        </header>
    );
};

export default Header;

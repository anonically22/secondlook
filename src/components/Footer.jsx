import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-t transition-colors duration-500 px-6 md:px-16 pt-24 pb-12" style={{ backgroundColor: 'var(--app-bg)', borderColor: 'var(--app-border)', color: 'var(--app-text)' }}>
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
                    {/* Brand Section */}
                    <div className="md:col-span-4">
                        <Link to="/" className="group flex items-center gap-3 mb-8">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:rotate-90 transition-transform duration-700">
                                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                                <path d="M12 3V5M12 19V21M3 12H5M19 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M16 8L18 6M6 18L8 16M18 18L16 16M8 8L6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <span className="font-display font-medium text-2xl tracking-tight">Second Look</span>
                        </Link>
                        <p className="font-mono text-[11px] uppercase tracking-widest leading-loose max-w-sm opacity-50">
                            Mapping the architecture of design. We audit component systems to reveal drift, duplication, and structural integrity.
                        </p>
                    </div>

                    {/* Navigation Section */}
                    <div className="md:col-span-3 md:col-start-6">
                        <h4 className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-8">Platform_Nodes</h4>
                        <div className="flex flex-col gap-5">
                            <Link to="/analyze" className="font-mono text-[11px] uppercase tracking-widest hover:text-primary transition-all duration-300 opacity-70">
                                Audit_Tool
                            </Link>
                            <Link to="/audit" className="font-mono text-[11px] uppercase tracking-widest hover:text-primary transition-all duration-300 opacity-70">
                                System_Health
                            </Link>
                            <Link to="/audit#inventory" className="font-mono text-[11px] uppercase tracking-widest hover:text-primary transition-all duration-300 opacity-70">
                                Component_Archive
                            </Link>
                        </div>
                    </div>

                    {/* Documentation Section */}
                    <div className="md:col-span-3">
                        <h4 className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-8">System_Artifacts</h4>
                        <div className="flex flex-col gap-5">
                            <a href="#" className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest hover:text-primary transition-all duration-300 opacity-70">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                                </svg>
                                Source_Archive
                            </a>
                            <a href="#" className="font-mono text-[11px] uppercase tracking-widest hover:text-primary transition-all duration-300 opacity-70">
                                Architecture_Docs
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t pt-12 flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderColor: 'var(--app-border)' }}>
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase opacity-40">
                        <span>© 2026 Crafted with</span>
                        <span className="text-primary animate-pulse">❤️</span>
                        <span>by Anonical22</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border transition-colors duration-500" style={{ backgroundColor: 'var(--app-card-bg)', borderColor: 'var(--app-border)' }}>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                            <span className="font-mono text-[10px] uppercase tracking-widest font-bold opacity-60">v2.0.3</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

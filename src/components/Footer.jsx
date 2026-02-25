const Footer = () => {
    return (
        <footer className="bg-cream border-t border-charcoal/10 py-20 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-3xl font-display font-bold tracking-tighter uppercase mb-6 block">Second Look</span>
                        <p className="text-muted-text font-light max-w-sm text-sm">A solo design project by an indie developer from India, focusing on the intersection of UI/UX utility and typographic excellence.</p>
                    </div>
                    <div>
                        <h4 className="uppercase text-[10px] tracking-[0.3em] font-bold mb-8 text-charcoal/40">LOCATION</h4>
                        <div className="space-y-2">
                            <p className="text-xs font-light tracking-widest uppercase">KOL, IND</p>
                            <p className="text-xs font-light tracking-widest whitespace-nowrap">REMOTE COHORT</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="uppercase text-[10px] tracking-[0.3em] font-bold mb-8 text-charcoal/40">FOLLOW</h4>
                        <div className="flex flex-col gap-2 text-xs font-light">
                            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
                            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
                            <a className="hover:text-primary transition-colors" href="#">Behance</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-charcoal/10 pt-10">
                    <p className="text-[10px] tracking-widest text-charcoal/40 uppercase">© 2026 SECOND LOOK STUDIO. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8 text-[10px] tracking-widest text-charcoal/40 uppercase mt-4 md:mt-0">
                        <a className="hover:text-charcoal transition-colors" href="#">Privacy</a>
                        <a className="hover:text-charcoal transition-colors" href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

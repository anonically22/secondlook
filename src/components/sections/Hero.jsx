const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center px-6 md:px-16 pt-32 pb-24 overflow-hidden border-b transition-colors duration-500" style={{ borderColor: 'var(--app-border)' }}>
            {/* Background grid texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-20 items-center relative z-10">
                {/* Left — Primary content */}
                <div>
                    <div className="animate-hero">
                        <span className="font-mono text-[10px] tracking-[0.35em] uppercase block mb-10 opacity-40">
                            Second Look — Component Intelligence Platform
                        </span>
                    </div>

                    <h1 className="animate-hero animate-hero-d1 font-display font-medium leading-[0.88] tracking-tighter mb-10"
                        style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}>
                        Detect design<br />
                        drift before<br />
                        <em className="not-italic opacity-40">it ships.</em>
                    </h1>

                    <p className="animate-hero animate-hero-d2 font-sans font-light max-w-lg mb-14 leading-relaxed opacity-50"
                       style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}>
                        Second Look audits your product's component system for inconsistency, 
                        duplication, spacing breakdowns, hierarchy failures, and accessibility issues.
                    </p>

                    <div className="animate-hero animate-hero-d3 flex flex-col sm:flex-row gap-5">
                        <button
                            onClick={() => window.location.href = '/analyze'}
                            className="btn-primary group px-10 py-5 bg-primary text-cream dark:bg-cream dark:text-ink uppercase font-sans font-semibold text-[11px] tracking-[0.25em]"
                        >
                            <span>Audit a Product</span>
                        </button>
                        <button
                            onClick={() => document.getElementById('findings').scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 border uppercase font-sans font-medium text-[11px] tracking-[0.25em] transition-all duration-500 opacity-70 hover:opacity-100"
                            style={{ borderColor: 'var(--app-border)' }}
                        >
                            View Sample Audit
                        </button>
                    </div>
                </div>

                {/* Right — Abstract audit visualization */}
                <div className="hidden lg:block animate-hero animate-hero-d2">
                    <div className="relative border border-white/8 bg-white/[0.02] p-8 aspect-square">
                        {/* Scan line */}
                        <div className="scan-line" />

                        {/* Audit grid mock */}
                        <div className="space-y-4 h-full flex flex-col justify-center">
                            {[
                                { label: 'Component Scan', pct: 87, col: 'bg-cream/20' },
                                { label: 'Drift Detected', pct: 43, col: 'bg-primary/50' },
                                { label: 'Spacing Issues', pct: 61, col: 'bg-cream/15' },
                                { label: 'A11y Signals',   pct: 28, col: 'bg-primary/30' },
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-mono text-[9px] tracking-[0.25em] text-cream/30 uppercase">{item.label}</span>
                                        <span className="font-mono text-[9px] text-cream/20">{item.pct}%</span>
                                    </div>
                                    <div className="h-px bg-white/5 w-full">
                                        <div
                                            className={`h-px ${item.col}`}
                                            style={{ width: `${item.pct}%`, transition: 'width 2s ease' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Corner labels */}
                        <span className="absolute top-3 left-4 font-mono text-[8px] tracking-widest text-cream/15 uppercase">Audit v2.0</span>
                        <span className="absolute bottom-3 right-4 font-mono text-[8px] tracking-widest text-primary/40 uppercase">Live Scan</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

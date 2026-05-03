import { useEffect, useRef } from 'react';

const reportRows = [
    { field: 'Product',        value: 'Untitled SaaS v2.4' },
    { field: 'Audit Date',     value: '2026 · Q2' },
    { field: 'Scope',          value: 'Full Component Scan' },
    { field: 'Findings',       value: '14 issues, 3 critical' },
    { field: 'Coverage',       value: '87% component surface' },
    { field: 'Export Format',  value: 'PDF · Markdown · JSON' },
];

const ReportExport = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
            { threshold: 0.12 }
        );
        sectionRef.current?.querySelectorAll('.reveal, .reveal-left').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-40 px-6 md:px-16 border-b transition-colors duration-500" style={{ backgroundColor: 'var(--app-card-bg)', borderColor: 'var(--app-border)' }}>
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-20 items-center">
                {/* Left */}
                <div>
                    <div className="reveal">
                        <span className="font-mono text-[9px] tracking-[0.35em] uppercase block mb-6 opacity-30">Deliverable</span>
                        <h2
                            className="font-display font-medium tracking-tighter leading-[0.9] mb-10"
                            style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
                        >
                            Shareable<br />Audit Reports
                        </h2>
                    </div>
                    <p className="reveal reveal-delay-2 font-sans font-light max-w-sm text-sm leading-relaxed mb-14 opacity-40">
                        Export structured component audit reports for product teams, design reviews, 
                        and system improvement workflows. Every finding is traceable.
                    </p>
                    <div className="reveal reveal-delay-3 flex gap-6">
                        {['PDF', 'MD', 'JSON'].map(fmt => (
                            <div key={fmt} className="border px-6 py-3" style={{ borderColor: 'var(--app-border)' }}>
                                <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-40">{fmt}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Document preview */}
                <div className="reveal reveal-delay-2">
                    <div className="border transition-colors duration-500" style={{ backgroundColor: 'var(--app-card-bg)', borderColor: 'var(--app-border)' }}>
                        {/* Doc header */}
                        <div className="border-b px-8 py-6 flex items-center justify-between" style={{ borderColor: 'var(--app-border)' }}>
                            <div>
                                <span className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-1 opacity-25">Audit Report</span>
                                <span className="font-display font-medium text-lg opacity-90">Component Audit · 2026</span>
                            </div>
                            <div className="border border-primary/30 px-4 py-2">
                                <span className="font-mono text-[9px] tracking-widest text-primary/70 uppercase">Export Ready</span>
                            </div>
                        </div>

                        {/* Doc rows */}
                        <div className="px-8 py-6 space-y-0">
                            {reportRows.map((row, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b last:border-0" style={{ borderColor: 'var(--app-border)' }}>
                                    <span className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-25">{row.field}</span>
                                    <span className="font-sans font-light text-xs opacity-60">{row.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Doc footer */}
                        <div className="border-t px-8 py-4 flex justify-between items-center" style={{ borderColor: 'var(--app-border)' }}>
                            <span className="font-mono text-[8px] tracking-widest uppercase opacity-15">Second Look · Component Intelligence</span>
                            <span className="font-mono text-[8px] opacity-15">SL-RPT-001</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReportExport;

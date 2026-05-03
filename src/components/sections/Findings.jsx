import { useEffect, useRef } from 'react';

const findings = [
    {
        index: 'Finding 01',
        title: 'Button Inconsistency',
        problem: '5 button variants used for the same primary action across 3 views.',
        impact: 'Weakens system consistency and erodes design trust for returning users.',
        recommendation: 'Standardize into one reusable variant with contextual state modifiers.',
        severity: 'High',
    },
    {
        index: 'Finding 02',
        title: 'Spacing Breakdown',
        problem: 'Inconsistent spacing rhythm between content blocks — 12px, 16px, 20px used interchangeably.',
        impact: 'Visual instability creates latent friction in vertical reading flow.',
        recommendation: 'Normalize to a 4pt spacing scale. Purge ad-hoc margin overrides.',
        severity: 'Medium',
    },
    {
        index: 'Finding 03',
        title: 'Hierarchy Conflict',
        problem: 'Three competing typographic weights at the same level across card components.',
        impact: 'Poor scan efficiency — users cannot identify primary information without deliberate effort.',
        recommendation: 'Rebalance visual weight. Reserve bold for one dominant signal per context.',
        severity: 'High',
    },
];

const severityColor = { High: 'text-primary border-primary/30', Medium: 'opacity-60 border-current/20' };

const Findings = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll('.reveal, .line-grow').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="findings" ref={sectionRef} className="py-40 px-6 md:px-16 border-b transition-colors duration-500" style={{ backgroundColor: 'var(--app-card-bg)', borderColor: 'var(--app-border)' }}>
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-24 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-end">
                    <div className="reveal">
                        <span className="font-mono text-[9px] tracking-[0.35em] uppercase block mb-6 opacity-30">Audit Artifact</span>
                        <h2
                            className="font-display font-medium tracking-tighter leading-[0.9]"
                            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}
                        >
                            Inside an Audit
                        </h2>
                    </div>
                    <div className="reveal reveal-delay-2 border px-6 py-4 self-end transition-colors" style={{ borderColor: 'var(--app-border)' }}>
                        <span className="font-mono text-[9px] tracking-[0.25em] uppercase block mb-1 opacity-40">Report Format</span>
                        <span className="font-mono text-[11px] opacity-60">SL-AUDIT-2026</span>
                    </div>
                </div>

                {/* Findings — document style */}
                <div className="space-y-0">
                    {findings.map((f, i) => (
                        <div
                            key={i}
                            className={`reveal reveal-delay-${i + 1} group border-t py-14 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 transition-all duration-500 px-4 -mx-4`}
                            style={{ borderColor: 'var(--app-border)' }}
                        >
                            {/* Left metadata */}
                            <div className="space-y-4">
                                <span className="font-mono text-[9px] tracking-[0.3em] uppercase block opacity-30">{f.index}</span>
                                <h3 className="font-display font-medium text-2xl tracking-tight opacity-90">{f.title}</h3>
                                <span className={`inline-block font-mono text-[9px] tracking-widest uppercase border px-3 py-1 ${severityColor[f.severity]}`}>
                                    {f.severity}
                                </span>
                            </div>

                            {/* Right content */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                                <div>
                                    <span className="font-mono text-[9px] tracking-[0.3em] text-primary uppercase block mb-3 opacity-70">Problem</span>
                                    <p className="font-sans font-light text-sm leading-relaxed opacity-60">{f.problem}</p>
                                </div>
                                <div>
                                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-3 opacity-30">Impact</span>
                                    <p className="font-sans font-light text-sm leading-relaxed opacity-60">{f.impact}</p>
                                </div>
                                <div>
                                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-3 opacity-30">Recommendation</span>
                                    <p className="font-sans font-medium text-sm leading-relaxed opacity-90">{f.recommendation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="border-t" style={{ borderColor: 'var(--app-border)' }} />
                </div>
            </div>
        </section>
    );
};

export default Findings;

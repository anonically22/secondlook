import { useEffect, useRef } from 'react';

const steps = [
    { index: '01', label: 'Input Product', sub: 'Submit a URL or design file' },
    { index: '02', label: 'Crawl Components', sub: 'Pattern recognition across the UI surface' },
    { index: '03', label: 'Detect Drift', sub: 'Cross-reference against system baselines' },
    { index: '04', label: 'Generate Report', sub: 'Structured, shareable audit artifact' },
];

const Workflow = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
            { threshold: 0.12 }
        );
        sectionRef.current?.querySelectorAll('.reveal, .line-grow').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-40 px-6 md:px-16 border-b transition-colors duration-500" style={{ borderColor: 'var(--app-border)' }}>
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-24 reveal">
                    <span className="font-mono text-[9px] tracking-[0.35em] uppercase block mb-6 opacity-30">Process</span>
                    <h2
                        className="font-display font-medium tracking-tighter leading-[0.9]"
                        style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}
                    >
                        How It Works
                    </h2>
                </div>

                {/* Horizontal steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                    {steps.map((step, i) => (
                        <div key={i} className={`reveal reveal-delay-${i + 1} group relative border-t pt-10 pb-12 pr-8 transition-colors duration-500`} style={{ borderColor: 'var(--app-border)' }}>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-20">{step.index}</span>
                                    {i < steps.length - 1 && (
                                        <span className="hidden md:inline font-mono text-[10px] pr-4 opacity-10">→</span>
                                    )}
                                </div>

                                <h3
                                    className="font-display font-medium transition-colors duration-400 tracking-tight leading-tight opacity-90 group-hover:opacity-100"
                                    style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2rem)' }}
                                >
                                    {step.label}
                                </h3>

                                <p className="font-sans font-light text-xs leading-relaxed transition-colors duration-500 opacity-30 group-hover:opacity-60">
                                    {step.sub}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;

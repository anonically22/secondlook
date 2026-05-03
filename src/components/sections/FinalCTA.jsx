import { useEffect, useRef } from 'react';

const FinalCTA = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
            { threshold: 0.15 }
        );
        sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-48 px-6 md:px-16 relative overflow-hidden border-b transition-colors duration-500" style={{ borderColor: 'var(--app-border)' }}>
            {/* Background text watermark */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]"
                aria-hidden="true"
            >
                <span
                    className="font-display font-medium whitespace-nowrap"
                    style={{ fontSize: 'clamp(8rem, 18vw, 20rem)', lineHeight: 1 }}
                >
                    Audit
                </span>
            </div>

            <div className="max-w-[1000px] mx-auto text-center relative z-10">
                <div className="reveal">
                    <span className="font-mono text-[9px] tracking-[0.35em] uppercase block mb-10 opacity-30">Ready</span>
                    <h2
                        className="font-display font-medium tracking-tighter leading-[0.88] mb-14"
                        style={{ fontSize: 'clamp(3rem, 7.5vw, 8rem)' }}
                    >
                        Audit Before<br />Your Users Notice
                    </h2>
                </div>

                <p className="reveal reveal-delay-2 font-display italic font-light mb-16 opacity-30"
                   style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)' }}>
                    "Inconsistency is invisible until it becomes trust erosion."
                </p>

                <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-5 justify-center">
                    <button
                        onClick={() => window.location.href = '/analyze'}
                        className="btn-primary px-14 py-5 bg-primary text-cream dark:bg-cream dark:text-ink uppercase font-sans font-semibold text-[11px] tracking-[0.25em]"
                    >
                        <span>Audit a Product</span>
                    </button>
                    <button
                        onClick={() => document.getElementById('findings').scrollIntoView({ behavior: 'smooth' })}
                        className="px-14 py-5 border uppercase font-sans font-medium text-[11px] tracking-[0.25em] transition-all duration-500 opacity-60 hover:opacity-100"
                        style={{ borderColor: 'var(--app-border)' }}
                    >
                        View Sample Audit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;

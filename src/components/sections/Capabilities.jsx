import { useEffect, useRef } from 'react';

const capabilities = [
    {
        index: '01',
        title: 'Component Inventory',
        body: 'Maps every repeated UI pattern across your product surface. Identifies structural relationships between elements at scale.',
        align: 'left',
    },
    {
        index: '02',
        title: 'Design Drift',
        body: 'Detects inconsistency and visual deviation across components. Surfaces the entropy accumulating inside your system.',
        align: 'right',
    },
    {
        index: '03',
        title: 'Spacing Integrity',
        body: 'Checks spacing rhythm and structural consistency against your base scale. Exposes the places where layout silently breaks.',
        align: 'left',
    },
    {
        index: '04',
        title: 'Hierarchy Logic',
        body: 'Validates visual structure and information flow across every view. Ensures users parse intention, not noise.',
        align: 'right',
    },
    {
        index: '05',
        title: 'Accessibility Signals',
        body: 'Flags readability and contrast issues before they become compliance problems. Structural audit, not a color checker.',
        align: 'left',
    },
    {
        index: '06',
        title: 'Duplication Detection',
        body: 'Finds unnecessary component variants that fragment your system. Reduces surface area without reducing expressiveness.',
        align: 'right',
    },
];

const Capabilities = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.12 }
        );

        const targets = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .line-grow');
        targets?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-40 px-6 md:px-16 border-b transition-colors duration-500" style={{ borderColor: 'var(--app-border)' }}>
            <div className="max-w-[1400px] mx-auto">
                {/* Section header */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="reveal">
                        <span className="font-mono text-[9px] tracking-[0.35em] uppercase block mb-6 opacity-30">Audit Scope</span>
                        <h2
                            className="font-display font-medium leading-[0.9] tracking-tighter"
                            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}
                        >
                            What Second Look<br />Audits
                        </h2>
                    </div>
                    <p className="reveal reveal-delay-2 font-sans font-light max-w-xs text-sm leading-relaxed self-end opacity-40">
                        Six signal categories. One structured report. Zero ambiguity.
                    </p>
                </div>

                {/* Editorial modules */}
                <div className="space-y-0">
                    {capabilities.map((cap, i) => (
                        <div
                            key={cap.index}
                            className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex flex-col md:flex-row items-stretch border-t py-12 gap-8 md:gap-0 transition-colors duration-500 ${cap.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                            style={{ borderColor: 'var(--app-border)' }}
                        >
                            {/* Index */}
                            <div className="md:w-[120px] shrink-0 flex items-start md:items-center">
                                <span className="num-pulse font-mono text-[11px] tracking-widest opacity-20">{cap.index}</span>
                            </div>

                            {/* Title */}
                            <div className={`md:flex-1 flex items-center ${cap.align === 'right' ? 'md:justify-end' : ''}`}>
                                <h3
                                    className="font-display font-medium group-hover:text-primary transition-colors duration-500 tracking-tight leading-tight opacity-80 group-hover:opacity-100"
                                    style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)' }}
                                >
                                    {cap.title}
                                </h3>
                            </div>

                            {/* Body */}
                            <div className={`md:w-[380px] shrink-0 flex items-center ${cap.align === 'right' ? 'md:mr-20' : 'md:ml-20'}`}>
                                <p className="font-sans font-light text-sm leading-relaxed transition-colors duration-500 opacity-40 group-hover:opacity-70">
                                    {cap.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom rule */}
                <div className="border-t mt-0" style={{ borderColor: 'var(--app-border)' }} />
            </div>
        </section>
    );
};

export default Capabilities;

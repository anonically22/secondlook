import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Admin = () => {
    const metrics = [
        { label: 'Active Engagement', value: '2,491', sub: 'Verified Users' },
        { label: 'UX Index Rating', value: '78.4', sub: 'Mean Quality Score', total: '/100' },
        { label: 'Neural Latency', value: '1.2', sub: 'Inference Speed', unit: 's' },
    ];

    const domains = [
        { id: '01', name: 'stripe.com', category: 'Financial Infrastructure', inquiries: '1,240' },
        { id: '02', name: 'linear.app', category: 'Software Delivery', inquiries: '952' },
        { id: '03', name: 'airbnb.com', category: 'Hospitality Marketplace', inquiries: '884' },
        { id: '04', name: 'apple.com', category: 'Consumer Electronics', inquiries: '721' },
    ];

    return (
        <div className="relative overflow-x-hidden min-h-screen bg-ink text-cream selection:bg-primary selection:text-cream font-sans">
            <Header />

            <main className="flex-1 px-8 py-32 lg:px-20 max-w-7xl mx-auto w-full relative z-10">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/5 pb-16">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-10 reveal visible">
                            <span className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase">Intelligence Briefing</span>
                        </div>
                        <h1 className="font-display text-7xl md:text-9xl text-cream leading-[0.88] tracking-tighter uppercase animate-hero">
                            Platform<br />
                            <em className="not-italic text-cream/40">Intelligence</em>
                        </h1>
                    </div>
                    <div className="text-right reveal visible reveal-delay-2">
                        <p className="font-mono text-[9px] tracking-[0.35em] text-cream/20 uppercase mb-2">Fiscal Period</p>
                        <p className="font-sans font-light text-cream/60 text-sm">Q4 2024 — DEC 12</p>
                    </div>
                </div>

                <div className="mb-40 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
                    <div className="reveal visible">
                        <h2 className="font-display text-4xl text-cream/80 mb-10 italic">Total Audits</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-baseline gap-8">
                                <span className="text-8xl md:text-9xl font-display font-medium tracking-tighter text-cream leading-none">12,840</span>
                                <div className="flex flex-col">
                                    <span className="text-primary text-3xl font-display italic">+12%</span>
                                    <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-cream/30">Growth</span>
                                </div>
                            </div>
                            <p className="font-sans font-light text-cream/35 text-sm leading-relaxed max-w-sm mt-8">
                                Aggregated component system audits processed via our neural analysis engine during the current reporting cycle.
                            </p>
                        </div>
                    </div>
                    <div className="pt-10 reveal visible reveal-delay-2">
                        <div className="w-full h-72 flex flex-col border border-white/5 bg-white/[0.01] p-8 relative overflow-hidden group">
                            <div className="scan-line opacity-20 group-hover:opacity-40 transition-opacity" />
                            <svg className="w-full h-full text-primary/30" preserveAspectRatio="none" viewBox="0 0 400 100">
                                <defs>
                                    <linearGradient id="usage-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.15 }}></stop>
                                        <stop offset="100%" style={{ stopColor: 'var(--color-ink)', stopOpacity: 0 }}></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0,80 C40,78 60,40 100,45 S160,20 200,35 S260,10 320,55 S360,25 400,28 L400,100 L0,100 Z" fill="url(#usage-gradient)"></path>
                                <path d="M0,80 C40,78 60,40 100,45 S160,20 200,35 S260,10 320,55 S360,25 400,28" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1"></path>
                                <circle cx="100" cy="45" fill="var(--color-primary)" r="2.5"></circle>
                                <circle cx="200" cy="35" fill="var(--color-primary)" r="2.5"></circle>
                                <circle cx="320" cy="55" fill="var(--color-primary)" r="2.5"></circle>
                            </svg>
                            <div className="flex justify-between w-full mt-8 font-mono text-[8px] text-cream/20 tracking-[0.3em] border-t border-white/5 pt-6">
                                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-40 border-y border-white/5">
                    {metrics.map((m, i) => (
                        <div key={m.label} className={`py-16 md:px-12 border-b md:border-b-0 md:border-r border-white/5 last:border-0 reveal visible reveal-delay-${i + 1}`}>
                            <p className="font-mono text-[9px] text-primary uppercase tracking-[0.3em] mb-6">{m.label}</p>
                            <p className="font-display text-6xl font-medium text-cream mb-4">
                                {m.value}
                                {m.total && <span className="text-cream/20 text-3xl ml-2 font-light">{m.total}</span>}
                                {m.unit && <span className="text-3xl font-display italic text-cream/20 ml-1">{m.unit}</span>}
                            </p>
                            <p className="font-sans font-light text-cream/30 text-xs uppercase tracking-widest italic">{m.sub}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-6xl reveal visible">
                    <div className="flex items-baseline justify-between mb-20">
                        <h3 className="font-display text-5xl italic text-cream/80 tracking-tight">System Audit Volume</h3>
                        <a className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary hover:text-cream transition-colors nav-link" href="#">Export_Log_v2.0</a>
                    </div>
                    <div className="space-y-0">
                        {domains.map((d, i) => (
                            <div key={d.id} className="group grid grid-cols-1 md:grid-cols-12 py-12 items-center border-t border-white/5 hover:bg-white/[0.015] transition-colors px-6 -mx-6">
                                <div className="hidden md:block col-span-1 font-mono text-[10px] text-cream/20 tracking-widest">{d.id}</div>
                                <div className="col-span-6 md:col-span-5">
                                    <p className="font-display text-3xl font-medium text-cream tracking-tight uppercase group-hover:text-primary transition-colors">{d.name}</p>
                                    <p className="font-mono text-[9px] text-cream/20 uppercase tracking-[0.3em] mt-2">{d.category}</p>
                                </div>
                                <div className="col-span-3 text-right">
                                    <p className="font-mono text-[8px] tracking-widest text-cream/15 uppercase mb-2">Audits_Processed</p>
                                    <p className="font-display text-3xl text-cream/60">{d.inquiries}</p>
                                </div>
                                <div className="col-span-3 text-right">
                                    <span className="font-mono text-[10px] text-cream/20 group-hover:text-cream transition-colors tracking-widest">DETAILS →</span>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-white/5" />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Admin;

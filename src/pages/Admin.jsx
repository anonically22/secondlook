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
        <div className="relative overflow-x-hidden min-h-screen bg-cream text-charcoal selection:bg-primary selection:text-white font-sans">
            <Header />

            <main className="flex-1 px-8 py-20 lg:px-20 max-w-7xl mx-auto w-full">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-charcoal/5 pb-16">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-12 bg-primary"></span>
                            <p className="text-primary font-display text-[11px] font-bold tracking-[0.3em] uppercase">Intelligence Briefing</p>
                        </div>
                        <h1 className="font-display text-6xl md:text-8xl text-charcoal leading-[0.9] tracking-tight uppercase">
                            Platform Analytics<br />&amp; Intelligence
                        </h1>
                    </div>
                    <div className="text-right">
                        <p className="text-muted-text font-display text-[10px] tracking-widest uppercase mb-1">Fiscal Period</p>
                        <p className="text-charcoal font-medium text-sm">Q4 2024 — DEC 12</p>
                    </div>
                </div>

                <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5">
                        <h2 className="font-display text-3xl text-charcoal mb-8 italic">Total Analyses</h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-baseline gap-6">
                                <span className="text-9xl font-display font-extralight tracking-tighter text-charcoal leading-none">12,840</span>
                                <div className="flex flex-col">
                                    <span className="text-primary text-2xl font-display italic">+12%</span>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-muted-text">Growth</span>
                                </div>
                            </div>
                            <p className="text-muted-text text-sm leading-relaxed max-w-sm mt-6 font-light">
                                Aggregated user experience teardowns processed via our neural aesthetic engine during the current reporting cycle.
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-7 pt-12">
                        <div className="w-full h-64 flex flex-col">
                            <svg className="w-full h-full text-primary/40" preserveAspectRatio="none" viewBox="0 0 400 100">
                                <defs>
                                    <linearGradient id="usage-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.1 }}></stop>
                                        <stop offset="100%" style={{ stopColor: 'var(--color-cream)', stopOpacity: 0 }}></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0,80 C40,78 60,40 100,45 S160,20 200,35 S260,10 320,55 S360,25 400,28 L400,100 L0,100 Z" fill="url(#usage-gradient)"></path>
                                <path d="M0,80 C40,78 60,40 100,45 S160,20 200,35 S260,10 320,55 S360,25 400,28" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                                <circle cx="100" cy="45" fill="var(--color-primary)" r="3"></circle>
                                <circle cx="200" cy="35" fill="var(--color-primary)" r="3"></circle>
                                <circle cx="320" cy="55" fill="var(--color-primary)" r="3"></circle>
                            </svg>
                            <div className="flex justify-between w-full mt-8 text-[10px] text-muted-text font-bold uppercase tracking-[0.2em] border-t border-charcoal/5 pt-4">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-32 border-y border-charcoal/10 py-16">
                    {metrics.map((m) => (
                        <div key={m.label}>
                            <p className="text-primary text-[10px] font-bold uppercase tracking-[0.25em] mb-4">{m.label}</p>
                            <p className="font-display text-5xl font-light text-charcoal">
                                {m.value}
                                {m.total && <span className="text-muted-text/40 text-3xl ml-1">{m.total}</span>}
                                {m.unit && <span className="text-3xl font-display italic text-muted-text/40">{m.unit}</span>}
                            </p>
                            <p className="text-muted-text text-xs mt-2 uppercase tracking-widest italic">{m.sub}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-5xl">
                    <div className="flex items-baseline justify-between mb-16">
                        <h3 className="font-display text-4xl italic text-charcoal">Most Analyzed Domains</h3>
                        <a className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary border-b border-primary pb-1 hover:text-charcoal hover:border-charcoal transition-all" href="#">Export Report</a>
                    </div>
                    <div className="divide-y divide-charcoal/10">
                        {domains.map((d) => (
                            <div key={d.id} className="group grid grid-cols-12 py-10 items-center hover:bg-white/40 transition-colors px-4 -mx-4">
                                <div className="col-span-1 text-muted-text font-display italic text-xl">{d.id}.</div>
                                <div className="col-span-5">
                                    <p className="font-sans text-lg font-semibold text-charcoal tracking-tight uppercase">{d.name}</p>
                                    <p className="text-[10px] text-muted-text font-bold uppercase tracking-widest mt-1">{d.category}</p>
                                </div>
                                <div className="col-span-3 text-right">
                                    <p className="text-muted-text font-display text-[10px] tracking-widest uppercase mb-1">Inquiries</p>
                                    <p className="font-display text-2xl text-charcoal">{d.inquiries}</p>
                                </div>
                                <div className="col-span-3 text-right">
                                    <span className="material-symbols-outlined font-thin text-muted-text group-hover:text-primary transition-colors">arrow_forward_ios</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Admin;

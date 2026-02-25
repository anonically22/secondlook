import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CircularText from '../components/CircularText';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Analyze = () => {
    const [url, setUrl] = useState('https://linear.app');
    const [tone, setTone] = useState('Professional');
    const [isLoading, setIsLoading] = useState(false);
    const [showReport, setShowReport] = useState(false);

    const handleAnalyze = () => {
        setIsLoading(true);
        setShowReport(false);
        setTimeout(() => {
            setIsLoading(false);
            setShowReport(true);
        }, 2000);
    };

    const tones = ['Casual', 'Professional', 'Nerdy', 'Brutal'];

    return (
        <div className="relative flex min-h-screen flex-col bg-cream text-charcoal font-sans selection:bg-primary selection:text-white overflow-x-hidden">
            <CircularText
                text="SECOND LOOK UI/UX CRITIQUES"
                className="fixed top-20 -right-20 opacity-10"
                size={240}
                duration={20}
            />

            <Header />

            <main className="flex-1 flex flex-col items-center">
                <section className={cn(
                    "w-full max-w-5xl px-6 pt-24 pb-16 transition-all duration-1000",
                    isLoading ? "opacity-20 blur-sm pointer-events-none" : "opacity-100"
                )}>
                    <div className="text-center mb-20 animate-fade-in">
                        <h1 className="font-display text-7xl md:text-9xl font-light tracking-tight mb-4 leading-none uppercase">
                            Analyze<br />
                            <span className="italic pl-12 md:pl-24 normal-case font-display">Workspace</span>
                        </h1>
                    </div>

                    <div className="max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
                        <div className="flex flex-col gap-12">
                            <div className="relative group focus-glow rounded-lg p-4 -m-4 transition-all duration-700">
                                <div className="animated-underline w-full">
                                    <input
                                        className="w-full h-20 text-3xl font-display bg-transparent border-0 border-b border-charcoal/20 focus:ring-0 focus:border-charcoal transition-all placeholder:text-slate-300 outline-none"
                                        placeholder="Paste website URL here"
                                        type="text"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                    />
                                </div>
                                <button
                                    onClick={handleAnalyze}
                                    className="absolute right-4 bottom-8 text-xs uppercase tracking-[0.3em] font-black text-primary hover:text-charcoal transition-all duration-500 hover-slide"
                                >
                                    Analyze <span className="material-symbols-outlined align-middle ml-2">arrow_right_alt</span>
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row items-baseline gap-8 animate-fade-in [animation-delay:400ms]">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Tone Selection</span>
                                <div className="flex flex-wrap gap-x-8 gap-y-4">
                                    {tones.map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setTone(t)}
                                            className={cn(
                                                "text-xs uppercase tracking-widest font-bold transition-all animated-underline",
                                                tone === t ? "text-primary after:!w-full" : "opacity-40 hover:opacity-100"
                                            )}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {isLoading && (
                    <section className="w-full py-48 flex flex-col items-center justify-center space-y-12 animate-in fade-in duration-1000">
                        <div className="relative w-24 h-24">
                            <div className="absolute inset-0 border border-primary/20 rounded-full"></div>
                            <div className="absolute inset-0 border-t border-primary rounded-full animate-spin"></div>
                        </div>
                        <p className="font-display text-3xl italic text-charcoal/60 animate-pulse">Taking a second look...</p>

                        {/* Placeholder space for report layout */}
                        <div className="w-full max-w-5xl px-6 opacity-5">
                            <div className="h-96 bg-charcoal rounded-sm animate-pulse"></div>
                        </div>
                    </section>
                )}

                {showReport && !isLoading && (
                    <section className="w-full bg-white py-32 border-t border-black/5 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="max-w-5xl mx-auto px-6">
                            <div className="mb-32 relative">
                                <div className="flex justify-between items-end mb-12">
                                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">Report No. 7291-A</span>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em]">OCT 2023</span>
                                </div>
                                <div className="relative">
                                    <h2 className="font-display text-6xl md:text-8xl font-medium leading-[0.9] uppercase tracking-tighter mb-4">
                                        UX Teardown<br />
                                        <span className="text-primary italic normal-case">Linear.app</span>
                                    </h2>
                                    <div className="relative mt-8 aspect-[16/7] w-full overflow-hidden bg-slate-100">
                                        <img
                                            className="w-full h-full object-cover grayscale opacity-80"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChvbwzrxoySzmp3qzxZzYeauKp72V-PYdept8xj_0PLMaeSBb_WdyFi84R5d7UZhLQtu9oXZA1if3n8zEPJ6z5ut1dXC9GhkvvfJoQ4aih9638h4MRTlDBJGLYyrtBPDSmnRj9mGfEphsl_PRlMOZvfibAsgLxgPD2uhT060g7eQ3Yt0wxr5QiP7_IV7iH9UrmN-Oha68FxEsSiHjbUm0e0YpifILHKakD0lqlZ0YRQ7j3d0XCieRJDHOWuGnbZPf9sVCqNyymOtkk"
                                            alt="Sample"
                                        />
                                        <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-40">
                                <div className="max-w-3xl">
                                    <h3 className="font-display text-4xl mb-12 italic border-l-4 border-primary pl-8 leading-snug">
                                        "Linear demonstrates a masterclass in functional minimalism. The interface prioritizing speed and intent over decoration, resulting in an environment that feels both industrial and premium."
                                    </h3>
                                    <div className="flex gap-4">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Section I</span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Executive Summary</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                                    <div className="md:col-span-4 sticky top-32">
                                        <h3 className="font-display text-5xl mb-4 leading-tight uppercase tracking-tighter">First<br /><span className="italic normal-case">Impressions</span></h3>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Section II</span>
                                    </div>
                                    <div className="md:col-span-8">
                                        <p className="text-xl font-display leading-relaxed text-slate-700 mb-12">
                                            Upon landing, the immediate sense is one of density without clutter. The use of Inter at varying weights creates a clear hierarchy without relying on excessive scale changes. The dark-themed default aesthetic projects a focused, 'engineer-first' mentality.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="border-t border-black/10 pt-4 flex justify-between group cursor-default">
                                                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Performance</span>
                                                <p className="text-sm max-w-xs text-right opacity-60 group-hover:opacity-100 transition-opacity">Exceptional load times and instant UI feedback cycles.</p>
                                            </div>
                                            <div className="border-t border-black/10 pt-4 flex justify-between group cursor-default">
                                                <span className="text-xs font-bold uppercase tracking-widest text-primary">Accessibility</span>
                                                <p className="text-sm max-w-xs text-right opacity-60 group-hover:opacity-100 transition-opacity">Steep learning curve for non-technical users.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-primary text-white -mx-6 md:-mx-12 p-12 md:p-24 relative overflow-hidden">
                                    <CircularText
                                        text="Strategic Improvements • Actionable Insights • Design Systems"
                                        className="absolute -bottom-20 -right-20 opacity-10 fill-white"
                                        size={320}
                                        duration={25}
                                    />
                                    <div className="max-w-2xl relative z-10">
                                        <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 block opacity-60">Section IV / Recommendations</span>
                                        <h3 className="font-display text-6xl italic mb-16">The Path Forward</h3>
                                        <ul className="space-y-16">
                                            <li className="group">
                                                <span className="block text-xs uppercase tracking-widest font-bold mb-4 opacity-50">01</span>
                                                <span className="font-display text-4xl block mb-4">Optimize Onboarding</span>
                                                <p className="text-lg opacity-80 font-display">Implement a progressive disclosure model for keyboard shortcuts to reduce initial cognitive load for new users.</p>
                                            </li>
                                            <li className="group">
                                                <span className="block text-xs uppercase tracking-widest font-bold mb-4 opacity-50">02</span>
                                                <span className="font-display text-4xl block mb-4">Visual Contrast</span>
                                                <p className="text-lg opacity-80 font-display">Increase contrast on inactive sidebar states to improve accessibility and meet WCAG AA standards.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-32 pt-20 border-t border-black/10 flex flex-col md:flex-row justify-between items-end gap-12">
                                <div>
                                    <h2 className="font-display text-5xl mb-2 uppercase tracking-tighter">Conclusion</h2>
                                    <p className="text-xs uppercase tracking-widest font-bold opacity-40">Document ID: 0992381-LX / End of Analysis</p>
                                </div>
                                <div className="flex gap-4 w-full md:w-auto">
                                    <button className="flex-1 md:flex-none px-10 py-5 border border-black text-xs uppercase tracking-widest font-black hover:bg-black hover:text-white transition-all">
                                        Share
                                    </button>
                                    <button className="flex-1 md:flex-none px-12 py-5 bg-black text-white text-xs uppercase tracking-widest font-black hover:bg-primary transition-all">
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Analyze;

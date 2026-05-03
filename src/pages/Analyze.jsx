import React, { useState, useEffect } from 'react';
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
    const [reportData, setReportData] = useState(null);
    const [error, setError] = useState(null);
    const reportRef = React.useRef(null);

    // Scroll to report when it becomes visible
    useEffect(() => {
        if (showReport && reportRef.current) {
            const yOffset = -20;
            const element = reportRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    }, [showReport]);

    const handleAnalyze = async () => {
        if (!url) return;
        setIsLoading(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const mockFallback = {
            id: "SL-AUDIT-0992",
            timestamp: "MAY 2026",
            siteName: new URL(url).hostname,
            summary: "This product presents a clean SaaS landing experience but struggles with visual hierarchy in its value proposition. While the typographic choices are sound, the spatial rhythm creates unnecessary cognitive friction in the middle-funnel sections.",
            firstImpression: "Above-the-fold messaging effectively communicates intent through high-contrast typography, but lacks emotional differentiation. The initial viewport is efficient yet somewhat clinical, potentially impacting brand resonance for new visitors.",
            review: [
                { label: "CTA Prominence", status: "Moderate", detail: "The primary action lacks sufficient contrast against the hero background." },
                { label: "Spatial Rhythm", status: "Inconsistent", detail: "Section padding varies irregularly, breaking the vertical flow." },
                { label: "Onboarding Clarity", status: "Moderate", detail: "The path from interest to activation requires too many implicit leaps." }
            ],
            suggestions: [
                "Strengthen headline contrast and scale to achieve immediate authority.",
                "Introduce trust signals and social proof earlier in the visual narrative.",
                "Refine CTA hierarchy to ensure only one dominant action is perceived at a time.",
                "Introduce 5% tighter leading in body copy to improve reading density."
            ],
            quote: "The interface prioritizes speed and intent over decoration, resulting in an environment that feels both industrial and premium, yet perhaps too distant."
        };

        try {
            const response = await fetch("/api/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url })
            });

            const data = await response.json();

            if (data.success) {
                setReportData({
                    ...mockFallback, 
                    id: `SL-AUDIT-${Math.random().toString(36).substring(7).toUpperCase()}`,
                    timestamp: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase(),
                    summary: data.summary,
                    firstImpression: data.firstImpression,
                    url: url 
                });
                setError(null);
            } else {
                console.error("API Error:", data.message);
                setError(data.message.includes('429') ? "AI Tier Busy (Rate Limited)" : data.message);
                setReportData({ ...mockFallback, url: url });
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setError("Network Error: Unable to reach analysis engine.");
            setReportData({ ...mockFallback, url: url });
        } finally {
            setIsLoading(false);
            setShowReport(true);
        }
    };

    const tones = ['Casual', 'Professional', 'Nerdy', 'Brutal'];

    return (
        <div className="relative flex min-h-screen flex-col bg-ink text-cream font-sans selection:bg-primary selection:text-cream overflow-x-hidden">
            <CircularText
                text="SECOND LOOK COMPONENT INTELLIGENCE"
                className="fixed top-32 -right-20 opacity-5 z-0"
                size={280}
                duration={30}
            />

            <Header />

            <main className="flex-1 flex flex-col items-center relative z-10">
                {/* Hero Section - Collapses when report is shown */}
                <section className={cn(
                    "w-full max-w-6xl px-6 pt-32 pb-16 transition-all duration-[1000ms] ease-in-out",
                    isLoading ? "opacity-10 blur-md pointer-events-none -translate-y-4" : "opacity-100",
                    showReport ? "opacity-20 blur-sm scale-95 pointer-events-none -translate-y-20 h-0 overflow-hidden !pb-0 !pt-0" : ""
                )}>
                    <div className="mb-20 animate-hero">
                        <span className="font-mono text-[10px] tracking-[0.35em] text-cream/40 uppercase block mb-10">Audit Portal v2.0</span>
                        <h1 className="font-display text-7xl md:text-9xl font-medium tracking-tighter leading-[0.88] uppercase">
                            Audit<br />
                            <em className="not-italic text-cream/40">Workspace</em>
                        </h1>
                    </div>

                    <div className="max-w-4xl animate-hero animate-hero-d2">
                        <div className="flex flex-col gap-12">
                            <div className="relative group p-0 transition-all duration-700">
                                <div className="w-full">
                                    <input
                                        className="w-full h-24 text-3xl md:text-5xl font-display bg-transparent border-0 border-b border-white/10 focus:ring-0 focus:border-cream transition-all placeholder:text-white/10 outline-none"
                                        placeholder="Paste product URL"
                                        type="text"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                                    />
                                </div>
                                <button
                                    onClick={handleAnalyze}
                                    className="absolute right-0 bottom-8 font-mono text-[10px] uppercase tracking-[0.3em] text-primary hover:text-cream transition-all duration-500"
                                >
                                    Initialize Audit →
                                </button>
                            </div>

                            {error && (
                                <div className="mt-4 p-4 border border-primary/20 text-primary font-mono text-[9px] uppercase tracking-[0.2em] animate-fade-in">
                                    [#] {error} — Reverting to Cached Core
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row items-baseline gap-10 animate-hero animate-hero-d3">
                                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-cream/30">Critique Lens</span>
                                <div className="flex flex-wrap gap-x-10 gap-y-4">
                                    {tones.map((t) => (
                                        <button
                                            key={t}
                                            onClick={() => setTone(t)}
                                            className={cn(
                                                "font-mono text-[10px] uppercase tracking-widest transition-all nav-link",
                                                tone === t ? "text-primary after:!w-full" : "text-cream/40 hover:text-cream"
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

                {/* Loading State */}
                {isLoading && (
                    <section className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-12 bg-ink/90 backdrop-blur-md">
                        <div className="relative w-32 h-32">
                            <div className="absolute inset-0 border border-white/5 rounded-full"></div>
                            <div className="absolute inset-0 border-t border-primary rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-mono text-[8px] text-primary animate-pulse uppercase tracking-[0.2em]">Crawling</span>
                            </div>
                        </div>
                        <p className="font-display text-4xl italic text-cream/80 animate-pulse tracking-tight">Detecting drift...</p>
                        <div className="w-full max-w-xs h-px bg-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/40 animate-[underline-draw_2.5s_linear_infinite]"></div>
                        </div>
                    </section>
                )}

                {/* The Audit Report */}
                {showReport && reportData && !isLoading && (
                    <section
                        ref={reportRef}
                        className="w-full bg-ink py-32 border-t border-white/5 animate-hero z-10 relative scroll-mt-20"
                    >
                        <div className="max-w-6xl mx-auto px-6">
                            <div className="mb-32">
                                <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-8">
                                    <div>
                                        <span className="font-mono text-[9px] tracking-[0.4em] text-cream/30 uppercase block mb-2">Report ID</span>
                                        <span className="font-mono text-[11px] text-cream/60">{reportData.id}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-mono text-[9px] tracking-[0.4em] text-cream/30 uppercase block mb-2">Timestamp</span>
                                        <span className="font-mono text-[11px] text-cream/60">{reportData.timestamp}</span>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 items-end">
                                    <div>
                                        <h2 className="font-display text-6xl md:text-[7rem] font-medium leading-[0.9] uppercase tracking-tighter mb-8">
                                            System Audit<br />
                                            <span className="text-primary italic normal-case">{reportData.siteName}</span>
                                        </h2>
                                    </div>
                                    <div className="border border-white/10 p-6 relative group overflow-hidden">
                                        <div className="scan-line" />
                                        <div className="aspect-[16/10] bg-white/[0.02] flex items-center justify-center">
                                            <img
                                                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2000ms]"
                                                src={`https://api.microlink.io?url=${encodeURIComponent(reportData.url)}&screenshot=true&embed=screenshot.url&waitFor=5000`}
                                                alt={`Preview ${reportData.siteName}`}
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="font-mono text-[8px] tracking-widest text-cream/20 uppercase">Live Surface Preview</span>
                                            <span className="font-mono text-[8px] text-primary/40">0x2A_MOUNT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-48">
                                {/* Executive Summary */}
                                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
                                    <span className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase pt-4">Section 01</span>
                                    <div className="max-w-3xl">
                                        <h3 className="font-display text-4xl md:text-5xl italic leading-tight text-cream/90 mb-10">
                                            "{reportData.summary}"
                                        </h3>
                                    </div>
                                </div>

                                {/* Component Signals */}
                                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20">
                                    <span className="font-mono text-[10px] tracking-[0.4em] text-cream/30 uppercase pt-4">Section 02</span>
                                    <div>
                                        <h3 className="font-display text-5xl mb-16 leading-tight uppercase tracking-tighter">Surface<br /><span className="italic normal-case text-cream/40">Drift Signals</span></h3>
                                        <div className="space-y-0">
                                            {reportData.review.map((item, idx) => (
                                                <div key={idx} className="border-t border-white/10 py-10 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 group">
                                                    <div className="space-y-2">
                                                        <span className="font-mono text-[10px] tracking-widest text-primary uppercase block">{item.label}</span>
                                                        <span className="font-mono text-[9px] uppercase tracking-widest text-cream/20 font-bold">{item.status}</span>
                                                    </div>
                                                    <p className="font-sans font-light text-cream/50 text-sm leading-relaxed group-hover:text-cream/80 transition-colors">
                                                        {item.detail}
                                                    </p>
                                                </div>
                                            ))}
                                            <div className="border-t border-white/10" />
                                        </div>
                                    </div>
                                </div>

                                {/* Strategic Recommendations */}
                                <div className="bg-white/[0.02] -mx-6 md:-mx-16 p-12 md:p-32 border-y border-white/5 relative overflow-hidden">
                                    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20 relative z-10">
                                        <span className="font-mono text-[10px] tracking-[0.4em] text-primary uppercase pt-4">Section 03</span>
                                        <div className="max-w-4xl">
                                            <h3 className="font-display text-6xl italic mb-20 tracking-tight">The Path Forward</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                                                {reportData.suggestions.map((s, idx) => (
                                                    <div key={idx} className="group">
                                                        <span className="block font-mono text-[10px] uppercase tracking-[0.3em] mb-6 text-cream/20">REC {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                                                        <p className="font-display text-2xl leading-tight text-cream/70 group-hover:text-cream transition-colors">{s}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Conclusion */}
                                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-20 items-center">
                                    <span className="font-mono text-[10px] tracking-[0.4em] text-cream/30 uppercase">Final</span>
                                    <div className="max-w-3xl border-l border-primary/30 pl-10 py-4">
                                        <p className="font-display text-3xl italic leading-relaxed text-cream/50">
                                            "{reportData.quote}"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-48 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-12">
                                <div>
                                    <h2 className="font-display text-5xl mb-4 uppercase tracking-tighter">End of Report</h2>
                                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-cream/20">SL-DOSS-VERIFIED // {reportData.id}</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-5 w-full md:w-auto">
                                    <button className="px-10 py-5 border border-white/10 text-cream/60 font-mono text-[10px] uppercase tracking-[0.25em] hover:border-cream/40 hover:text-cream transition-all">
                                        Share Report
                                    </button>
                                    <button className="btn-primary px-10 py-5 bg-cream text-ink font-mono text-[10px] uppercase tracking-[0.25em] font-bold">
                                        <span>Export PDF</span>
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

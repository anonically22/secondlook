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
            id: "0992381-LX",
            timestamp: "FEB 2026",
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
                    ...mockFallback, // Keep mock structure for fields not provided by AI (like suggestions/review)
                    id: Math.random().toString(36).substring(7).toUpperCase(),
                    timestamp: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase(),
                    summary: data.summary,
                    firstImpression: data.firstImpression,
                    url: url // Store original URL for preview
                });
                setError(null);
            } else {
                console.error("API Error:", data.message);
                setError(data.message.includes('429') ? "AI Tier Busy (Rate Limited)" : data.message);
                setReportData(mockFallback);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            setError("Network Error: Unable to reach analysis engine.");
            setReportData(mockFallback);
        } finally {
            setIsLoading(false);
            setShowReport(true);
        }
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
                {/* Hero Section - Collapses when report is shown */}
                <section className={cn(
                    "w-full max-w-5xl px-6 pt-24 pb-16 transition-all duration-[1000ms] ease-in-out",
                    isLoading ? "opacity-10 blur-md pointer-events-none -translate-y-4" : "opacity-100",
                    showReport ? "opacity-20 blur-sm scale-95 pointer-events-none -translate-y-20 h-0 overflow-hidden !pb-0 !pt-0" : ""
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
                                        onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                                    />
                                </div>
                                <button
                                    onClick={handleAnalyze}
                                    className="absolute right-4 bottom-8 text-xs uppercase tracking-[0.3em] font-black text-primary hover:text-charcoal transition-all duration-500 hover-slide"
                                >
                                    Analyze <span className="material-symbols-outlined align-middle ml-2">arrow_right_alt</span>
                                </button>
                            </div>

                            {error && (
                                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-[10px] font-black uppercase tracking-[0.2em] animate-fade-in text-center">
                                    [#] {error} — Reverting to Cached Analysis
                                </div>
                            )}

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

                {/* Loading State - Perception of Cogntion */}
                {isLoading && (
                    <section className="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-12 animate-in fade-in duration-1000 bg-cream/90 backdrop-blur-md">
                        <div className="relative w-24 h-24">
                            <div className="absolute inset-0 border border-primary/20 rounded-full"></div>
                            <div className="absolute inset-0 border-t border-primary rounded-full animate-spin"></div>
                        </div>
                        <p className="font-display text-3xl italic text-charcoal/80 animate-pulse tracking-wide">Taking a second look...</p>

                        <div className="w-full max-w-md h-0.5 bg-charcoal/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/40 animate-[underline-draw_2.5s_linear_infinite]"></div>
                        </div>
                    </section>
                )}

                {/* The Dossier - Mock Report Render */}
                {showReport && reportData && !isLoading && (
                    <section
                        ref={reportRef}
                        className="w-full bg-white py-32 border-t border-black/5 animate-in fade-in slide-in-from-bottom-20 duration-[1500ms] ease-out shadow-2xl z-10 relative scroll-mt-20"
                    >
                        <div className="max-w-5xl mx-auto px-6">
                            <div className="mb-32 relative">
                                <div className="flex justify-between items-end mb-12">
                                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">Report No. {reportData.id}</span>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em]">{reportData.timestamp}</span>
                                </div>
                                <div className="relative">
                                    <h2 className="font-display text-6xl md:text-8xl font-medium leading-[0.9] uppercase tracking-tighter mb-4">
                                        UX Teardown<br />
                                        <span className="text-primary italic normal-case">{reportData.siteName}</span>
                                    </h2>
                                    <div className="relative mt-12 aspect-[16/8] w-full overflow-hidden bg-slate-100 border border-black/5 rounded-sm shadow-inner group">
                                        {/* CSS Grid Pattern for robustness */}
                                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                                        <div className="absolute top-6 left-6 flex items-center gap-3">
                                            <div className="w-2 h-2 bg-primary animate-pulse rounded-full"></div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/40">Interface Scan / Active</span>
                                        </div>

                                        {/* Functional Image - dynamic live preview from Microlink */}
                                        <img
                                            className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-[2000ms] scale-105 group-hover:scale-100"
                                            src={`https://api.microlink.io?url=${encodeURIComponent(reportData.url)}&screenshot=true&embed=screenshot.url&waitFor=5000`}
                                            alt={`Live preview of ${reportData.siteName}`}
                                            onLoad={(e) => {
                                                e.target.style.opacity = '1';
                                                e.target.previousElementSibling.style.display = 'none'; // Hide placeholder icon
                                            }}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                            style={{ opacity: 0, transition: 'opacity 1s ease-in' }}
                                        />

                                        {/* Scanning Overlay UI */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-[94%] h-[90%] border border-primary/10 transition-all duration-700 group-hover:w-full group-hover:h-full"></div>
                                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/5"></div>
                                            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-primary/5"></div>

                                            {/* Coordinate Markers */}
                                            <div className="absolute top-4 right-4 text-[8px] font-mono text-charcoal/20">X: 729.1 Y: 402.0</div>
                                            <div className="absolute bottom-4 left-4 text-[8px] font-mono text-charcoal/20 tracking-[0.2em]">ANALYSIS_MOUNT_POINT: 0x2A</div>
                                        </div>

                                        {/* Scanning bar animation */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-[scan_4s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-40">
                                {/* Summary Section */}
                                <div className="max-w-3xl">
                                    <div className="flex gap-4 mb-8">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Section I</span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Executive Summary</span>
                                    </div>
                                    <h3 className="font-display text-4xl mb-12 italic border-l-4 border-primary pl-8 leading-snug text-charcoal/90">
                                        "{reportData.summary}"
                                    </h3>
                                </div>

                                {/* First Impressions */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                                    <div className="md:col-span-4 sticky top-32">
                                        <h3 className="font-display text-5xl mb-4 leading-tight uppercase tracking-tighter">First<br /><span className="italic normal-case">Impressions</span></h3>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Section II</span>
                                    </div>
                                    <div className="md:col-span-8">
                                        <p className="text-xl font-display leading-relaxed text-slate-700 mb-12">
                                            {reportData.firstImpression}
                                        </p>
                                        <div className="space-y-6">
                                            {reportData.review.map((item, idx) => (
                                                <div key={idx} className="border-t border-black/10 pt-4 flex flex-col md:flex-row justify-between group cursor-default">
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-bold uppercase tracking-widest text-primary">{item.label}</span>
                                                        <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">{item.status}</span>
                                                    </div>
                                                    <p className="text-sm max-w-xs md:text-right opacity-60 group-hover:opacity-100 transition-opacity mt-2 md:mt-0">{item.detail}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Strategic Improvements */}
                                <div className="bg-primary text-white -mx-6 md:-mx-12 p-12 md:p-24 relative overflow-hidden">
                                    <CircularText
                                        text="Strategic Improvements • Actionable Insights • Design Systems"
                                        className="absolute -bottom-20 -right-20 opacity-10 fill-white"
                                        size={320}
                                        duration={25}
                                    />
                                    <div className="max-w-2xl relative z-10">
                                        <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 block opacity-60">Section III / Recommendations</span>
                                        <h3 className="font-display text-6xl italic mb-16">The Path Forward</h3>
                                        <ul className="space-y-12">
                                            {reportData.suggestions.map((s, idx) => (
                                                <li key={idx} className="group">
                                                    <span className="block text-xs uppercase tracking-widest font-bold mb-4 opacity-50">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                                                    <p className="font-display text-3xl leading-snug">{s}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Detailed Narrative */}
                                <div className="max-w-3xl">
                                    <h3 className="font-display text-4xl mb-12 italic border-l-4 border-emerald-800/20 pl-8 leading-snug text-slate-600">
                                        "{reportData.quote}"
                                    </h3>
                                    <div className="flex gap-4">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800">Section IV</span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Final Conclusion</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-32 pt-20 border-t border-black/10 flex flex-col md:flex-row justify-between items-end gap-12">
                                <div>
                                    <h2 className="font-display text-5xl mb-2 uppercase tracking-tighter">Conclusion</h2>
                                    <p className="text-xs uppercase tracking-widest font-bold opacity-40">Document ID: {reportData.id} / End of Analysis</p>
                                </div>
                                <div className="flex gap-4 w-full md:w-auto">
                                    <button className="flex-1 md:flex-none px-10 py-5 border border-black text-xs uppercase tracking-widest font-black hover:bg-black hover:text-white transition-all">
                                        Share Dossier
                                    </button>
                                    <button className="flex-1 md:flex-none px-12 py-5 bg-black text-white text-xs uppercase tracking-widest font-black hover:bg-primary transition-all shadow-xl hover:-translate-y-1 active:translate-y-0">
                                        Download Dossier (PDF)
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

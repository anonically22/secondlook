import Header from '../components/Header';
import Footer from '../components/Footer';
import CircularText from '../components/CircularText';

const Landing = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-cream text-charcoal font-sans selection:bg-primary selection:text-white overflow-x-hidden">
            <CircularText
                text="SECOND LOOK UI/UX CRITIQUES"
                className="fixed top-10 -right-20 opacity-10 z-0"
                size={240}
                duration={20}
            />
            <Header />
            <main className="flex flex-col relative">
                <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-12 py-20 z-10">
                    <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8 animate-fade-in">
                            <span className="uppercase text-[11px] tracking-[0.3em] font-bold text-primary mb-6 block">Solitary Design Excellence</span>
                            <h1 className="text-6xl md:text-[8rem] leading-[0.9] font-display font-medium mb-8 uppercase tracking-tighter">
                                I BUILD<br />CRITIQUES<br />OF THE FUTURE
                            </h1>
                            <p className="font-display text-xl md:text-2xl italic text-charcoal/40 max-w-xl opacity-0 animate-fade-in [animation-delay:400ms]">
                                Paste a product link to receive an AI-powered UX teardown.
                            </p>
                        </div>
                        <div className="lg:col-span-4 pb-4 animate-fade-in [animation-delay:600ms]">
                            <p className="text-muted-text text-lg leading-relaxed max-w-sm mb-8 font-light">
                                Second Look is a specialized AI-assisted workflow by an India-based indie dev, applying high-end editorial standards to your digital product's user experience.
                            </p>
                            <div className="relative max-w-sm group focus-glow rounded-lg p-2 -m-2 transition-all duration-700">
                                <div className="animated-underline w-full">
                                    <input
                                        className="w-full bg-transparent border-0 border-b border-charcoal/20 py-4 focus:ring-0 focus:border-charcoal transition-all placeholder:text-charcoal/30 outline-none text-sm tracking-widest"
                                        placeholder="PASTE ANY PRODUCT URL"
                                        type="text"
                                    />
                                </div>
                                <button onClick={() => window.location.href = '/analyze'} className="absolute right-2 bottom-4 text-charcoal hover:text-primary transition-all duration-500 hover-slide">
                                    <span className="material-symbols-outlined inline-block transition-transform duration-500">arrow_right_alt</span>
                                </button>
                            </div>

                            {/* Tone Selector Preview (Static UI Hint) */}
                            <div className="mt-8 flex items-center gap-6 opacity-0 animate-fade-in [animation-delay:800ms]">
                                <span className="text-[10px] tracking-[0.2em] font-bold text-charcoal/30 uppercase">TONE:</span>
                                <div className="flex gap-4 text-[10px] tracking-widest font-bold text-charcoal/40 uppercase">
                                    <span className="text-primary border-b border-primary pb-0.5">Casual</span>
                                    <span className="hover:text-charcoal cursor-pointer transition-colors">Professional</span>
                                    <span className="hover:text-charcoal cursor-pointer transition-colors">Nerdy</span>
                                    <span className="hover:text-charcoal cursor-pointer transition-colors">Brutal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it works section */}
                <section className="relative bg-charcoal text-cream py-32 overflow-hidden">
                    <div className="absolute -left-32 -bottom-32 w-[500px] h-[500px] border border-cream/10 rounded-full flex items-center justify-center">
                        <div className="text-[200px] font-display text-cream/5 select-none opacity-20">01</div>
                    </div>
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                            <h2 className="text-5xl md:text-7xl font-display font-medium lg:w-1/2 uppercase tracking-tighter">THE<br />PROCESS.</h2>
                            <p className="text-cream/60 max-w-md text-lg font-light leading-relaxed">
                                My methodology is rooted in the fine balance between cognitive psychology and high-end graphic design history.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-cream/20">
                            <div className="group border-b md:border-b-0 md:border-r border-cream/20 py-16 pr-8 hover:bg-white/5 transition-all">
                                <span className="block text-primary font-display text-4xl mb-8 italic">01.</span>
                                <h3 className="text-2xl mb-6 tracking-widest font-display uppercase">DIGITAL EXTRACTION</h3>
                                <p className="text-cream/50 leading-relaxed font-light">
                                    I use specialized crawlers to map your interface's DNA—from typographic tokens to spatial rhythm and white space ratios.
                                </p>
                            </div>
                            <div className="group border-b md:border-b-0 md:border-r border-cream/20 py-16 px-8 hover:bg-white/5 transition-all">
                                <span className="block text-primary font-display text-4xl mb-8 italic">02.</span>
                                <h3 className="text-2xl mb-6 tracking-widest font-display uppercase">AI EVALUATION</h3>
                                <p className="text-cream/50 leading-relaxed font-light">
                                    I analyze your layout against 48 specialized editorial markers used by the world's leading design minds.
                                </p>
                            </div>
                            <div className="group py-16 pl-8 hover:bg-white/5 transition-all">
                                <span className="block text-primary font-display text-4xl mb-8 italic">03.</span>
                                <h3 className="text-2xl mb-6 tracking-widest font-display uppercase">THE DOSSIER</h3>
                                <p className="text-cream/50 leading-relaxed font-light">
                                    You receive an exhaustive, museum-grade analysis that defines the path to visual and functional excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sample Critique Section */}
                <section className="py-32 bg-cream">
                    {/* ... rest of the section remains similar but maybe update text if needed ... */}
                    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <div className="lg:col-span-7 bg-charcoal p-1">
                                <div className="aspect-[4/3] relative overflow-hidden group grayscale hover:grayscale-0 transition-all duration-700">
                                    <img alt="Design Analysis" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7spdhELxUSSm1VSALRn2Vdqlm1FqwQ2wLoo9tvNrmYrhKVZYXApGPcF71bSwkuoytOq51DoEtxREs3lZZHl8rLFV-G676O7OCWwN9nHmxiwz8k9__ca4Z9G0g1BvdZ-H6cA1_-8EsuYJacI33yU363B4nFy6DQRSRF0tvCRpeC6FlKZ85ysOJkTawdT84OqANFJCkEBVF9wqklwNG__KCsQUi5kDELcvWlqMzeNgt8XIlTHaWcYaIDV74WOvDNlpiEBv5IXBktm9" />
                                    <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply"></div>
                                    <div className="absolute bottom-0 left-0 p-8">
                                        <span className="text-cream text-[10px] tracking-[0.4em] uppercase font-bold border border-cream/30 px-4 py-2 backdrop-blur-sm">Sample Critique #04</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 pt-12">
                                <h2 className="text-4xl md:text-5xl font-display font-medium mb-10 leading-tight uppercase tracking-tighter">TYPOGRAPHY &amp;<br />VISUAL VOID.</h2>
                                <div className="space-y-8 text-charcoal/70 font-light text-lg leading-relaxed">
                                    <p>
                                        Modern interfaces often fail not through lack of content, but through a lack of intentional emptiness.
                                    </p>
                                    <p className="border-l-2 border-primary pl-8 italic text-charcoal">
                                        "Your current heading structure competes with the tertiary elements. By introducing a 12pt increase in cap-height and 5% leading reduction, we achieve the necessary authority."
                                    </p>
                                </div>
                                <div className="mt-16 flex flex-col sm:flex-row gap-8 items-center">
                                    <button onClick={() => window.location.href = '/analyze'} className="w-full sm:w-auto px-12 py-5 bg-primary text-cream uppercase text-xs tracking-[0.2em] font-bold hover:bg-charcoal transition-colors">
                                        TAKE A SECOND LOOK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-primary py-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 text-[12rem] font-display text-white/10 select-none whitespace-nowrap opacity-10 uppercase">
                        SECOND LOOK SECOND LOOK
                    </div>
                    <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
                        <h2 className="text-cream text-5xl md:text-8xl font-display font-medium mb-12 leading-none uppercase tracking-tighter">READY FOR THE<br />NEXT EVOLUTION?</h2>
                        <p className="text-cream/80 text-xl font-light mb-16 max-w-2xl mx-auto">
                            Join over 2,500 designers and directors who trust our lens to sharpen their digital legacy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button onClick={() => window.location.href = '/analyze'} className="px-12 py-6 bg-cream text-charcoal uppercase text-xs tracking-[0.2em] font-bold hover:bg-charcoal hover:text-cream transition-all">
                                START FREE TEARDOWN
                            </button>
                            <button className="px-12 py-6 border border-cream/30 text-cream uppercase text-xs tracking-[0.2em] font-bold hover:bg-cream/10 transition-all">
                                BOOK A CONSULTATION
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Landing;

import React from 'react';
import StatBadge from '../../components/audit/StatBadge';

const ExecutiveSummary = () => {
  return (
    <section id="summary" className="py-24 border-b transition-colors duration-500" style={{ borderColor: 'var(--app-border)' }}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8 reveal">
            <h2 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Section 01</h2>
            <div className="h-[1px] w-12 bg-primary/30" />
            <h1 className="text-sm font-sans uppercase tracking-widest opacity-80">Executive Summary</h1>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display leading-[1.1] mb-8 reveal reveal-delay-1">
            System Health Analysis: <br />
            Infrastructure Resilience & <br />
            Design Integrity.
          </h2>
          
          <div className="space-y-6 font-sans text-lg leading-relaxed reveal reveal-delay-2 opacity-50">
            <p>
              The system demonstrates a moderate level of fragmentation across core UI patterns. 
              While the atomic foundation remains robust, secondary abstractions have begun to 
              drift from the primary design language.
            </p>
          </div>
        </div>

        <div className="w-full md:w-80 space-y-6 reveal reveal-delay-3">
          <div className="p-6 border transition-all duration-500" style={{ backgroundColor: 'var(--app-card-bg)', borderColor: 'var(--app-border)' }}>
            <h3 className="text-[10px] font-mono uppercase tracking-widest mb-4 opacity-40">Audit Status</h3>
            <StatBadge status="Needs Attention" />
          </div>
          
          <div className="p-6 border transition-all duration-500" style={{ backgroundColor: 'var(--app-card-bg)', borderColor: 'var(--app-border)' }}>
            <h3 className="text-[10px] font-mono uppercase tracking-widest mb-4 opacity-40">High-Level Diagnosis</h3>
            <ul className="space-y-3">
              {['Pattern Fragmentation', 'Color Inconsistency', 'Spacing Variance'].map((item) => (
                <li key={item} className="text-xs flex items-center gap-2 opacity-70">
                  <div className="w-1 h-1 bg-primary/40 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;

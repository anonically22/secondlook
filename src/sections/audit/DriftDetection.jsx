import React from 'react';

const DriftDetection = () => {
  const drifts = [
    { type: 'Button Variants', status: 'Inconsistent', description: '4 distinct corner radius values detected' },
    { type: 'Spacing Variance', status: 'Conflict', description: '8px vs 10px baseline grid usage' },
    { type: 'Hierarchy Conflicts', status: 'Redundant', description: 'H2 and H3 elements sharing same font-size' },
    { type: 'Duplicated Patterns', status: 'Critical', description: '3 different "Search Bar" implementations' },
  ];

  return (
    <section id="drift" className="py-24 border-b transition-colors duration-500" style={{ borderColor: 'var(--app-border)' }}>
      <div className="flex items-center gap-4 mb-12 reveal">
        <h2 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Section 05</h2>
        <div className="h-[1px] w-12 bg-primary/30" />
        <h1 className="text-sm font-sans uppercase tracking-widest opacity-80">Design Drift Signals</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {drifts.map((d) => (
          <div key={d.type} className="p-6 border transition-all duration-500 flex items-center justify-between group hover:border-primary/40 reveal" style={{ backgroundColor: 'var(--app-card-bg)', borderColor: 'var(--app-border)' }}>
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-widest mb-1 opacity-40">{d.type}</h4>
              <p className="text-sm opacity-80">{d.description}</p>
            </div>
            <div className="text-[10px] font-mono text-primary px-2 py-1 border border-primary/20">
              {d.status}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DriftDetection;

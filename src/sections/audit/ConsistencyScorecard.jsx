import React from 'react';
import ScoreBar from '../../components/audit/ScoreBar';

const ConsistencyScorecard = () => {
  const scores = [
    { category: 'Component Consistency', score: 7.2 },
    { category: 'Spacing Integrity', score: 6.5 },
    { category: 'Hierarchy Clarity', score: 8.4 },
    { category: 'Accessibility Health', score: 5.9 },
    { category: 'Duplication Index', score: 4.1 },
  ];

  return (
    <section id="scorecard" className="py-24 border-b transition-colors duration-500" style={{ borderColor: 'var(--app-border)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="flex items-center gap-4 mb-8 reveal">
            <h2 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Section 03</h2>
            <div className="h-[1px] w-12 bg-primary/30" />
            <h1 className="text-sm font-sans uppercase tracking-widest opacity-80">System Scorecard</h1>
          </div>
          
          <h2 className="text-3xl font-display leading-tight mb-6 reveal reveal-delay-1">
            Quantifying the <br />
            Visual Architecture.
          </h2>
          <p className="text-sm leading-relaxed max-w-md reveal reveal-delay-2 opacity-50">
            Our algorithmic scoring model evaluates consistency across 152 distinct data points, 
            identifying structural weaknesses in the design system implementation.
          </p>
        </div>

        <div className="space-y-4">
          {scores.map((s) => (
            <ScoreBar key={s.category} category={s.category} score={s.score} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsistencyScorecard;

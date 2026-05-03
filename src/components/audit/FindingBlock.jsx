import React from 'react';

const FindingBlock = ({ index, issue, evidence, impact, recommendation }) => {
  return (
    <div className="p-8 border bg-primary/5 reveal-left" style={{ borderColor: 'var(--app-border)' }}>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <h3 className="text-xl font-display font-medium tracking-wide italic">{issue}</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <span className="block text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2">Evidence</span>
              <p className="text-sm font-sans leading-relaxed opacity-70 italic">{evidence}</p>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2">Impact</span>
              <p className="text-sm font-sans leading-relaxed opacity-80">{impact}</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/3 pt-6 md:pt-10 md:border-l pl-0 md:pl-8" style={{ borderColor: 'var(--app-border)' }}>
          <span className="block text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-4">Recommendation</span>
          <p className="text-sm font-sans font-medium leading-relaxed">{recommendation}</p>
        </div>
      </div>
    </div>
  );
};

export default FindingBlock;

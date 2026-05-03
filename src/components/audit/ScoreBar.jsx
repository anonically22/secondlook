import React from 'react';

const ScoreBar = ({ category, score }) => {
  return (
    <div className="py-4 border-b last:border-0 reveal" style={{ borderColor: 'var(--app-border)' }}>
      <div className="flex justify-between items-end mb-3">
        <span className="text-sm font-sans tracking-wide font-medium opacity-90">{category}</span>
        <span className="text-[11px] font-mono text-primary font-bold tracking-widest">{score}/10</span>
      </div>
      <div className="h-[3px] w-full relative overflow-hidden" style={{ backgroundColor: 'var(--app-border)' }}>
        <div 
          className="h-full bg-primary/80 transition-all duration-1000 ease-out"
          style={{ width: `${(score / 10) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ScoreBar;

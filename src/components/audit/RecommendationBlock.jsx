import React from 'react';

const RecommendationBlock = ({ title, description }) => {
  return (
    <div className="p-8 border transition-colors reveal" style={{ backgroundColor: 'var(--app-card-bg)', borderColor: 'var(--app-border)' }}>
      <div className="flex items-start gap-6">
        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_10px_rgba(198,90,75,0.4)]" />
        <div>
          <h4 className="text-xl font-display mb-3 tracking-wide">{title}</h4>
          <p className="text-[15px] leading-relaxed max-w-2xl font-light opacity-60">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecommendationBlock;

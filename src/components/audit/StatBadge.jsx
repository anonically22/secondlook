import React from 'react';

const StatBadge = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'Healthy':
        return 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30';
      case 'Needs Attention':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30';
      case 'Critical Drift':
        return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30';
      default:
        return 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/30';
    }
  };

  return (
    <div className={`px-4 py-1.5 rounded-full border text-[11px] uppercase tracking-[0.15em] font-mono font-bold ${getStatusStyles()}`}>
      {status}
    </div>
  );
};

export default StatBadge;

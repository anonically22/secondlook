import React from 'react';

const InventoryCard = ({ label, count }) => {
  return (
    <div className="group p-6 border transition-all duration-500 reveal" style={{ backgroundColor: 'var(--app-card-bg)', borderColor: 'var(--app-border)' }}>
      <div className="flex justify-between items-start">
        <span className="text-xs font-mono uppercase tracking-widest opacity-50">{label}</span>
        <span className="text-3xl font-display group-hover:text-primary transition-colors">{count}</span>
      </div>
      <div className="mt-4 h-[1px] w-0 group-hover:w-full bg-primary/40 transition-all duration-700" />
    </div>
  );
};

export default InventoryCard;

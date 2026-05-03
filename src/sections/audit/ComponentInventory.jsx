import React from 'react';
import InventoryCard from '../../components/audit/InventoryCard';

const ComponentInventory = () => {
  const elements = [
    { label: 'Buttons', count: 42 },
    { label: 'Cards', count: 18 },
    { label: 'Forms', count: 7 },
    { label: 'Inputs', count: 56 },
    { label: 'Navigation', count: 4 },
    { label: 'Sections', count: 12 },
  ];

  return (
    <section id="inventory" className="py-24 border-b transition-colors duration-500" style={{ borderColor: 'var(--app-border)' }}>
      <div className="flex items-center gap-4 mb-12 reveal">
        <h2 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Section 02</h2>
        <div className="h-[1px] w-12 bg-primary/30" />
        <h1 className="text-sm font-sans uppercase tracking-widest opacity-80">Component Inventory</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px border transition-all duration-500" style={{ backgroundColor: 'var(--app-border)', borderColor: 'var(--app-border)' }}>
        {elements.map((item, idx) => (
          <InventoryCard 
            key={item.label} 
            label={item.label} 
            count={item.count} 
          />
        ))}
      </div>
    </section>
  );
};

export default ComponentInventory;

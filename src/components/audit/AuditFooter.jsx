import React from 'react';

const AuditFooter = () => {
  return (
    <footer className="sticky bottom-0 w-full border-t backdrop-blur-xl z-50 py-5 px-6 md:px-12 transition-colors duration-500" style={{ backgroundColor: 'var(--app-bg)', opacity: 0.95, borderColor: 'var(--app-border)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-widest font-medium opacity-50">System Online: Audit_Finalized</span>
        </div>
        
        <div className="flex items-center gap-8">
          <button className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-40 hover:text-primary transition-all duration-300">
            Share_Report
          </button>
          <button className="text-[11px] font-mono uppercase tracking-[0.2em] opacity-40 hover:text-primary transition-all duration-300">
            Save_Audit
          </button>
          <button className="px-8 py-2.5 bg-primary text-cream text-[11px] font-mono uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all shadow-xl shadow-primary/20">
            Export_PDF
          </button>
        </div>
      </div>
    </footer>
  );
};

export default AuditFooter;

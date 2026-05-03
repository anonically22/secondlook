import React from 'react';
import FindingBlock from '../../components/audit/FindingBlock';

const CriticalFindings = () => {
  const findings = [
    {
      issue: "Inconsistent Primary CTA Implementation",
      evidence: "Found 14 variations of 'Button' with different border-radius and padding values.",
      impact: "Dilutes brand recognition and creates cognitive friction during conversion events.",
      recommendation: "Consolidate into a single 'Button' primitive with strictly defined variant props."
    },
    {
      issue: "Redundant Layout Abstractions",
      evidence: "Multiple overlapping 'Container' components found in the grid system.",
      impact: "Increased bundle size and maintenance overhead for layout changes.",
      recommendation: "Normalize spacing tokens and merge duplicate grid logic into a core 'Section' layout."
    },
    {
      issue: "Accessibility Compliance Gap",
      evidence: "Low contrast ratios detected in secondary navigation elements (3.1:1).",
      impact: "Excludes users with visual impairments and risks legal non-compliance.",
      recommendation: "Adjust color palette to ensure 4.5:1 ratio for all interactive text elements."
    }
  ];

  return (
    <section id="findings" className="py-24 border-b transition-colors duration-500" style={{ borderColor: 'var(--app-border)' }}>
      <div className="flex items-center gap-4 mb-16 reveal">
        <h2 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Section 04</h2>
        <div className="h-[1px] w-12 bg-primary/30" />
        <h1 className="text-sm font-sans uppercase tracking-widest opacity-80">Critical Findings</h1>
      </div>

      <div className="space-y-4">
        {findings.map((f, i) => (
          <FindingBlock 
            key={i}
            index={i + 1}
            {...f}
          />
        ))}
      </div>
    </section>
  );
};

export default CriticalFindings;

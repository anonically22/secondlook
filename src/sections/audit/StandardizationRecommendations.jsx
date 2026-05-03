import React from 'react';
import RecommendationBlock from '../../components/audit/RecommendationBlock';

const StandardizationRecommendations = () => {
  const recommendations = [
    {
      title: "Merge Variant Logic",
      description: "Automate the consolidation of CSS classes into a unified primitive library to eliminate ad-hoc styling."
    },
    {
      title: "Normalize Spacing Tokens",
      description: "Enforce a strict 4pt or 8pt grid across all layout components to ensure vertical and horizontal rhythm."
    },
    {
      title: "Reduce Hierarchy Conflicts",
      description: "Standardize typography roles (Display, Heading, Subheading, Body) with explicit semantic meaning."
    },
    {
      title: "Improve Accessibility Consistency",
      description: "Integrate automated contrast checks into the CI/CD pipeline to prevent future regression."
    }
  ];

  return (
    <section id="recommendations" className="py-24 border-b transition-colors duration-500" style={{ borderColor: 'var(--app-border)' }}>
      <div className="flex items-center gap-4 mb-16 reveal">
        <h2 className="text-[10px] font-mono text-primary uppercase tracking-[0.3em]">Section 06</h2>
        <div className="h-[1px] w-12 bg-primary/30" />
        <h1 className="text-sm font-sans uppercase tracking-widest opacity-80">System Recommendations</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recommendations.map((r) => (
          <RecommendationBlock key={r.title} {...r} />
        ))}
      </div>
    </section>
  );
};

export default StandardizationRecommendations;

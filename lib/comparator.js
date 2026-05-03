function compareVariants(registry) {
  const driftFindings = [];

  const { pages, systemVariantsCount, globalInventory } = registry;

  if (pages.length <= 1) {
    if (systemVariantsCount.buttons > 3) {
      driftFindings.push("High button variant diversity on a single page.");
    }
    return driftFindings;
  }

  // 1. Button Drift across the system
  const hasButtons = pages.some(p => p.inventory.buttons > 0);
  if (hasButtons && systemVariantsCount.buttons > 4) {
    driftFindings.push(`Button Drift: Found ${systemVariantsCount.buttons} unique button variants across the system.`);
  }

  // 2. Navigation Consistency
  const pagesWithoutNav = pages.filter(p => p.inventory.navigation === 0);
  if (pagesWithoutNav.length > 0 && pagesWithoutNav.length < pages.length) {
    driftFindings.push(`Navigation Drift: ${pagesWithoutNav.length} page(s) missing structural navigation compared to the rest of the system.`);
  }

  // 3. Spacing / Hierarchy Structure Drift
  const averageHeadingsPerSection = globalInventory.sections > 0 
    ? globalInventory.headings / globalInventory.sections 
    : globalInventory.headings;
    
  const aberrantPages = pages.filter(p => {
    const pageRatio = p.inventory.sections > 0 
      ? p.inventory.headings / p.inventory.sections 
      : p.inventory.headings;
    return Math.abs(pageRatio - averageHeadingsPerSection) > 3; // Significant deviation from system average
  });

  if (aberrantPages.length > 0) {
    driftFindings.push(`Hierarchy Drift: ${aberrantPages.length} page(s) exhibit irregular heading-to-section ratios compared to the system average.`);
  }

  // 4. Form/Input inconsistencies
  const totalInputVariants = systemVariantsCount.inputs;
  if (totalInputVariants > 3) {
    driftFindings.push(`Input Drift: Forms use ${totalInputVariants} distinct styling patterns across pages.`);
  }

  return driftFindings;
}

module.exports = { compareVariants };

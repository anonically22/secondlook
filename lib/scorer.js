function generateScores(inventory, groups) {
  let componentConsistency = 10;
  if (inventory.buttons > 0 && groups.buttonVariants > 0) {
    const ratio = groups.buttonVariants / inventory.buttons;
    if (ratio > 0.5) componentConsistency -= 4;
    else if (ratio > 0.2) componentConsistency -= 2;
  }
  
  let spacingIntegrity = 8;
  if (inventory.sections === 0) spacingIntegrity = 5;

  let hierarchyClarity = 10;
  if (inventory.headings === 0) hierarchyClarity = 3;
  else if (inventory.headings > (inventory.sections * 5 || 10)) hierarchyClarity -= 3;
  
  let accessibilityHealth = 8;
  if (inventory.forms > 0 && inventory.inputs > 0) {
    accessibilityHealth += 1;
  }
  if (inventory.images > 0) {
    accessibilityHealth -= 1; // Assuming some lack alt tags as a proxy, simplistic heuristic
  }
  
  let duplicationIndex = 10;
  if (groups.buttonVariants > 4) duplicationIndex -= 2;
  if (groups.cardVariants > 3) duplicationIndex -= 2;
  if (groups.inputVariants > 3) duplicationIndex -= 2;

  return {
    componentConsistency: Math.max(1, Math.min(10, componentConsistency)),
    spacingIntegrity: Math.max(1, Math.min(10, spacingIntegrity)),
    hierarchyClarity: Math.max(1, Math.min(10, hierarchyClarity)),
    accessibilityHealth: Math.max(1, Math.min(10, accessibilityHealth)),
    duplicationIndex: Math.max(1, Math.min(10, duplicationIndex))
  };
}

module.exports = { generateScores };

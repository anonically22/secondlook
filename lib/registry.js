const { detectElements } = require('./detector');
const { groupComponents } = require('./grouper');

function buildRegistry(pages) {
  const registry = {
    globalInventory: {
      buttons: 0,
      links: 0,
      forms: 0,
      inputs: 0,
      headings: 0,
      navigation: 0,
      cards: 0,
      sections: 0,
      images: 0
    },
    pageLevel: [],
    systemVariants: {
      buttonClasses: new Set(),
      cardClasses: new Set(),
      inputClasses: new Set(),
      headingTags: new Set()
    }
  };

  for (const page of pages) {
    const { url, $ } = page;
    
    // Detect on this page
    const inventory = detectElements($);
    
    // Group on this page
    const groups = groupComponents($);

    // Aggregate global inventory
    for (const key in inventory) {
      if (registry.globalInventory[key] !== undefined) {
        registry.globalInventory[key] += inventory[key];
      }
    }

    // Collect variants across all pages
    $('button, .btn, input[type="button"], input[type="submit"], [role="button"]').each((_, el) => {
      const className = $(el).attr('class');
      if (className) registry.systemVariants.buttonClasses.add(className.trim());
    });

    $('.card, [class*="card-"], [class*="Card"]').each((_, el) => {
      const className = $(el).attr('class');
      if (className) registry.systemVariants.cardClasses.add(className.trim());
    });

    $('input, textarea, select').each((_, el) => {
      const className = $(el).attr('class');
      if (className) registry.systemVariants.inputClasses.add(className.trim());
    });

    $('h1, h2, h3, h4, h5, h6').each((_, el) => {
      const className = $(el).attr('class');
      if (className) registry.systemVariants.headingTags.add(className.trim());
      else registry.systemVariants.headingTags.add(el.tagName);
    });

    registry.pageLevel.push({
      url,
      inventory,
      groups
    });
  }

  // Final structured registry
  const finalRegistry = {
    globalInventory: registry.globalInventory,
    pages: registry.pageLevel,
    systemVariantsCount: {
      buttons: registry.systemVariants.buttonClasses.size || (registry.globalInventory.buttons > 0 ? 1 : 0),
      cards: registry.systemVariants.cardClasses.size || (registry.globalInventory.cards > 0 ? 1 : 0),
      inputs: registry.systemVariants.inputClasses.size || (registry.globalInventory.inputs > 0 ? 1 : 0),
      headings: registry.systemVariants.headingTags.size || (registry.globalInventory.headings > 0 ? 1 : 0),
    }
  };

  return finalRegistry;
}

module.exports = { buildRegistry };

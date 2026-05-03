function detectElements($) {
  const inventory = {
    buttons: 0,
    links: 0,
    forms: 0,
    inputs: 0,
    headings: 0,
    navigation: 0,
    cards: 0,
    sections: 0
  };

  if (!$) return inventory;

  inventory.buttons = $('button, input[type="button"], input[type="submit"], .btn, [role="button"]').length;
  inventory.links = $('a[href]').length;
  inventory.forms = $('form').length;
  inventory.inputs = $('input, textarea, select').length;
  inventory.headings = $('h1, h2, h3, h4, h5, h6, [role="heading"]').length;
  inventory.navigation = $('nav, [role="navigation"]').length;
  
  inventory.cards = $('.card, [class*="card-"], [class*="Card"]').length;
  
  inventory.sections = $('section, article, main, header, footer').length;

  return inventory;
}

module.exports = { detectElements };

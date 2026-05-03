function groupComponents($) {
  const groups = {
    buttonVariants: 0,
    cardVariants: 0,
    inputVariants: 0
  };

  if (!$) return groups;

  const buttonClasses = new Set();
  $('button, .btn, input[type="button"], input[type="submit"]').each((_, el) => {
    const className = $(el).attr('class');
    if (className) buttonClasses.add(className.trim());
  });
  groups.buttonVariants = buttonClasses.size || ($('button').length > 0 ? 1 : 0);

  const cardClasses = new Set();
  $('.card, [class*="card-"], [class*="Card"]').each((_, el) => {
    const className = $(el).attr('class');
    if (className) cardClasses.add(className.trim());
  });
  groups.cardVariants = cardClasses.size || ($('.card').length > 0 ? 1 : 0);

  const inputClasses = new Set();
  $('input, textarea, select').each((_, el) => {
    const className = $(el).attr('class');
    if (className) inputClasses.add(className.trim());
  });
  groups.inputVariants = inputClasses.size || ($('input').length > 0 ? 1 : 0);

  return groups;
}

module.exports = { groupComponents };

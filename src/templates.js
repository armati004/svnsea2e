/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    'systems/svnsea2e/templates/actors/parts/actor-name.hbs',
    'systems/svnsea2e/templates/actors/parts/actor-traits.hbs',
    'systems/svnsea2e/templates/actors/parts/actor-concept.hbs',
    'systems/svnsea2e/templates/actors/parts/actor-advantages.hbs',
    'systems/svnsea2e/templates/actors/parts/actor-sorcery.hbs',
    'systems/svnsea2e/templates/actors/parts/actor-inventory.hbs',
    'systems/svnsea2e/templates/actors/parts/actor-fate.hbs',
    'systems/svnsea2e/templates/actors/parts/actor-villainy.hbs',
    'systems/svnsea2e/templates/actors/parts/actor-vtraits.hbs',
    'systems/svnsea2e/templates/actors/parts/actor-wounds.hbs',

    // Item Sheet Partials
    'systems/svnsea2e/templates/items/parts/item-header.hbs',
    'systems/svnsea2e/templates/items/parts/item-description.hbs',
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};

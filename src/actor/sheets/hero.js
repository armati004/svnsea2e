import { getItems, skillsToSheetData } from '../../helpers.js';
import ActorSheetSS2e from './base.js';
/**
 * Extend the basic ActorSheet with some very simple modifications
 * @ext'../../dice.js't}
 */
export class ActorSheetSS2eHero extends ActorSheetSS2e {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['svnsea2e', 'sheet', 'actor', 'hero'],
      template: 'systems/svnsea2e/templates/actors/hero.hbs',
      tabs: [
        {
          navSelector: '.sheet-tabs',
          contentSelector: '.sheet-body',
          initial: 'traits',
        },
      ],
    });
  }

  /**
   * Override constructor specifically for Hero sheets
   */
  constructor(object, options = {}) {
    // Force safe ID generation for hero sheets
    options.id = `svnsea2e-hero-sheet-${object?.id ?? 'unknown'}`;
    super(object, options);
  }

  /**
   * Override render to fix ID issues before rendering
   */
  async _render(force, options) {
    // Ensure ID is safe before rendering
    const safeId = `svnsea2e-hero-sheet-${this.document?.id ?? this.object?.id ?? 'unknown'}`;
    this.options.id = safeId;
    
    return super._render(force, options);
  }

  /**
   * Organize and classify Items for Character sheets.
   *
   * @param {Object} actorData The actor to prepare.
   *
   * @return {undefined}
   */
  _prepareHeroItems(data, sheetData) {
    // Assign and return
    sheetData.skills = skillsToSheetData(data.document.system, CONFIG);
    sheetData.advantages = getItems(data, 'advantage');
    sheetData.backgrounds = getItems(data, 'background');
    sheetData.sorcery = getItems(data, 'sorcery');
    sheetData.secretsocieties = getItems(data, 'secretsociety');
    sheetData.stories = getItems(data, 'story');
    sheetData.duelstyles = getItems(data, 'duelstyle');
    sheetData.artifacts = getItems(data, 'artifact');
    sheetData.virtues = getItems(data, 'virtue');
    sheetData.hubriss = getItems(data, 'hubris');
  }
}

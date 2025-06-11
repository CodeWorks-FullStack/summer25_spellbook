import { AppState } from "../AppState.js";
import { sandboxSpellsService } from "../services/SandboxSpellsService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxSpellsController {
  constructor() {
    console.log('Sandbox controller is ready ⌛');
    AppState.on('identity', this.getMySpells)
    AppState.on('sandboxSpells', this.drawSpells)
  }

  async saveSpell() {
    try {
      await sandboxSpellsService.createSpell()
    } catch (error) {
      Pop.error(error, 'Could not save spell', 'uh oh!')
      console.error('saveSpell failed', error);
    }
  }

  async getMySpells() {
    try {
      await sandboxSpellsService.getMySpells()
    } catch (error) {
      Pop.error(error, 'Could not get saved spells', 'uh oh!')
      console.error('getMySpells failed', error);
    }
  }

  async toggleSpellPreparation(spellId) {
    try {
      console.log('toggling spell', spellId);
      await sandboxSpellsService.updateSpell(spellId)
    } catch (error) {
      Pop.error(error, 'Could not update spell', 'uh oh!')
      console.error('toggleSpellPreparation failed', error);
    }
  }

  drawSpells() {
    const spells = AppState.sandboxSpells
    let spellContent = ''
    spells.forEach(spell => spellContent += spell.buttonHTMLTemplate)
    const spellement = document.getElementById('sandbox-spells-list')
    spellement.innerHTML = spellContent
  }
}
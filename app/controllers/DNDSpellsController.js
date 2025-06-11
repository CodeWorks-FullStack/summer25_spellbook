import { AppState } from "../AppState.js";
import { dndSpellsService } from "../services/DNDSpellsService.js";
import { Pop } from "../utils/Pop.js";

export class DNDSpellsController {
  constructor() {
    console.log('DND Spells controller is ready! 📔🪄');
    AppState.on('dndSpells', this.drawSpells)
    this.getSpells()
  }

  async getSpells() {
    try {
      await dndSpellsService.getSpells()
    } catch (error) {
      Pop.error(error, 'Could not get those spells', 'not enough mana')
      console.error('getSpells failed', error);
    }
  }

  drawSpells() {
    const spells = AppState.dndSpells
    let spellsContent = ''
    spells.forEach(spell => spellsContent += spell.buttonHTMLTemplate)
    const spellement = document.getElementById('dnd-spells-list')
    spellement.innerHTML = spellsContent
  }
}
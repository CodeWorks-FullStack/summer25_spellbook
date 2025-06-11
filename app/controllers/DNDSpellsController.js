import { dndSpellsService } from "../services/DNDSpellsService.js";
import { Pop } from "../utils/Pop.js";

export class DNDSpellsController {
  constructor() {
    console.log('DND Spells controller is ready! 📔🪄');
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
}
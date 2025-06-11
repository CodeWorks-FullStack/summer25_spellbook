import { sandboxSpellsService } from "../services/SandboxSpellsService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxSpellsController {
  constructor() {
    console.log('Sandbox controller is ready ⌛');
  }

  async saveSpell() {
    try {
      await sandboxSpellsService.createSpell()
    } catch (error) {
      Pop.error(error, 'Could not save spell', 'uh oh!')
      console.error('saveSpell failed', error);
    }
  }
}
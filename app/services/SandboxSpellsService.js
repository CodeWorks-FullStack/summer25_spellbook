import { AppState } from "../AppState.js";
import { SandboxSpell } from "../models/Spell.js";
import { api } from "../utils/Axios.js"

class SandboxSpellsService {
  async getMySpells() {
    const response = await api.get('api/spells')
    console.log('GOT MY SPELLS', response.data);
    const spells = response.data.map(pojo => new SandboxSpell(pojo))
    AppState.sandboxSpells = spells
  }
  async createSpell() {
    const response = await api.post('api/spells', AppState.detailedSpell)
    console.log('CREATED SPELL', response.data);
  }
}

export const sandboxSpellsService = new SandboxSpellsService()
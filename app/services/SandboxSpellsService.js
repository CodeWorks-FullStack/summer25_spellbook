import { AppState } from "../AppState.js";
import { SandboxSpell } from "../models/Spell.js";
import { api } from "../utils/Axios.js"

class SandboxSpellsService {
  async updateSpell(spellId) {
    const response = await api.put(`api/spells/${spellId}`, { prepared: true })
    console.log('UPDATED SPELL', response.data);
  }
  async getMySpells() {
    const response = await api.get('api/spells')
    console.log('GOT MY SPELLS', response.data);
    const spells = response.data.map(pojo => new SandboxSpell(pojo))
    AppState.sandboxSpells = spells
  }
  async createSpell() {
    const response = await api.post('api/spells', AppState.detailedSpell)
    console.log('CREATED SPELL', response.data);
    const spell = new SandboxSpell(response.data)
    AppState.sandboxSpells.push(spell)
  }
}

export const sandboxSpellsService = new SandboxSpellsService()
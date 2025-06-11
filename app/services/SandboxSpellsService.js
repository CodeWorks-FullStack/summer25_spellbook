import { AppState } from "../AppState.js";
import { SandboxSpell } from "../models/Spell.js";
import { api } from "../utils/Axios.js"

class SandboxSpellsService {
  async updateSpell(spellId) {
    const spells = AppState.sandboxSpells
    const spellIndex = spells.findIndex(spell => spell.id == spellId)
    const spellToUpdate = spells[spellIndex]
    const spellData = { prepared: !spellToUpdate.prepared }
    const response = await api.put(`api/spells/${spellId}`, spellData)
    console.log('UPDATED SPELL', response.data);
    const updatedSpell = new SandboxSpell(response.data)
    spells.splice(spellIndex, 1, updatedSpell)
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
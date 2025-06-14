import { AppState } from "../AppState.js";
import { DetailedSpell, Spell } from "../models/Spell.js";
import { dndApi } from "../utils/Axios.js"

class DNDSpellsService {
  async getSpellDetails(spellIndex) {
    const response = await dndApi.get(`spells/${spellIndex}`)
    console.log('GOT SPELL DETAILS 📔🪄', response.data);
    const spell = new DetailedSpell(response.data)
    AppState.detailedSpell = spell
  }

  async getSpells() {
    const response = await dndApi.get('spells')
    console.log('GOT SPELLS 🪄📔🪄🪄🪄📔📔', response.data);
    const spells = response.data.results.map(pojo => new Spell(pojo))
    AppState.dndSpells = spells
  }
}

export const dndSpellsService = new DNDSpellsService()
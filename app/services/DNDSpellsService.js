import { dndApi } from "../utils/Axios.js"

class DNDSpellsService {
  async getSpells() {
    const response = await dndApi.get('spells')
    console.log('GOT SPELLS 🪄📔🪄🪄🪄📔📔', response.data);
  }
}

export const dndSpellsService = new DNDSpellsService()
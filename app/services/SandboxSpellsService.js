import { AppState } from "../AppState.js";
import { api } from "../utils/Axios.js"

class SandboxSpellsService {
  async createSpell() {
    const response = await api.post('api/spells', AppState.detailedSpell)
    console.log('CREATED SPELL', response.data);
  }
}

export const sandboxSpellsService = new SandboxSpellsService()
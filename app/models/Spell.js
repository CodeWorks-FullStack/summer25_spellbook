
export class Spell {
  constructor(data) {
    this.index = data.index
    this.name = data.name
    this.level = data.level
  }

  get buttonHTMLTemplate() {
    return `
    <button onclick="app.dndSpellsController.getSpellDetails('${this.index}')" class="btn btn-pink w-100 mb-2" type="button">
      ${this.name}
    </button>
    `
  }
}
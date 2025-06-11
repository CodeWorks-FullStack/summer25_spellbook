
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

export class DetailedSpell {
  constructor(data) {
    this.name = data.name
    this.index = data.index
    this.level = data.level
    this.higherLevel = data.higher_level
    this.school = data.school.name
    // TODO make this not suck
    this.description = data.desc
    this.range = data.range
    this.components = data.components
    this.material = data.material
    this.isRitual = data.ritual
    this.duration = data.duration
    this.requiresConcentration = data.concentration
    this.castingTime = data.casting_time
    this.difficultyClass = data.dc.dc_type.name
    this.difficultySuccess = data.dc.dc_success
    this.classes = data.classes.map(classObj => classObj.name)
  }
}
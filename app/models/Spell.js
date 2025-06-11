import { AppState } from "../AppState.js"

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

export class SandboxSpell extends Spell {
  constructor(data) {
    super(data)
    this.id = data.id
    this.school = data.school
    this.prepared = data.prepared
    this.creatorId = data.creatorId
  }

  get buttonHTMLTemplate() {
    return `
    <div class="d-flex gap-2 align-items-center">
      <input onchange="app.sandboxSpellsController.toggleSpellPreparation('${this.id}')" type="checkbox" class="form-check-input" ${this.prepared ? 'checked' : ''}>
      <button onclick="app.dndSpellsController.getSpellDetails('${this.index}')" class="btn btn-purple w-100 mb-2" type="button">
      ${this.name}
      </button>
    </div>
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
    this.material = data.material || 'no material'
    this.isRitual = data.ritual
    this.duration = data.duration
    this.requiresConcentration = data.concentration
    this.castingTime = data.casting_time
    // NOTE ? elvis operator
    // NOTE stop drilling into an object if the left hand side property is null or undefined
    this.difficultyClass = data.dc?.dc_type.name
    this.difficultySuccess = data.dc?.dc_success
    this.classes = data.classes.map(classObj => classObj.name)
    this.damageType = data.damage?.damage_type.name || 'no damage'
    this.damage = data.damage?.damage_at_slot_level ? data.damage.damage_at_slot_level[this.level] : ''
  }

  get detailedHTMLTemplate() {
    return `
    <div class="rounded shadow bg-light p-3">
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex gap-3">
          <p class="fs-1">${this.name}</p>
          <p class="fs-4">Level ${this.level}</p>
        </div>
        ${this.saveButton}
      </div>
      <hr>
      <div class="d-flex justify-content-between">
        <div class="fw-bold">
          ${this.damageType} ${this.damage} ${this.range} ${this.castingTime} ${this.duration}
        </div>
        <div>
          ${this.requiresConcentration ? 'concentration' : ''} 
          ${this.isRitual ? 'ritual' : ''} 
        </div>
      </div>
      <div class="spell-description">
        <p>${this.description.join('<br><br>')}</p>
      </div>
      <hr>
      <div>${this.components.join(', ')}</div>
      <div>${this.material}</div>
    </div>
    `
  }

  get saveButton() {
    const identity = AppState.identity

    if (identity == null) {
      return ''
    }

    return `
     <button onclick="app.sandboxSpellsController.saveSpell()" class="btn btn-outline-purple" type="button">
      Save to my book +
    </button>
    `
  }

}




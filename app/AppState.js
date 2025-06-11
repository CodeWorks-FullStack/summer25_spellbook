import { Identity } from './Auth/Identity.js'
import { DetailedSpell, Spell } from './models/Spell.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /*** @type {Identity}*/
  identity = null

  /*** @type {Spell[]}*/
  dndSpells = []

  /*** @type {DetailedSpell}*/
  detailedSpell = null
}

export const AppState = createObservableProxy(new ObservableAppState())
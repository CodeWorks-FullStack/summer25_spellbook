import { Spell } from './models/Spell.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /*** @type {Spell[]}*/
  dndSpells = []
}

export const AppState = createObservableProxy(new ObservableAppState())
import { DNDSpellsController } from "./controllers/DNDSpellsController.js"

class App {

  dndSpellsController = new DNDSpellsController()
}

window['app'] = new App()



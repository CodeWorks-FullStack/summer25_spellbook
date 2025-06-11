import { AuthController } from "./Auth/AuthController.js"
import { DNDSpellsController } from "./controllers/DNDSpellsController.js"
import { SandboxSpellsController } from "./controllers/SandboxSpellsController.js"

class App {
  authController = new AuthController()
  dndSpellsController = new DNDSpellsController()
  sandboxSpellsController = new SandboxSpellsController()
}

window['app'] = new App()



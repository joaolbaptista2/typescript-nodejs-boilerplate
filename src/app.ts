import express, { Application } from 'express'
import * as bodyParser from 'body-parser'

class App {
  public app: Application
  public port: number

  constructor(controllers, port) {
    this.app = express()
    this.port = port
    this.intializeMiddlewares()
    this.initializeControllers(controllers)
  }

  private intializeMiddlewares(): void {
    this.app.use(bodyParser.json())
  }
  private initializeControllers(controllers): void {
    controllers.forEach(controller => {
      this.app.use('/', controller.router)
    })
  }
  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }
}

export default App

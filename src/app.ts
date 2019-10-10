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

  private testEnvVariables(): void {
    const ENV_MATCH =
      'INIT_CWD|PWD|NODE|NODE_VERSION|MYSQL_USER|MYSQL_HOST|MYSQL_DATABASE'

    Object.keys(process.env)
      .filter(key => key.match(ENV_MATCH))
      .forEach(key => {
        console.log(`> ${key}=${process.env[key]}`)
      })
  }

  private intializeMiddlewares(): void {
    this.app.use(bodyParser.json())
  }
  private initializeControllers(controllers): void {
    controllers.forEach(controller => {
      this.app.use('/', controller.router) // to be changed in order to dynamicaly change the route prefix
    })
  }
  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }
}

export default App

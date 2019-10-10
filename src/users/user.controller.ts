import express from 'express'
import { User } from './user.interface'

class UsersController {
  public path = '/users'
  public router = express.Router()

  private posts: User[] = []

  constructor() {
    this.intializeRoutes()
  }

  public intializeRoutes(): void {
    this.router.get(this.path, this.getAllUsers)
    this.router.post(this.path, this.addUser)
  }

  getAllUsers = (
    request: express.Request,
    response: express.Response,
  ): void => {
    response.send(this.posts)
  }

  addUser = (request: express.Request, response: express.Response): void => {
    const user: User = request.body
    this.posts.push(user)
    response.send(user)
  }
}

export default UsersController

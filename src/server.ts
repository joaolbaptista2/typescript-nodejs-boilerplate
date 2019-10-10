import App from './app'
import UsersController from './users/user.controller'
import sequelize from './sequelize'

const port = process.env.PORT || 5000
async function listen() {
  const app = new App([new UsersController()], port)
  if (process.env.NODE_ENV !== 'production') {
    await sequelize.sync()
  }
  app.listen()
}
listen()

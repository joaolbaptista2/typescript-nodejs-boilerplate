import { Sequelize } from 'sequelize-typescript'

const sequelize: Sequelize = new Sequelize({
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  storage: ':memory:',
  models: [__dirname + '/models'],
})

export default sequelize

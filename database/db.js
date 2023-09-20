import { Sequelize } from "sequelize";

//local
// const db = new Sequelize('database_app', 'root', '123456',{
//     host:'localhost',
//     dialect:'mysql'
// });

//AWS
const db = new Sequelize('database_app', 'admin', 'root2023',{
    host:'databasesrt.c47pd73ycppn.us-east-1.rds.amazonaws.com',
    dialect:'mysql'
});

export default db
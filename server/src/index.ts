import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Post } from "./entity/Post";
import connection from './db/connection';
import { resolvers } from './resolvers'
import * as path from 'path'

import { importSchema } from 'graphql-import'



import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = importSchema(path.join(__dirname, 'schema.graphql'))


const server = new GraphQLServer({ typeDefs, resolvers })

createConnection().then(() => {
  server.start(() => console.log('Server is running on localhost:4000'))
})




// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.username = "Timbersaw"
//     user.password = "waves"
    
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
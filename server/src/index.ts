import "reflect-metadata";
import { createConnection } from "typeorm";
import { resolvers } from './resolvers'
import * as path from 'path'

import { importSchema } from 'graphql-import'



import { GraphQLServer } from 'graphql-yoga'


const typeDefs = importSchema(path.join(__dirname, 'schema.graphql'))


const server = new GraphQLServer({ typeDefs, resolvers })

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}


createConnection().then(() => {
  server.start(options, ({ port }) => console.log(`Server started on port ${port}`))
})





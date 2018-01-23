import  ApolloClient, { HttpLink, InMemoryCache } from 'apollo-client-preset'
import { BatchHttpLink } from "apollo-link-batch-http";
import fetch from 'node-fetch';
import gql from 'graphql-tag'

const client = new ApolloClient({
  // link: new HttpLink({ uri: 'http://localhost:4000/graphql', fetch }),
  link: new BatchHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
})

// client.query({
//   query: gql`
//     query TodoApp {
//       photos {
//         id
//         credit {
//           id
//         }
//       }
//     }
//   `,
// })
//   .then(data => console.log(JSON.stringify(data, null, 2)))
//   .catch(error => console.error(error));
const x = client.query({
  query: gql`
    query TodoApp {
      photos {
        id
      }
    }
  `,
})

const z = client.query({
  query: gql`
    query TodoApp2 {
      photos2 {
        id
      }
    }
  `,
})

const y = Promise.all([x, x, z])

y.then(data => {
  console.log(JSON.stringify(data, null, 2))
})

// import express from 'express'
// import bodyParser from 'body-parser'
// import { graphqlExpress, graphiqlExpress, ExpressGraphQLOptionsFunction } from 'apollo-server-express';
// import { makeExecutableSchema } from 'graphql-tools'

// import resolvers from './schema/resolvers'
// import typeDefs from './schema/typeDefs'

// // Some fake data

// // The GraphQL schema in string form
// // const typeDefs = `
// //   type Book { title: String, author: String, a: String }
// //   type RootQuery { books(b: Int!): [Book] }

// //   schema {
// //     query: RootQuery
// //   }
// // `;

// // The resolvers
// // const resolvers = {
// //   RootQuery: {
// //     books(obj, args, context) {
// //       console.log('====================================');
// //       console.log('obj', obj);
// //       console.log('args', args);
// //       console.log('context', context);
// //       console.log('====================================');
// //       return books
// //     }
// //   },
// // };

// console.log('====================================');
// console.log(typeDefs);
// console.log('====================================');

// // Put together a schema
// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
//   logger: { log: (e) => console.log(e ) }
// });

// // Initialize the app
// const app = express();

// app.use((req, res, next) => {
//   req.user = { _id: 100  }
//   next()
// })

// // The GraphQL endpoint
// app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ schema, context: req })));

// // GraphiQL, a visual editor for queries
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// // Start the server
// app.listen(3000, () => {
//   console.log('Go to http://localhost:3000/graphiql to run queries!');
// });
import Book from './Books'

const typeDefs = `
  type RootQuery { books(b: Int!): [Book] }

  schema {
    query: RootQuery
  }
`;

export default [typeDefs, Book]
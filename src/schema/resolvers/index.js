const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
    a: 100
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    a: 200
  },
];

const resolvers = {
  RootQuery: {
    books(obj, args, context) {
      console.log('====================================');
      console.log('obj', obj);
      console.log('args', args);
      console.log('====================================');
      return books
    }
  },
};

export default resolvers;

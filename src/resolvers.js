const { navigation, pageData } = require('./data');

const resolvers = {
  Query: {
    navigation: () => navigation,
    pageData: (_, { pageId }) =>
      !pageId || pageId.length === 0
        ? pageData
        : pageData.filter(page => page.pageId === pageId),
  },
  Mutation: {
    postMessage: (_, { firstName, lastName, message }) => {
      console.log("message received", {
        firstName,
        lastName,
        message
      })
    }
  }
};

module.exports = resolvers;

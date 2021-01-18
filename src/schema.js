const { gql } = require('apollo-server');

const typeDefs = gql`
  type SubMenu {
    id: ID!,
    value: String!
  }
  
  type Menu {
    id: ID!
    value: String!
    submenu: [SubMenu]
  }
  
  type PageContent {
    title: String
    body: [String]!
  }
  
  type Content {
    pageId: String!
    pageContent: [PageContent]!
  }

  type Message {
    firstName: String!
    lastName: String!
    message: String!
  }
  
  type Query {
    navigation: [Menu]!
    pageData(pageId: String): [Content]!
  }
  
  type Mutation {
    postMessage(firstName: String!, lastName: String!, message: String!): Message
  }
`;

module.exports = typeDefs;

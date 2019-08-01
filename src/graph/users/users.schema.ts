import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    user: User
  }

  extend type Mutation {
    "set the site of user"
    setSite(siteId: ID!): User
  }
  
  type User @cacheControl(scope: PRIVATE, maxAge: 3600) {
   id: ID!
   site: Site
   groups: [Group!]
  }
`;
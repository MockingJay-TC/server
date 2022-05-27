const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    otherName: String
    age: Int
    email: String
    about: String
    skills: [Skill]
    title: String
    projects: [Project]
    linkedin: String
    github: String
    hobbies: [String]
  }

  input ProjectInput {
    title: String
    description: String
    Technologies: [TechInput]
    url: String
  }

  type Project {
    id: ID!
    title: String!
    description: String!
    technologies: [Technologies]
    url: String
  }

  input TechInput {
    name: String
    url: String
  }
  type Technologies {
    id: ID!
    name: String!
    url: String
  }

  type Query {
    Hi: String
    getUsers: [User!]
    getUser: User
    getSkills: [Skill]
  }

  type Skill {
    id: ID
    title: String
    url: String
  }
  input SkillInput {
    id: ID
    title: String
    url: String
  }

  input UserInput {
    firstName: String
    lastName: String
    otherName: String
    age: Int
    email: String
    about: String
    skills: [SkillInput]
    title: String
    projects: [ProjectInput]
    linkedin: String
    github: String
    hobbies: [String]
  }

  type Mutation {
    createUser(user: UserInput): User
    updateUser(user: UserInput): User
    # editUser(user: UserInput): User
  }
`;
module.exports = { typeDefs };

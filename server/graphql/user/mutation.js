const mutation=`#graphql
   addUser(name: String!,email: String!, phone:String!) : User
   deleteUser(id: ID!): User
`
export default mutation

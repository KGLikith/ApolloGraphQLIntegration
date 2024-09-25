const typeDefs=`#graphql
    type Post{
        id:ID!
        title:String
        body:String
        user:User
    }

`
export default typeDefs
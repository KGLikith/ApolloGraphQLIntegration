const mutation = `#graphql
    addPost(title: String!, body: String!, userId: ID!) : Post
    deletePost(id: ID!) : Post
    updatePost(id: ID!,title: String, body: String): Post
`
export default mutation
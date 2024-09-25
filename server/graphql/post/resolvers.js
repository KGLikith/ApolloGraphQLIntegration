import PostServices from "../../services/post.js"
import userServices from "../../services/user.js"

const queries={
    posts: async(_,payload)=>{
        return await PostServices.getAllPosts()
    },
    post: async (_,payload)=>{
        return await PostServices.getPost(payload.id)
    }
}
const mutation={
    addPost: async(_,payload)=>{
        const {title,body,userId} = payload
        const user = await userServices.getUser(userId)
        if(!user) return new Error("User id is not defined");
        return await PostServices.createPost(title,body,userId)
    },
    deletePost: async(_,payload)=>{
        const {id} = payload
        return await PostServices.deletePost(id)
    },
    updatePost: async(_,payload)=>{
        const {id,title,body} = payload
        return await PostServices.updatePost(id,title,body)
    }
}
const Post={
    user: async(parent)=>{
        
        const user= await userServices.getUser(parent.userId)
        return user
    }
}

export const resolvers= {queries,mutation,Post}
import userServices from "../../services/user.js"
import PostServices from "../../services/post.js"
import prisma from "../../lib/db.js"
const Post = prisma.post

const queries={
    user: async(_,payload)=>{
        const {id} = payload
        return await userServices.getUser(id)
    },
    users: async(_,payload)=>{
        return await userServices.getAllusers()
    }
}

const mutation={
    addUser: async(_,payload)=>{
        const {name,email,phone}=payload;
        return await userServices.addUser(name,email,phone)

    },
    deleteUser: async(_,payload)=>{
        const {id} = payload;
        await Post.deleteMany({
            where:{
                userId:id
            }
        })
        return await userServices.deleteUser(id)
    }
}

export const resolvers= {queries,mutation}
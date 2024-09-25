import prisma from "../lib/db.js";
const Post = prisma.post;

class PostServices {
  static async getAllPosts() {
    return await Post.findMany();
  }
  static async getPost(id) {
    return await Post.findUnique({
      where: {
        id: id,
      },
    });
  }

  static async createPost(title, body, userId) {
    return await Post.create({
      data: {
        title:title,
        body:body,
        userId:userId,
      },
    });
  }

  static async deletePost(id){
    return await Post.delete({
        where:{
            id:id
        }
    })
  }

  static async updatePost(id,title,body){
    return await Post.update({
        where:{
            id:id
        },
        data:{
            title:title,
            body:body
        }
    })
  }
}

export default PostServices
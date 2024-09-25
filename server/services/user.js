import Prisma from "../lib/db.js";
const User = Prisma.user;

class userServices {
  static async getAllusers() {
    return await User.findMany();
  }
  static async getUser(id) {
    return await User.findUnique({
      where: {
        id:id,
      },
    });
  }

  static async deleteUser(id) {
    return await User.delete({
      where: {
        id:id,
      },
    });
  }

  static async addUser(name, email, phone) {
    return await User.create({
      data: {
        name:name,
        email:email,
        phone:phone,
      },
    });
  }
}

export default userServices;

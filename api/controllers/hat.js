const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


exports.getHat = async (req, res)=> {
    try{
    const hat = await prisma.hat.findMany();
    return res.status(200).json(hat);
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
};
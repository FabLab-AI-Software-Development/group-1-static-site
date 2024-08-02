const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


exports.getTops = async (req, res)=> {
    try{
    const tops = await prisma.top.findMany({});
    return res.status(200).json(tops);
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
};
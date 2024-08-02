const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


exports.getPants = async (req, res)=> {
    try{
    const pants = await prisma.pants.findMany();
    return res.status(200).json(pants);
  } catch (error) {
    return res.status(500).json(error.message || "There was a server error.");
  }
};


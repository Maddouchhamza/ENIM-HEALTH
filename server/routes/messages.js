const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { validateToken } = require("../middlewares/AuthMiddleware");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const messages = await prisma.messages.findMany();
    res.json(messages);
  } catch (error) {
    console.log(error);
  }
});

// router.get('/:id', async (req, res)=>{
//     try {
//         const messages = await prisma.messages.findUnique({where : {id:{$id},},
//         include: {replies : true,}})
//         res.json(messages)
//     } catch (error) {
//         console.log(error)
//     }
// })

router.post("/", async (req, res) => {
  const message = req.body;
  //   const username = req.user.username;
  //   message.username = username;
  await prisma.messages.create({ data: message });
  res.json(message);
});

module.exports = router;

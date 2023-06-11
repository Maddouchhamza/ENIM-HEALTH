const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const commande = await prisma.commande.findMany();
    res.json(commande);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const commande = req.body;
  await prisma.commande.create({ data: commande });
  res.json(commande);
});

module.exports = router;

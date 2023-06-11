const express = require("express");
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const medicament = await prisma.medicament.findMany();
    res.json(medicament);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const medicament = req.body;
  await prisma.medicament.create({ data: medicament });
  res.json(medicament);
});

module.exports = router;

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const userRouter = require("./routes/user");
const messagesRouter = require("./routes/messages");
const repliesRouter = require("./routes/replies");
const conseilRouter = require("./routes/conseil");
const medicamentRouter = require("./routes/medicament");
const commandeRouter = require("./routes/commande");

app.use("/user", userRouter);
app.use("/messages", messagesRouter);
app.use("/replies", repliesRouter);
app.use("/conseil", conseilRouter);
app.use("/medicament", medicamentRouter);
app.use("/commande", commandeRouter);

app.listen(3001, () => {
  console.log("Server running");
});

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// const messagesRouter = require("./routes/messages");
// const repliesRouter = require("./routes/replies");

// app.use("/messages", messagesRouter);
// app.use("/replies", repliesRouter);

app.listen(3001, () => {
  console.log("Server running");
});

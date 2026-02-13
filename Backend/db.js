const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://vedettedesign:sunilbisht0001@vedettedesign.qmqfj6d.mongodb.net/vedettedesign";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

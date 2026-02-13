const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./db");

const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../Frontend")));

app.use("/api/enquiry", require("./routes/enquiry"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/adminAuth"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
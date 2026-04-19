require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

console.log("Starting server...");

app.use(cors());
app.use(express.json()); // ✅ built-in (no body-parser)

// API Routes
app.use("/devices", require("./routes/devices"));
app.use("/sensor", require("./routes/sensor"));
app.use("/auth", require("./routes/auth"));

// Serve frontend
app.use(express.static(path.join(__dirname, "../public")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
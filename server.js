const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const router = require("./route");

// Middleware for parsing JSON data
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// middleware
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

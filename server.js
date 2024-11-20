const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("website")); // Serve static files from the 'website' folder
app.use(cors());

// App Data
let projectData = {};

// GET Route
app.get("/all", (req, res) => {
  res.send(projectData); // Send the project data as the response
});

// POST Route
app.post("/add", (req, res) => {
  const { temperature, date, userResponse } = req.body;
  projectData = { temperature, date, userResponse }; // Save data to projectData
  res.send({ success: true, message: "Data saved successfully!" }); // Respond with success
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
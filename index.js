const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express on my Home Server latest");
});

const startedAt = new Date();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    app: "home-server-demo",
    version: "1.0.0",
    uptime: `${Math.floor(process.uptime() / 60)} minutes`,
    startedAt: startedAt.toISOString(),
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

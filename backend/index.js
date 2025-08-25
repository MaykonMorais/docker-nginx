const express = require("express");
const app = express();

app.get("/api/hello", (_, res) => {
  res.json({ message: "Hello my dear friend" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

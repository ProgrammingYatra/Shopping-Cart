require("dotenv").config();
const app=require("./app");
const { connectDatabase } = require("./config/database");


process.on("uncaughtException",(err)=>{
    console.log(`UncaughtError Occure ${err.message}`)
    process.exit(1)
})

connectDatabase();

app.listen(process.env.PORT, function () {
  console.log("Express app running on port " + process.env.PORT);
});

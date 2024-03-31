const express=require('express');
const connect=require("./configs/db.js")
const bodyParser = require("body-parser");
const Port = process.env.PORT || 3755
var cors = require('cors')
const app=express();
app.use(express.json());
app.use(cors(
  {
    origin:"*"
  }
))
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


(async () => {
  try {
    console.log("Trying to connect db....")
    await connect(); //connect to DB

    app.on("error", (err) => {
      // error handling
      console.error("Error : ", err);
      throw err;
    });

    const port =  3002;

    app.listen(port, () =>
      //listen to port
      console.log(`Server running on port ${port} 🔥`)
    );
  } catch (error) {
    console.log("Error ---> ", error);

    throw error;
  }
})();

// app.use(bodyParser.urlencoded());
const loginAuth=require("./controller/auth.controller.js")
app.use("/",loginAuth)
const RegisterAuth=require("./controller/auth.controller.js")
app.use("/",RegisterAuth)

const quizAdd=require("./controller/quizAdd.controller.js")
app.use("/admin",quizAdd)

const quiz=require("./controller/displayQuiz.controller.js")
app.use("/quiz",quiz)

const getquiz = require("./controller/quizAdd.controller.js")
app.use("/quiz",getquiz)

const user=require("./controller/auth.controller.js")
app.use("/user",user)

const userResult=require("./controller/userData.controller.js")
app.use(
  "/userResult",
  userResult
)





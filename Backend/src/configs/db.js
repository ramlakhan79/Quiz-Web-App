const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ramlakhanlodhi229:quizapp130@cluster0.hhwdnpj.mongodb.net/quiz"
    );
    console.log("? Database connected...");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
////
module.exports = connect;

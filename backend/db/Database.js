const mongoose = require("mongoose");
const User=require("../model/user");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};
module.exports = connectDatabase;
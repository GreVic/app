const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, unique: true, index: true },
    useremail: { type: String, unique: true, index: true },
    password: String
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

User.collection
  .createIndexes([
    {
      key: { username: 1 },
      name: "username"
    }
  ])
  // User.collection.createIndexes([
  //   {
  //     key: { username: 1 },
  //     name: "username"
  //   }
  // ]);
  .catch(e => console.log(e));

module.exports = User;

const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;

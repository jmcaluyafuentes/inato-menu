import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;

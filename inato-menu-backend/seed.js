import dotenv from "dotenv";
import mongoose from "mongoose";
import Menu from "./models/Menu.js";

dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Sample menu data
const sampleMenus = [
  {
    title: 'Pork Adobo',
    description: 'Easy to prepare and yummy',
    image: 'https://placehold.co/400',
    link: 'https://panlasangpinoy.com/filipino-food-pork-adobo-recipe/',
  },
  {
    title: 'Bam-i',
    description: 'Nice to cook monthly',
    image: 'https://placehold.co/400',
    link: 'https://panlasangpinoy.com/bam-i-cebuano-pansit-recipe/',
  },
  {
    title: 'Utan Bisaya',
    description: 'Good for daily meal',
    image: 'https://placehold.co/400',
    link: 'https://panlasangpinoy.com/utan-bisaya/',
  },
];

// Function to seed data
const seedDB = async () => {
  try {
    await Menu.deleteMany(); // Clears existing data
    await Menu.insertMany(sampleMenus);
    console.log("✅ Seed data added!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Seeding error:", err);
  }
};

// Run seeding function
seedDB();

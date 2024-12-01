const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://pateljaymin2969:pF4CS6lh07yhOSgh@cluster0.sk2tk.mongodb.net/home-management`, {
   
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

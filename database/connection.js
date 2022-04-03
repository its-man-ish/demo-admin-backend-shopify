const mongoose = require("mongoose");

const connectionString = 'mongodb://yb_debug_admin:ybdebug_101@68.183.88.220:27017/YBShops?authSource=admin&retryWrites=true&w=majority'
const connectDB = async () => {
  try {
    const con = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");
const Url = process.env.DB_URL;

mongoose.connect(Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Vintage-Tech",
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB Connection Error", error);
});
db.once("open", () => {
  console.log("Connected to MongoDB database!");
});

module.exports = db;

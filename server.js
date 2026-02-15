require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const bankRoutes = require("./routes/bankRoutes");

const app = express();

app.use(express.json());
app.use("/api/bank", bankRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

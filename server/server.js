const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const petRoutes = require("./routes/petRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/upload", uploadRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Paw-Adhar API is running 🐾",
  });
});

mongoose
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB connected");
    
    const PORT = process.env.PORT || 3000;
    
    app.listen(PORT, () => {
        console.log(`Paw-Adhar API running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
});

app.use("/api/pets", petRoutes);
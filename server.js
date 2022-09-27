const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

// Init Middleware
app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/api/PatientsRouter"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

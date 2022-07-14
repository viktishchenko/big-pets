require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

// anfn
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

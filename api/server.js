const express = require("express");
const app = express();

const cors = require("cors");
const router = require("./routes/router");

// Server config

app.use(express.json());
app.use(cors());

router(app);

// start server
const port = 3002;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;

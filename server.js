const express = require("express");

const app = express();

// setup up routes to all files in public using the path relative to the
// public directory.
app.use(express.static("public"));

app.listen(3000);

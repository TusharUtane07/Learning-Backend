const express = require("express");
const app = express();
const port = 3000;

app.post("/create-user", (req, res) => {
	req.send("Hello World");
});

app.listen(port);

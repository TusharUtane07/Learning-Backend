const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send(`
    <head>
        <title>Hey wassup</title>
    </head>
    <body>
        <h1><b>Hey, how you doin</b></h1>
    </body>
    `);
});

app.listen(port, () => console.log("Server is running"));

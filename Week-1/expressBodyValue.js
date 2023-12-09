const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

//! as we directly used query and headers parameters we cannot use body as the same we need a body parser which parse data in to json or anything you need then only we can use that simple.

app.post("/", (req, res) => {
	console.log(req.body);
	const value = req.body.value;
	let sum = 0;
	const calculateSum = (value) => {
		for (let i = 0; i <= value; i++) {
			sum += i;
		}
		return sum;
	};
	const result = calculateSum(value).toString();
	res.send(result);
});

app.listen(port, () => console.log("Port running"));

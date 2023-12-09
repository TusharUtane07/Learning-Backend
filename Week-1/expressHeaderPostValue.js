const express = require("express");
const app = express();
const port = 3000;

app.post("/", (req, res) => {
	const value = req.headers.value;
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

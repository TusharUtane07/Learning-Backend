const express = require("express");
const app = express();
const port = 3000;

function calculateSum(n) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += i;
	}
	return sum;
}

app.get("/cal", (req, res) => {
	const input = req.query.counter;

	let calculatedSum = calculateSum(input);
	// let answer = calculatedSum.toString();

	const answerObject = {
		sum: calculatedSum, // we can or we shouldn't pass it with a string. depending on our own.
	};

	res.send(answerObject);
});

app.listen(port, () => {
	console.log("Your port is working!!");
});

const express = require("express");
const app = express();
const port = 3000;

function calculateSum() {
	let sum = 0;
	for (let i = 1; i <= 200; i++) {
		sum += i;
	}
	return sum;
}
app.get("/", (req, res) => {
	let output = calculateSum();
	const result = "The sum of 1 to 100 is: " + output;
	res.send(result);
});

app.listen(port, () => {
	console.log("Yo your server is successfully running");
});

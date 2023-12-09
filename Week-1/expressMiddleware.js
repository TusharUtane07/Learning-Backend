const express = require("express");
const app = express();
const port = 3000;

const middleware = (req, res, next) => {
	console.log("From inside middleware " + req.headers.value);
	next();
};
// This is middleware this does not log on time running server as we send on post man then after wards it logs
app.use(middleware);

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
// we can also add middleware that is route specific on to the route wla function only there we can add after route and then middle ware and then the req res function that does send the res

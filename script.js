const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/action_page", (req, res) => {
	res.sendFile(__dirname + "/starting_page.html");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

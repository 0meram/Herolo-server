const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/search", require("./routes/search"));

app.get("/", (req, res) => {
	res.send(`<h1>Herolo Server i automation</h1>`);
});

app.listen(PORT, () => {
	console.log(`im ready to work on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const quizRoute = require("./router/quiz");
const submitRoute = require("./router/submit");
const materiRoute = require("./router/materi");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

app.get('/', (req, res) => {
  res.send("Hallo kami dari kelompok Antico");
});

app.use("/api/anticoquiz", quizRoute);
app.use("/api/submit", submitRoute);
app.use("/api/materi", materiRoute);

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));

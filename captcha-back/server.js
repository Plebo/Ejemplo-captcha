//6Lf-KfEbAAAAAHIjd3YvRk9Ji022NLlC07PcLj31 - front
//6Lf-KfEbAAAAABaPmUzwbsnE2XR-q4U7BgCIiBMP - back

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("isomorphic-fetch");

const app = express();
const port = 4444;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(cors());

app.listen(port, () => {
  console.log("We are live on port 4444");
});

app.post("/api/verificar-captcha", (req, res) => {
  const secret_key = "6Lf-KfEbAAAAABaPmUzwbsnE2XR-q4U7BgCIiBMP";
  const token = req.body.token;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;

  fetch(url, {
    method: "post",
  })
    .then((response) => response.json())
    .then((google_response) => {
      if (google_response.success === true) {
        res.send("Exitoso");
        console.log("Exitoso");
      } else {
        console.log("No exitoso");
        res.send("No exitoso");
      }
    });
});

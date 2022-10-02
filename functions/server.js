const app = require("./apiServer");
const serverless = require("serverless-http");

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports.handler = serverless(app);
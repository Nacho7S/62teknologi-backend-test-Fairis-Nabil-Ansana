const app = require("../apps");
port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`listening app to ${port}`);
})
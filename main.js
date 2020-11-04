const db = require("./server/db");

const app = require("./server");

//listen for requests
//useful if you deploy on Heroku
const port = process.env.PORT || 3000;

db.sync().then(() => {
  console.log("db synced");
  app.listen(port, function () {
    console.log(`Your server is listening on port ${port}`);
  });
});

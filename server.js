const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: ".env" });

const db = process.env.CONNECTION;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection is successful!");
  });

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

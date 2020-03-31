const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = process.env.MONGO_URI ||require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const channels = require("./routes/api/channels");
const messages = require("./routes/api/messages");
const dmgroups = require("./routes/api/dmgroups");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');




if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


app.get("/", (req, res) => res.send("Hello"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/channels", channels);
app.use("/api/messages", messages);
app.use("/api/dmgroups", dmgroups);


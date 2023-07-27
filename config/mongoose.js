const mongoose = require("mongoose");

const connection = async () => {
  try {
    return await mongoose.connect(
      "mongodb://127.0.0.1:27017/ISSUE_TRACKER_DB   "
    );
  } catch (err) {
    console.log(err);
  }
};

const db = connection();

db.then(function (data) {
  console.log("connented successfullty");
}).catch(function (err) {
  console.log("error in connecting", err);
});

module.exports = db;

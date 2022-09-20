const User = require("../Model/user");

const submitUserResponse = async (req, res) => {
  let user = req.body;

  await User.create(user, (err) => {
    if (err) {
      console.log(err);
      res.end("Fail");
    } else {
      res.send("Success");
    }
  });
};

module.exports = {
  submitUserResponse,
};

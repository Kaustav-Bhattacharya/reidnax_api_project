const { users } = require("../data/users");

const userAuth = (req, res) => {
  const { userName, pass } = req.body;

  const user = users.find(
    (u) => u.username === userName && u.password === pass
  );

  if (user) {
    res.json({ success: true });
  } else {
    res.status(200).json({ success: false, message: "Invalid credentials" });
  }
};

module.exports = { userAuth };

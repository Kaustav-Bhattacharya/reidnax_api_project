const { analyticsData } = require("../data/dataSet");

const data = (req, res) => {
  res.json(analyticsData);
};

module.exports = { data };

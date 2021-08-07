require("dotenv").config();

const firstReq = {
  // https://cataas.com/cat/says/Hi%20There?width=500&height=800&c=Cyan&s=150
  url:
    "https://cataas.com/cat/says/" +
    process.env.CAT_GREETING +
    "?width=" +
    process.env.CAT_WIDTH +
    "&height=" +
    process.env.CAT_HEIGHT +
    "&color=" +
    process.env.CAT_COLOR +
    "&s=" +
    process.env.CAT_SIZE,
  encoding: "binary",
};

const secondReq = {
  url:
    "https://cataas.com/cat/says/" +
    process.env.CAT_GREETING +
    "?width=" +
    process.env.CAT_WIDTH +
    "&height=" +
    process.env.CAT_HEIGHT +
    "&color=" +
    process.env.CAT_COLOR +
    "&s=" +
    process.env.CAT_SIZE,
  encoding: "binary",
};

module.exports = { firstReq, secondReq };

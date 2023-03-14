const bcrypt = require("bcryptjs");
const strPad = (input: any, padLength: any, padString: any, padType: any) => {
  let half = "";
  let padToGo;

  const strPadRepeater = function(s: any, len: any) {
    let collect = "";

    while (collect.length < len) {
      collect += s;
    }
    collect = collect.substr(0, len);

    return collect;
  };

  input += "";
  padString = padString !== undefined ? padString : " ";

  if (
    padType !== "STR_PAD_LEFT" &&
    padType !== "STR_PAD_RIGHT" &&
    padType !== "STR_PAD_BOTH"
  ) {
    padType = "STR_PAD_RIGHT";
  }
  if ((padToGo = padLength - input.length) > 0) {
    if (padType === "STR_PAD_LEFT") {
      input = strPadRepeater(padString, padToGo) + input;
    } else if (padType === "STR_PAD_RIGHT") {
      input += strPadRepeater(padString, padToGo);
    } else if (padType === "STR_PAD_BOTH") {
      half = strPadRepeater(padString, Math.ceil(padToGo / 2));
      input = half + input + half;
      input = input.substr(0, padLength);
    }
  }

  return input;
};

const createSalt = () => {
  const pool =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ./";
  const prefix = "$2y$";

  const max = pool.length;
  let salt = "";
  for (let i = 0; i < 22; i += 1) {
    salt += pool[Math.floor(Math.random() * max)];
  }

  const strength = strPad(8, 2, "0", "STR_PAD_LEFT");
  return `${prefix + strength}$${salt}$`;
};
const generate = (value: any) => {
  const salt = createSalt();
  return bcrypt.hashSync(value, salt);
};
const check = (value: any, hashed: any) => bcrypt.compareSync(value, hashed);
export default { generate, check };
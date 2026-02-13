const bcrypt = require("bcryptjs");

async function hash() {
  console.log(await bcrypt.hash("sunil@#12345", 10));
  console.log(await bcrypt.hash("aarti@312345", 10));
}
hash();

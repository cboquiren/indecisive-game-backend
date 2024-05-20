import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// bcrypt.hash("test", 11).then((data) => console.log(data));

// bcrypt
//   .compare("test", "$2b$11$hwuQj1nuzlHFRZxaRxboo.ErocmjqvxOQO01eao2xAfq6809/U2N2")
//   .then((data) => console.log(data));

const data = {
  name: "carl",
};

const myJwt = jwt.sign(data, "super-secret");

console.log(myJwt);

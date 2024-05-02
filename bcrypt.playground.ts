import bcrypt from "bcrypt";

// bcrypt.hash("test", 11).then((data) => console.log(data));

bcrypt
  .compare("test", "$2b$11$hwuQj1nuzlHFRZxaRxboo.ErocmjqvxOQO01eao2xAfq6809/U2N2")
  .then((data) => console.log(data));

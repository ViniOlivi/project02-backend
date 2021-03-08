require("./api/server");

const { version, name } = require("./package.json");

console.log(
  `<<< ( ͡° ͜ʖ ͡°) ${name} v${version} was started in 'DEV' enviroment >>>`,
);

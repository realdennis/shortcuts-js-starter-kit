const { actionOutput, withVariables } = require("@joshfarrant/shortcuts-js");
const {
  calculate,
  comment,
  number,
  showResult
} = require("@joshfarrant/shortcuts-js/actions");

const calcVar = actionOutput();

const actions = [
  comment({
    text: "Hello, world!"
  }),
  number({
    number: 43
  }),
  calculate(
    {
      operand: 3,
      operation: "/"
    },
    calcVar
  ),
  showResult({
    text: withVariables`Total is ${calcVar}!`
  })
];

module.exports = actions;

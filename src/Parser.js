const NON_TERMINALS = {
  expression: "expression",
  value: "value",
  digits: "digits",
  digit: "digit",
  operation: "operation",
};

const TERMINALS = {
  DECIMAL: "DECIMAL",
  LEFT_PAREN: "L_PAREN",
  RIGHT_PAREN: "R_PAREN",
  ZERO: "ZERO",
  ONE: "ONE",
  TWO: "TWO",
  THREE: "THREE",
  FOUR: "FOUR",
  FIVE: "FIVE",
  SIX: "SIX",
  SEVEN: "SEVEN",
  EIGHT: "EIGHT",
  NINE: "NINE",
};

const PRODUCTION_RULES = {
  root: [[{ nonTerminal: NON_TERMINALS.expression }]],
  expression: [
    [{ nonTerminal: NON_TERMINALS.value }],
    [
      { nonTerminal: NON_TERMINALS.value },
      { nonTerminal: NON_TERMINALS.operator },
      { nonTerminal: NON_TERMINALS.expression },
    ],
  ],
  value: [
    [{ nonTerminal: NON_TERMINALS.digits }],
    [
      { nonTerminal: NON_TERMINALS.digits },
      { terminal: TERMINALS.DECIMAL },
      { nonTerminal: NON_TERMINALS.digits },
    ],
  ],
  digits: [
    [{ nonTerminal: NON_TERMINALS.digit }],
    [
      { nonTerminal: NON_TERMINALS.digit },
      { nonTerminal: NON_TERMINALS.digits },
    ],
  ],
  digit: [
    { terminal: TERMINALS.ZERO },
    { terminal: TERMINALS.ONE },
    { terminal: TERMINALS.TWO },
    { terminal: TERMINALS.THREE },
    { terminal: TERMINALS.FOUR },
    { terminal: TERMINALS.FIVE },
    { terminal: TERMINALS.SIX },
    { terminal: TERMINALS.SEVEN },
    { terminal: TERMINALS.EIGHT },
    { terminal: TERMINALS.NINE },
  ],
};

let replaceWith = function (array, regExpArr, replacerArray) {
  // store indices of found matches
  let currMatchCharIndex = 0;
  let matchIndices = [];

  array.forEach((el, i, array) => {
    if (i >= regExpArr.length - 1) {
      if (
        // if the preceding sequence matches the regExp
        !regExpArr
          .map((regExp, j, array) => {
            return regExp.test(array[i - (array.length - 1) + j]);
          })
          .includes(false)
      ) {
        matchIndices.push(i - (regExpArr.length - 1));
      }
    }
  });

  console.log("match indices");
  console.log(matchIndices);
};

export function parseInput(input) {
  console.log("replace with test:");
  let testReplace = replaceWith([1, 0, 0], [/1/, /0/], [null, "_"]);
  console.log(testReplace);
  // clean input:

  // make sure parens match
  let parenStack = [];
  input.forEach((char) => {
    if (char === "(") parenStack.push("(");
    if (char === ")") {
      if (parenStack.pop() === undefined) return false;
    }
  });
  if (parenStack.length !== 0) return false;

  // (!digit).digit => 0.digit
  // digit.(!digit) => digit
  let criticalInputError = false;
  let charsToAdd = [];
  input.forEach((char, i, input) => {
    if (char === ".") {
      switch (i) {
        case 0:
          if (/[0-9]/.test(input[i + 1])) {
            charsToAdd.push({ index: 0, add: "0" });
          } else criticalInputError = true;
          break;
        case input.length - 1:
          if (/[0-9]/.test(input(i - 1))) {
            charsToAdd.push({ index: i + 1, add: "0" });
          } else criticalInputError = true;
          break;
        default:
          let rightIsDigit = /[0-9]/.test(input[i + 1]);
          let leftIsDigit = /[0-9]/.test(input[i - 1]);

          if (leftIsDigit && !rightIsDigit)
            charsToAdd.push({ index: i + 1, add: "0" });
          if (!leftIsDigit && rightIsDigit)
            charsToAdd.push({ index: i - 1, add: "0" });
      }
    }
  });
  if (criticalInputError) return false;
  console.log("chars to add");
  console.log(charsToAdd);

  /*// (!(DIGIT, DOT, RPAREN))(+/-)digit => 0(+/-)digit
  let replacedFirst = false;
  let inputCleanedV1 = input.map((char, i, input) => {
    if (isSign(char)) {
      if (i === 0) {
        if (isDigit(input[i+1]))
        replacedFirst = true;
      }
    }
  })*/

  // digit. => digit.0
  // -digit => 0-digit;
  // +digit => 0+digit;
  // )digit=> )*digit
  // digit( = digit *(

  console.log("chars entered: ");
  console.log(input);
  return true;
}

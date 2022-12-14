import "./App.css";
import { BUTTON_CONTAINERS } from "./ButtonContainers.js";
import { useState } from "react";
import { create, all } from "mathjs";

const NUM_DIGITS = 24;
const DIGIT_KEYS = Array.from({ length: NUM_DIGITS }, (_, i) => i + 1);

// create isntance of mathjs
const config = {};
const math = create(all, config);

function App() {
  const [charsEntered, setCharsEntered] = useState(DIGIT_KEYS.map(() => ""));

  const handleInput = (op) => {
    if (charsEntered[0] === "e" || charsEntered[0] === "=") {
      if (op === "clr") {
        setCharsEntered(DIGIT_KEYS.map(() => ""));
      } else {
        if (op !== "=") {
          setCharsEntered(
            DIGIT_KEYS.map((_, i) => {
              if (i === 0 && op !== "=") return op;
              return "";
            })
          );
        }
        return;
      }
    }
    if (op !== "=" && op !== "clr") {
      if (charsEntered[NUM_DIGITS - 1] !== "") {
        return;
      }
      let firstEmptySpaceIndex = charsEntered.indexOf("");
      setCharsEntered(
        charsEntered.map((char, i) => {
          if (i === firstEmptySpaceIndex) return op;
          return char;
        })
      );
    } else if (op === "clr") {
      setCharsEntered(DIGIT_KEYS.map(() => ""));
    } else if (op === "=") {
      //ensure parenthesis match and check for parens containing no values
      let parenStack = [];
      let validParenConfiguration = true;
      charsEntered.forEach((char, i, charsEntered) => {
        if (char === "(") parenStack.push("(");
        if (char === ")") {
          if (parenStack.pop() === undefined) validParenConfiguration = false;
          if (i > 0 && charsEntered[i - 1] === "(")
            validParenConfiguration = false;
        }
      });
      if (parenStack.length !== 0) validParenConfiguration = false;

      if (validParenConfiguration) {
        //parenthesis match, now define regular expression that represents all possible inputs

        let leftModRegExp = "((-|\\+)?(\\()*)*(-|\\+)?";
        let digitRegExp = "([0-9]+|([0-9]*\\.[0-9]+)|([0-9]+\\.[0-9]*))";
        let rightModRegExp = "(\\))*";
        let operatorRegExp = "(\\+|-|\\*|\\/)?";
        let valueRegExp = leftModRegExp + digitRegExp + rightModRegExp;
        let rootRegExp = new RegExp(
          valueRegExp + "(" + operatorRegExp + valueRegExp + ")*"
        );

        // check if input is valid using regex
        if (rootRegExp.test(charsEntered.join(""))) {
          // display answer
          console.log("answer:");
          let answer = math.evaluate(charsEntered.join("")).toString();
          console.log(answer);
          let answerChars = answer.split("");

          setCharsEntered(
            DIGIT_KEYS.map((_, i) => {
              if (i === 0) return "=";
              return answerChars[i - 1];
            })
          );
        } else {
          setCharsEntered(
            DIGIT_KEYS.map((_, i) => {
              if (i > 2) return "";
              if (i === 0) return "e";
              if (i <= 2) return "r";
            })
          );
        }
      } else {
        setCharsEntered(
          DIGIT_KEYS.map((_, i) => {
            if (i > 2) return "";
            if (i === 0) return "e";
            if (i <= 2) return "r";
          })
        );
      }
    }
  };

  return (
    <>
      <div
        id="title"
        className=" center fill border flex round-corners-1 text-center"
      >
        <h1 class="center text-center">React Calculator</h1>
      </div>
      <Calculator charsEntered={charsEntered} handleinput={handleInput} />
    </>
  );
}

function Calculator({ charsEntered, handleinput }) {
  return (
    <div id="calculator" className="center flex border round-corners-1">
      <Screen charsEntered={charsEntered} />
      <ButtonDivider
        id="root-button-container"
        key="root-button-container"
        structure={BUTTON_CONTAINERS}
        handleinput={handleinput}
      />
    </div>
  );
}

function Screen({ charsEntered }) {
  //console.log("chars entered:");
  //console.log(charsEntered);
  return (
    <div id="screen" className="center flex border round-corners-1">
      {DIGIT_KEYS.map((digitKey, i) => (
        <Digit
          key={digitKey}
          contains={charsEntered[i]}
          className="digit border round-corners-2"
        />
      ))}
    </div>
  );
}

function ButtonDivider({ id: currComponentID, structure, handleinput }) {
  const renderButtons = (buttons) =>
    buttons.map((button) => (
      <Button id={button.id} style={button.style} handleinput={handleinput} />
    ));

  // console.log("----------------------------");
  // console.log("structure:");
  // console.log(structure);
  // console.log("currentcomponentid:");
  // console.log(currComponentID);
  // console.log("parent button styles:");
  const { id, style, classes, children, buttons } = structure;
  // console.log(buttons);
  // console.log("currentbuttonstyles:");
  // console.log(buttons);
  if (children) {
    return (
      <div id={currComponentID} className={classes} style={style}>
        {children.map((child) => (
          <ButtonDivider
            key={child.id}
            id={child.id}
            structure={child}
            handleinput={handleinput}
          />
        ))}
      </div>
    );
  } else {
    // console.log("   button styles:");
    // console.log(buttons);
    return (
      <div
        key={currComponentID}
        id={currComponentID}
        style={style}
        className={classes}
        handleinput={handleinput}
      >
        {buttons ? renderButtons(buttons) : null}
      </div>
    );
  }
}

function Digit({ contains }) {
  return (
    <div id="digit" className="center">
      {contains}
    </div>
  );
}

function Button({ id, style, handleinput }) {
  return (
    <div
      className="center button-digit flex border round-corners-1 button"
      style={style}
      key={id}
      onClick={() => handleinput(id)}
    >
      {id}
    </div>
  );
}

// TODO resolve warnings
// TODO store some functions in another file

export default App;

import { Button, Container, Current, Previus, Screen } from "./Styled";
import React, { useState } from "react";
export default function Calculator() {
  const [previous, setPrevious] = useState("");
  const [current, setCurrent] = useState("");
  const [operation, setOperation] = useState("");

  const appendValue = (el) => {
    const value = el.target.getAttribute("data");

    if (value === "." && current.includes(".")) return;
    setCurrent(current + value);
  };

  const handleDelete = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const handleAllClear = () => {
    setCurrent("");
    setPrevious("");
    setOperation("");
  };

  const chooseOperation = (el) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }

    setCurrent("");
    setOperation(el.target.getAttribute("data"));
  };

  const equals = () => {
    let value = compute();
    if (value == undefined || value == null) return;

    setCurrent(value);
    setPrevious("");
    setOperation("");
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (operation) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "×":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      default:
        return;
    }

    return result;
  };

  return (
    <Container>
      <Screen>
        <Previus>
          {previous} {operation}
        </Previus>
        <Current>{current}</Current>
      </Screen>
      <Button onClick={handleAllClear} gridSpan={2} Control>
        AC
      </Button>
      <Button onClick={handleDelete} Control>
        DEL
      </Button>
      <Button data={"÷"} onClick={chooseOperation} Operation>
        ÷
      </Button>
      <Button data={"7"} onClick={appendValue}>
        7
      </Button>
      <Button data={"8"} onClick={appendValue}>
        8
      </Button>
      <Button data={"9"} onClick={appendValue}>
        9
      </Button>
      <Button data={"×"} onClick={chooseOperation} Operation>
        ×
      </Button>
      <Button data={"4"} onClick={appendValue}>
        4
      </Button>
      <Button data={"5"} onClick={appendValue}>
        5
      </Button>
      <Button data={"6"} onClick={appendValue}>
        6
      </Button>
      <Button data={"+"} onClick={chooseOperation} Operation>
        +
      </Button>
      <Button data={"1"} onClick={appendValue}>
        1
      </Button>
      <Button data={"2"} onClick={appendValue}>
        2
      </Button>
      <Button data={"3"} onClick={appendValue}>
        3
      </Button>
      <Button data={"-"} onClick={chooseOperation} Operation>
        -
      </Button>
      <Button data={"."} period onClick={appendValue}>
        .
      </Button>
      <Button data={"0"} onClick={appendValue}>
        0
      </Button>
      <Button gridSpan={2} onClick={equals} equals>
        =
      </Button>
    </Container>
  );
}

import { useState } from "react";
import styles from "./Styles/App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
function App() {
  const [value, setValue] = useState("0");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setValue("0");
    } else if (buttonText === "=") {
      const result = eval(value);
      setValue(result);
    } else {
      if (value === "0") setValue(buttonText);
      else {
        setValue(value + buttonText);
      }
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={value} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;

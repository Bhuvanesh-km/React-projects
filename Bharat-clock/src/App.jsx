import BharatTime from "./components/BharatTime";
import Title from "./components/Title";
import Description from "./components/description";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center className="container">
      <Title />
      <Description />
      <BharatTime />
    </center>
  );
}

export default App;

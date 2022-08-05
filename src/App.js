import { render } from "react-dom";
import "./scss/style.scss";
import Component from "./components/Components";

function App() {
  return (
    <main className="wrapper">
      <Component />
    </main>
  );
}

render(<App />, document.getElementById("root"));

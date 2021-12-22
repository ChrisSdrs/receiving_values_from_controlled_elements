import React from "react";
import ReactDOM from "react-dom";
import Validator from "./Validator";

class App extends React.Component {
  render() {
    return (
      <div>
        <Validator />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

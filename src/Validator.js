import React from "react";
import "./Validator.css";

class Validator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: "" };
  }

  render() {
    return (
      <div className="ui-segment">
        <form className="ui form">
          <div className="field">
            <label>Enter password</label>
            <input
              // When the password is 4 or more characters then the text disappears
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          {this.state.password.length < 4
            ? "Password must be at least 4 characters"
            : ""}
        </form>
      </div>
    );
  }
}

export default Validator;

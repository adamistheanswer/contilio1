import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import "./Login.css";

interface ILoginState {
  username: string;
  password: string;
}

class Login extends Component<RouteComponentProps, ILoginState> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<ILoginState, keyof ILoginState>);
  };

  handleSubmit = (): void => {
    this.props.history.push("/dashboard");
  };

  render() {
    const { username, password } = this.state;
    const isButtonDisabled = !username || !password;

    return (
      <div className="login-container">
        <h1>Login</h1>
        <p>Welcome to Dashboard</p>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={this.handleInputChange}
        />
        <button
          className="login-button"
          disabled={isButtonDisabled}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Login;

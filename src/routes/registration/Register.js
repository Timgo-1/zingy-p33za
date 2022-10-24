import React from "react";
import RegistrationForm from "./RegistrationForm";

export default class Register extends React.Component {
  render() {
    document.title = "Register | Zingy P33za";
    return (
      <main className="register-main">
        <h1>Register</h1>
        <RegistrationForm />
      </main>
    );
  }
}

import React from "react";
import { useState, ChangeEvent } from "react";

const Page = () => {
    const [emailInput, setEmailInput] = useState<string>("");
    const [passwordInput, setPasswordInput] = useState<string>("");
    const [usernameInput, setUsernameInput] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
  
    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
      setEmailInput(event.target.value);
    };
    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
      setPasswordInput(event.target.value);
    };
    const handleUsernameInput = (event: ChangeEvent<HTMLInputElement>) => {
      setUsernameInput(event.target.value);
    };
  
    const handleSignup = async () => {
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailInput,
            password: passwordInput,
            username: usernameInput,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          alert("Signup successful!");
          console.log(data.token);
        } else {
          setErrorMessage(data.message || "Signup failed.");
        }
      } catch (error) {
        setErrorMessage("An error occurred. Please try again.");
      }
    };
  
    return (
      <div className="form">
        <input
          value={emailInput}
          onChange={handleEmailInput}
          placeholder="Email"
        />
        <input
          value={usernameInput}
          onChange={handleUsernameInput}
          placeholder="Username"
        />
        <input
          value={passwordInput}
          onChange={handlePasswordInput}
          type="password"
          placeholder="Password"
        />
        {errorMessage && <p>{errorMessage}</p>}
        <button onClick={handleSignup}>Sign up</button>
      </div>
    );
  };
  
import React, { useState } from 'react';
import '../styling/LogInForm.css'
function LogInForm() {
  const [showSignup, setShowSignup] = useState(false);

  const handleCheckboxChange = () => {
    setShowSignup(!showSignup);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to a backend)
    console.log('Form submitted!');
  };

  return (
    <>
      <div className="main">
        <input
          type="checkbox"
          id="chk"
          checked={showSignup}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="chk">Sign Up/Login</label>

        <div className={`signup ${showSignup ? 'active' : ''}`}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">User name</label>
            <input type="text" id="username" name="username" placeholder="User name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
            <label htmlFor="broj">BrojTelefona</label>
            <input type="number" id="broj" name="broj" placeholder="BrojTelefona" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" required />
            <button type="submit">Sign up</button>
          </form>
        </div>

        <div className={`login ${!showSignup ? 'active' : ''}`}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogInForm;
import React, { useState } from 'react';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (name.length < 3 || name.length > 30) {
      errors.name = 'Name should be between 3 and 30 characters.';
      isValid = false;
    }

    if (!email.includes('@')) {
      errors.email = 'Email must be valid.';
      isValid = false;
    }

    if (password.length < 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.password = 'Password must be at least 10 characters long with at least one special character.';
      isValid = false;
    }

    if (password !== repeatPassword) {
      errors.repeatPassword = 'Passwords do not match.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Registration successful:', { name, email, password });
      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');
      setErrors({});
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div className="register">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label>Repeat Password:</label>
          <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
          {errors.repeatPassword && <p className="error">{errors.repeatPassword}</p>}
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Registration;

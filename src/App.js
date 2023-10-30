

import React, { Component } from 'react';
import './App.css';


function calculateAge(dateOfBirth) {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();

  // Check if the birthday has occurred this year
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    return age - 1;
  }

  return age;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', // Add email field for login
      password: '', // Add password field for login
      name: '',
      dob: '',
      specialization: '',
      registrationFormVisible: false,
      loginFormVisible: true,
    };
  }


  

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    // Perform login validation here (placeholder logic)
    if (this.state.email && this.state.password) {
      // Handle successful login (you can redirect the user or perform other actions)
      alert('Login successful!');
    } else {
      // Handle login validation errors
      alert('Login failed. Please check the credentials.');
    }
  };

  handleRegistration = () => {
    // Perform registration validation here (placeholder logic)

    
    if (this.state.name && this.state.email && this.state.dob) {
      // Handle successful registration (you can submit data to a server here)
      const age = calculateAge(this.state.dob);
      
    if (age < 18) {
      alert('Registration failed. You must be at least 18 years old.');
    } else {
      // Handle successful registration (you can submit data to a server here)
      alert('Registration successful!');
      this.setState({
        registrationFormVisible: false,
        loginFormVisible: true,
      });
    }
  } else {
    // Handle validation errors
    alert('Registration failed. Please check the form.');
  }
};
  toggleRegistrationForm = () => {
    this.setState((prevState) => ({
      registrationFormVisible: !prevState.registrationFormVisible,
      // loginFormVisible: !prevState.loginFormVisible,
    }));
  };

  render() {
    return (
      <div className='App'>
      <div className="container" >
        <div className="container">
          
          {this.state.loginFormVisible && (
            <div>
              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
                <button onClick={this.handleLogin} className="btn btn-primary">
                  Login
                </button>
              </form>
              <div
                onClick={this.toggleRegistrationForm}
                className="register-here-link"
              >
                Register here
              </div>
            </div>
          )}

          {this.state.registrationFormVisible && (

            
            <div>
                <br></br>
                <br></br>
                <br></br>
                <h1>Registeration</h1>
              <form>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Date of Birth:</label>
                  <input
                    type="date"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Specialization:</label>
                  <input
                    type="text"
                    name="specialization"
                    value={this.state.specialization}
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    className="form-control"
                  />
                </div>

                <button
                  onClick={this.handleRegistration}
                  className="btn btn-primary"
                >
                  Register
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
}

export default App;

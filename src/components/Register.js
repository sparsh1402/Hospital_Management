import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [specialities, setSpecialities] = useState([]);
  const [error, setError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., validation and registration process

    if (!name || !email || !dob || specialities.length === 0) {
      setError('Please fill in all fields.');
      return;
    }

    // Perform registration here, e.g., by sending a request to a server

    // If registration is successful, you can redirect the user or show a success message
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Specialities:</label>
          <select
            multiple
            value={specialities}
            onChange={(e) =>
              setSpecialities(
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            required
          >
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Oncology">Oncology</option>
            {/* Add more specialities as needed */}
          </select>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

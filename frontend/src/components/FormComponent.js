import React, { useState } from 'react';
import axios from 'axios';

const FormComponent = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/endpoint', { name }) // Cambia el endpoint según sea necesario
      .then(response => {
        console.log('Data submitted:', response.data);
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default FormComponent;

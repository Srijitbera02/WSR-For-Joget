import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '300px'
      }}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;


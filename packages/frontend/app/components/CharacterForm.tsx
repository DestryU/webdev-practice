'use client'

import React from 'react';
import { useState } from 'react';

const CharacterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    race_name: '',
    class_name: '',
    level: 1,
    backstory: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'level' ? parseInt(value, 10) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(''); // Reset status

    try {
      const response = await fetch('http://localhost:5000/api/addCharacter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Character added successfully!');
        setFormData({ name: '', race_name: '', class_name: '', level: 1, backstory: '' }); // Reset form
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || 'Something went wrong'}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        setStatus(`Error: ${error.message}`);
      } else {
        setStatus('An unknown error occurred.');
      }
    }
  };

  return (
    <div>
      <h2>Add a Character</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="race_name" value={formData.race_name} onChange={handleChange} placeholder="Race" required />
        <input name="class_name" value={formData.class_name} onChange={handleChange} placeholder="Class" required />
        <input type="number" name="level" value={formData.level} onChange={handleChange} placeholder="Level" required />
        <textarea name="backstory" value={formData.backstory} onChange={handleChange} placeholder="Backstory" required />
        <button type="submit">Add Character</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default CharacterForm;

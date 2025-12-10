import React, { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        <br />

        <label htmlFor="age">Age:</label>
        <input type="text" name="age" value={form.age} onChange={handleChange} />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
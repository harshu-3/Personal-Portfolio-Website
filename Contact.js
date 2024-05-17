import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <br />
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="number" id="mobileNumber" name="mobileNumber" required />
        </div>
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>
    </section>
  );
};

export default Contact;
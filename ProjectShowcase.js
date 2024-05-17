import React from 'react';

const ProjectShowcase = () => {
  return (
    <section>
      <h2>Project Showcase</h2>
      <br></br>
      <div>
        <h3>International Space Station Tracker</h3>
        <p>A website which provides the live coordinates of the International Space Station.It is capable of judging the precise speed and location of the International Space Station at any point of time.</p>
       
      </div>
      <div>
        <h3>Steganography Demonstrator</h3>
        <p>An application which was built with the techniques of least significant and most significant bit.It is capable of concealing secret information within images and thus ensuring privacy and security.</p>
      </div>
      <div>
        <h3>Sign Language Recognition</h3>
        <p>A machine learning based application that is capable of recognizing sign language and converting it into text message format.It is an application which was developed with the motive of providing assistance to the physically challenged people.</p>
      </div>
    </section>
  );
};

export default ProjectShowcase;
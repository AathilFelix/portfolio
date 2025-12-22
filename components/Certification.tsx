import React from 'react'
import Certificate from './ui/Certificate';

const Certification = () => {
  return (
    <section>
      <h1 className="text-xl font-bold">Certifications</h1>
      <Certificate
        name="CS50x: Introduction to the Intellectual Enterprises of Computer Science"
        id="48d4d25a-7d54-4cc4-b657-3bc56947867c"
        url="https://certificates.cs50.io/48d4d25a-7d54-4cc4-b657-3bc56947867c.pdf"
        year="2024"
      />
    </section>
  );
}

export default Certification
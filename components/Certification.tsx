import React from 'react'
import Certificate from './ui/Certificate';

const Certification = () => {

  const certificates = [
    {
      title:
        "CS50x: Introduction to the Intellectual Enterprises of Computer Science",
      id: "48d4d25a-7d54-4cc4-b657-3bc56947867c",
      url: "https://certificates.cs50.io/48d4d25a-7d54-4cc4-b657-3bc56947867c.pdf",
      year: "2024",
    },
    {
      title: "CS50's Introduction to Programming with Python",
      id: "9c9cec80-7faa-48a2-a3a1-d846d4fe8567",
      url: "https://certificates.cs50.io/48d4d25a-7d54-4cc4-b657-3bc56947867c.pdf",
      year: "2024",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      id: "WRND8O8NIVTM",
      url: "https://www.coursera.org/account/accomplishments/verify/WRND8O8NIVTM",
      year: "2025",
    },
    {
      title: "The Complete Python Bootcamp From Zero to Hero in Python",
      id: "UC-7ea25f23-d5cc-45f1-beb6-bc94683aba04",
      url: "https://www.udemy.com/certificate/UC-7ea25f23-d5cc-45f1-beb6-bc94683aba04/",
      year: "2022",
    },
    {
      title: "Programming Using C++",
      id: "1-e83baacc-815c-4551-9b71-d286790345f6",
      url: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_01297200240671948837_shared/1-e83baacc-815c-4551-9b71-d286790345f6.pdf",
      year: "2024",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Architect Associate",
      id: "0E1428701CBFE0008112B938B6B5DB45D30BF74442C0F5524363E090A3AE7E23",
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0E1428701CBFE0008112B938B6B5DB45D30BF74442C0F5524363E090A3AE7E23",
      year: "2025 - 2027"

    },
  ];

  return (
    <section>
      <h1 className="text-xl font-bold">Certifications</h1>
      {certificates.map((certificate) => 
        <Certificate key={certificate.id || certificate.title} name={certificate.title} id={certificate.id || undefined} url={certificate.url} year={certificate.year}/>
      )}
    </section>
  );
}

export default Certification
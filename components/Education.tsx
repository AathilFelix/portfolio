import EduDetails from './ui/EduDetails';

const Education = () => {
  return (
    <section>
      <h1 className="text-xl font-bold">Education</h1>
      <EduDetails
        name="R.M.D Engineering College"
        year="2024 - 2028"
        dept="Bachelor of Technology - B.Tech, Artificial Intelligence and Machine Learning"
        logosrc="/rmd_logo.png"
        url='https://rmd.ac.in'
      />
    </section>
  );
}

export default Education
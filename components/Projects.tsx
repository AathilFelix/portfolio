import React from "react";
import Project from "@/components/ui/Project";

const projectlist = [
  {
    title: "My Portfolio",
    description:
      "Personal portfolio website build with Next.js and Tailwind CSS",
    tags: ["Next.js", "React", "Tailwind"],
    link: "https://aathil.com",
    github: "https://github.com/AathilFelix/portfolio",
  },
  {
    title: "AI Prompt toolkit",
    description:
      "AI Prompt Engineering Toolkit build for both web and as an Executable to Craft expert level prompts and to improve AI outputs efficiently.",
    tags: ["Python", "Prompt Engineering", "Tailwind"],
    github: "https://github.com/AathilFelix/prompt-toolkit",
  },
  {
    title: "Study AI Bot",
    description:
      "AI powered educational chatbot with PDF integration, math rendering, and guided learning approach. Built with Flask and Hack Club AI.",
    tags: ["Python", "LLM", "API", "Tailwind"],
    github: "https://github.com/AathilFelix/study-ai-bot",
  },
  {
    title: "Telegram Weather Bot",
    description:
      "A Telegram bot that provides real-time weather updates. It fetches the latest weather information based on user input and responds directly in the chat.",
    tags: ["Python", "Telegram Bot API", "OpenWeatherMap"],
    github: "https://github.com/AathilFelix/telegram-weather-bot",
  },
];

const Projects = () => {
  return (
    <section>
      <h1 className="text-xl font-bold">Featured Projects</h1>
      {projectlist.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          tags={project.tags}
          link={project.link}
          github={project.github}
        />
      ))}
    </section>
  );
};

export default Projects;

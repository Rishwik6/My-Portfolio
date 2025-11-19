import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "TiDiuM – Test Data Management Platform",
      description:
        "Enterprise platform for managing test data with lazy loading optimization and API caching strategies. Improved page load performance by 40% through efficient data management.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Enigma AI – Website Testing Platform",
      description:
        "React-based automated testing interface with Shadow DOM support for comprehensive web application testing. Features intelligent test generation and detailed reporting.",
      tech: ["React", "TypeScript", "Playwright", "Shadow DOM", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "PEP Internal Portal",
      description:
        "Comprehensive employee management system handling HR operations, payroll processing, and employee records. Streamlined workflows for 500+ employees.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "Bootstrap"],
      liveUrl: "#",
    },
    {
      title: "Employee Management Dashboard",
      description:
        "Modern dashboard application for employee data management with Redux state management and AWS EC2 deployment. Features real-time updates and analytics.",
      tech: ["React", "Node.js", "Express.js", "Redux Toolkit", "AWS EC2"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 gradient-text px-4">
            Projects
          </h1>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 md:mb-8" />
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Here are some of my recent projects showcasing my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

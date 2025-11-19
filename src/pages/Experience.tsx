import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Prolifics",
      role: "Trainee Software Engineer",
      period: "April 2025 – Present",
      description:
        "Working on full-stack enterprise applications using Node.js, Express.js and React. Contributing to microservices architecture and implementing RESTful APIs. Collaborating with cross-functional teams in Agile environment.",
      achievements: [
        "Developed reusable React components reducing development time by 30%",
        "Implemented API caching strategies improving response times by 45%",
        "Mentored junior developers in React best practices",
      ],
    },
    {
      company: "Freelance",
      role: "React Developer",
      period: "March 2023 – April 2025",
      description:
        "Delivered 10+ client web applications with modern React ecosystem and Tailwind CSS. Specialized in creating responsive, performant, and accessible user interfaces.",
      achievements: [
        "Built e-commerce platforms handling 1000+ daily transactions",
        "Implemented SEO optimizations improving search rankings by 50%",
        "Achieved 95+ Lighthouse scores across all projects",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 gradient-text px-4">
            Experience
          </h1>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 md:mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-6 md:p-8 rounded-lg hover:glow-border transition-all duration-300 relative"
            >
              <div className="hidden md:block absolute left-0 top-8 w-1 h-20 bg-gradient-to-b from-primary to-accent -ml-4 rounded-full" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-primary">
                      {exp.company}
                    </h2>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{exp.role}</h3>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-accent">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

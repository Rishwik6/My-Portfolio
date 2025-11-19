import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Layers } from "lucide-react";

const About = () => {
  const skills = {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    "Backend": ["Node.js", "Express.js", "REST APIs", "GraphQL", "Microservices"],
    "Database": ["MongoDB", "PostgreSQL", "Redis", "SQL Server"],
    "Tools": ["Git", "AWS EC2", "Docker", "Agile/Scrum"],
  };

  const skillIcons: Record<string, any> = {
    "Frontend": Globe,
    "Backend": Layers,
    "Database": Database,
    "Tools": Code2,
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-3xl font-heading font-bold mb-4 text-primary">
                Full Stack Developer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Results-driven Full Stack Developer with 2+ years of experience in building
                responsive web applications using React, Node.js, and Express.js.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Skilled in creating scalable, efficient, and user-centric solutions with strong
                collaboration and Agile practices. I'm passionate about clean code, modern design
                patterns, and delivering exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently working at Prolifics as a Trainee Software Engineer, contributing to
                full-stack enterprise applications and continuously learning new technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {Object.entries(skills).map(([category, items], index) => {
              const Icon = skillIcons[category];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-card p-6 rounded-lg hover:glow-border transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

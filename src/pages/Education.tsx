import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 gradient-text">
            Education
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-lg hover:glow-border transition-all duration-300"
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-heading font-bold mb-2 text-primary">
                  Bachelor of Technology
                </h2>
                <h3 className="text-xl font-semibold mb-2">
                  Electronics and Communication Engineering
                </h3>
                <p className="text-muted-foreground mb-2">
                  Krishna University College of Engineering and Technology
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Graduated: 2022</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-accent" />
                <h4 className="font-semibold text-lg">Relevant Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Data Structures & Algorithms</Badge>
                <Badge variant="secondary">Database Management Systems</Badge>
                <Badge variant="secondary">Object-Oriented Programming</Badge>
                <Badge variant="secondary">Web Technologies</Badge>
                <Badge variant="secondary">Software Engineering</Badge>
                <Badge variant="secondary">Computer Networks</Badge>
              </div>
            </div>

            <div className="border-t border-border pt-6 mt-6">
              <h4 className="font-semibold text-lg mb-3">Academic Highlights</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  <span>Completed final year project on IoT-based monitoring systems</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  <span>Active participant in coding competitions and hackathons</span>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  <span>Member of university tech club and open-source community</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;

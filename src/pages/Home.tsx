import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero3D from "@/components/Hero3D";
import ParticleBackground from "@/components/ParticleBackground";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-8 md:py-0 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-accent" />
            <span className="text-accent font-body text-xs md:text-sm uppercase tracking-wider">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text glow-text">Rishwik Jujjuvarapu</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-muted-foreground font-body leading-relaxed"
          >
            I build scalable web applications using{" "}
            <span className="text-primary font-semibold">React</span>,{" "}
            <span className="text-primary font-semibold">Node.js</span>, and{" "}
            <span className="text-primary font-semibold">Express.js</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2"
          >
            <Button size="lg" asChild className="glow-border w-full sm:w-auto">
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <a href="/Rishwik-Resume.pdf" download="Rishwik Resume.pdf">
                <Code className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[300px] sm:h-[400px] lg:h-[500px] relative order-first lg:order-last"
        >
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
          <Hero3D />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

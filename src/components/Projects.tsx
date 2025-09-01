import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Image } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "G7 Intake Platform",
      description: "A full-stack student intake and evaluation platform",
      longDescription:
        "Developed a full-stack intake platform for A@SV to facilitate onboarding of G7 students. Implemented application forms, applicant filtering, and review workflows that integrated LeetCode and Codeforces profiles for candidate evaluation and acceptance. Built with a mobile-first responsive design and optimized performance for smooth user experience.",
      image: "/img/G7-intake.png",
      category: "fullstack",
      tech: ["React", "Next.js", "TailwindCSS", "Node.js", "MongoDB"],
      github: "https://github.com/firo1919/A2SV-Starter-Project-G68",
      demo: "https://a2-sv-starter-project-g68.vercel.app/",
    },

    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates",
      longDescription:
        "Developed a collaborative task management application with real-time synchronization, drag-and-drop functionality, team collaboration features, and progress tracking. Used Socket.io for real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      category: "frontend",
      tech: ["React", "TypeScript", "Socket.io", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://a2-sv-starter-project-g68.vercel.app/",
    },
    {
      id: 3,
      title: "Smart Traffic Dashboard",
      description:
        "Interactive dashboard for smart traffic management and analytics",
      longDescription:
        "Created an interactive smart traffic dashboard with complex data visualizations, real-time image processing, and customizable widgets. Features include chart interactions, data filtering, and export capabilities.",
      image: "/img/dashboard.png",
      category: "frontend",
      tech: ["React", "D3.js", "Python", "NExt", "firebase"],
      github: "https://github.com/annah11/smart-traffic-main",
      demo: "https://smartraffic.netlify.app",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication",
      longDescription:
        "Developed a secure mobile banking application with biometric authentication, transaction history, bill payments, and account management. Implemented end-to-end encryption and fraud detection.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      category: "mobile",
      tech: ["React Native", "Node.js", "PostgreSQL", "JWT", "Biometric API"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "mobile", label: "Mobile" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className="px-6 py-2"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <p className="text-muted-foreground">
                          {project.longDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          <Button asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

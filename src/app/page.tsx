"use client";
import { useState, useEffect } from "react";
import type { SVGProps, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Container,
  Code2,
  Layers,
  GitMerge,
  Server,
  Linkedin,
  Github,
  Mail,
  Instagram,
  ArrowRight,
} from "lucide-react";

// LeetCode Icon (unchanged)
const LeetCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.406L.648 12.269a1.374 1.374 0 0 0 0 1.943l11.874 11.868a1.374 1.374 0 0 0 1.943 0l11.874-11.868a1.374 1.374 0 0 0 0-1.943L14.444.406a1.374 1.374 0 0 0-.961-.406zM18.42 15.355h-1.637v-1.228h-3.834v1.228h-1.637V8.645h1.637v1.228h3.834V8.645h1.637v6.71zm-5.471-2.035v-1.228h-3.834v1.228h3.834z"></path>
  </svg>
);

// ✨ NEW: Reusable Animated Border Wrapper Component
const AnimatedBorderWrapper = ({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) => {
  return (
    <div
      className={`
        relative rounded-lg p-[2px]
        bg-[conic-gradient(from_var(--angle),theme(colors.slate.900),theme(colors.sky.400)_20%,theme(colors.slate.900)_35%)]
        animate-rotate
        ${className}
      `}
    >
      <div className={`rounded-[6px] w-full h-full ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};


export default function HomePage() {
  const words = ["average", "basic", "normal", "mediocre", "ordinary", "amateur", "so-so", "common"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [words.length]);

  // Data (skills, projects, socials) remains unchanged...
  const skills = [
    { name: "AWS", icon: <Cloud className="h-8 w-8 text-blue-400" /> },
    { name: "GCP", icon: <Server className="h-8 w-8 text-blue-400" /> },
    { name: "Azure", icon: <Cloud className="h-8 w-8 text-blue-400" /> },
    { name: "Kubernetes", icon: <Container className="h-8 w-8 text-blue-400" /> },
    { name: "Python", icon: <Code2 className="h-8 w-8 text-blue-400" /> },
    { name: "Go (Golang)", icon: <Code2 className="h-8 w-8 text-blue-400" /> },
    { name: "Terraform", icon: <Layers className="h-8 w-8 text-blue-400" /> },
    { name: "ArgoCD", icon: <GitMerge className="h-8 w-8 text-blue-400" /> },
  ];
  const projects = [
    {
      title: "awsx",
      description: "Stuck in a network jam? awsx slices through connectivity issues by checking the reachability.",
      link: "https://github.com/itzrahulyadav/awsx",
      tag: "Networking",
    },
    {
      title: "Hack The Net",
      description: "A tool that provides public information about domains and IP addresses for reconnaissance.",
      link: "https://hack-the-net-412486075231.asia-south1.run.app",
      tag: "Security",
    },
    {
      title: "More Coming Soon",
      description: "I’m always building. Follow my GitHub for the latest tools and projects. Some repos may be private.",
      link: "https://github.com/itzrahulyadav",
      tag: "In Development",
    },
  ];
  const socials = [
    { name: "LinkedIn", icon: <Linkedin className="h-6 w-6 text-gray-300" />, url: "https://www.linkedin.com/in/rahul-yadav-2a4b3b199/" },
    { name: "GitHub", icon: <Github className="h-6 w-6 text-gray-300" />, url: "https://github.com/itzrahulyadav/" },
    { name: "Email", icon: <Mail className="h-6 w-6 text-gray-300" />, url: "mailto:rahulkyadav9691@gmail.com" },
    { name: "Instagram", icon: <Instagram className="h-6 w-6 text-gray-300" />, url: "https://www.instagram.com/_rxhxlx_" },
    { name: "LeetCode", icon: <LeetCodeIcon className="h-6 w-6 text-gray-300" />, url: "https://leetcode.com/itzrahulyadav" },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section with Border */}
      <section className="min-h-screen relative flex flex-col justify-center text-center p-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-blue-900 opacity-90"></div>
        {/* ✨ REPLACED BORDER DIV WITH WRAPPER */}
        <AnimatedBorderWrapper
          className="relative z-10 mx-auto max-w-4xl"
          innerClassName="bg-black/80 backdrop-blur-sm p-6"
        >
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-4 animate-fade-in-up">
            Not your{" "}
            <span
              className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300"
            >
              {words[currentWordIndex]}
            </span>
            <br />
            software engineer.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-300">
            Evolving my craft from DevOps and cloud architecture into the broader discipline of building resilient,
            scalable systems.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="bg-gray-800 hover:bg-gray-700 text-white border border-blue-500">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              <a href="#connect">Get In Touch</a>
            </Button>
          </div>
        </AnimatedBorderWrapper>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-gray-900 p-4">
         {/* ✨ REPLACED BORDER DIV WITH WRAPPER */}
        <AnimatedBorderWrapper
          className="max-w-4xl mx-auto animate-fade-in-up"
          innerClassName="bg-gray-900 p-6 text-center"
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I’m a DevOps engineer who loves untangling tricky Kubernetes problems and making stubborn networking issues
            behave. I enjoy designing scalable, resilient systems with the help of AWS, Azure, GCP, and a good dose of
            distributed systems know-how. I mix serverless tech with Go to build fast, concurrent apps — crafting
            solutions that are as reliable as they are efficient.
          </p>
          <Button className="mt-6 bg-gray-800 hover:bg-gray-700 text-white border border-blue-500" size="lg">
            Learn More
          </Button>
        </AnimatedBorderWrapper>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 bg-black p-4">
        {/* ✨ REPLACED BORDER DIV WITH WRAPPER */}
        <AnimatedBorderWrapper
          className="max-w-5xl mx-auto"
          innerClassName="bg-black p-6 text-center"
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4 animate-fade-in-up">Technologies I Work With</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            The tools and technologies I use to architect and build robust solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <Card
                key={skill.name}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-500 transition-colors duration-300 flex flex-col items-center justify-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 100 + 300}ms` }}
              >
                <CardContent className="p-0 flex flex-col items-center justify-center gap-4">
                  {skill.icon}
                  <p className="font-semibold text-center">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button className="mt-6 bg-gray-800 hover:bg-gray-700 text-white border border-blue-500" size="lg">
            Try Now
          </Button>
        </AnimatedBorderWrapper>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32 bg-gray-900 p-4">
        {/* ✨ REPLACED BORDER DIV WITH WRAPPER */}
        <AnimatedBorderWrapper
          className="max-w-7xl mx-auto"
          innerClassName="bg-gray-900 p-6 text-center"
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4 animate-fade-in-up">My Projects</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            A selection of projects where I've engineered solutions to challenging problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {projects.map((project, i) => (
              <a
                href={project.link}
                key={project.title}
                target="_blank"
                rel="noopener noreferrer"
                className="group block animate-fade-in-up"
                style={{ animationDelay: `${i * 150 + 300}ms` }}
              >
                <Card className="h-full flex flex-col bg-gray-800/50 border-gray-700 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-bold text-xl">{project.title}</CardTitle>
                      <Badge variant="secondary">{project.tag}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <div className="text-sm font-semibold text-blue-500 flex items-center gap-2">
                      Check it out <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </a>
            ))}
          </div>
          <Button className="mt-6 bg-gray-800 hover:bg-gray-700 text-white border border-blue-500" size="lg">
            View All
          </Button>
        </AnimatedBorderWrapper>
      </section>

      {/* Connect Section */}
      <footer id="connect" className="py-20 lg:py-32 border-t border-gray-700 bg-black p-4">
        {/* ✨ REPLACED BORDER DIV WITH WRAPPER */}
        <AnimatedBorderWrapper
          className="max-w-4xl mx-auto animate-fade-in-up"
          innerClassName="bg-black p-6 text-center"
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Ready to Connect?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build something awesome together. Reach out via email or connect with me on social media.
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-12">© {new Date().getFullYear()} Rahul Yadav. All Rights Reserved.</p>
        </AnimatedBorderWrapper>
      </footer>
    </div>
  );
}

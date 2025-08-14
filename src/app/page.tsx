
"use client";

import { useState, useEffect } from "react";
import type { SVGProps } from "react";
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

const LeetCodeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.406L.648 12.269a1.374 1.374 0 0 0 0 1.943l11.874 11.868a1.374 1.374 0 0 0 1.943 0l11.874-11.868a1.374 1.374 0 0 0 0-1.943L14.444.406a1.374 1.374 0 0 0-.961-.406zM18.42 15.355h-1.637v-1.228h-3.834v1.228h-1.637V8.645h1.637v1.228h3.834V8.645h1.637v6.71zm-5.471-2.035v-1.228h-3.834v1.228h3.834z"></path>
    </svg>
);

export default function HomePage() {
  const words = ['average', 'basic', 'normal', 'mediocre', 'ordinary', 'amateur', 'so-so', 'common'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [words.length]);
  
  const skills = [
      { name: 'AWS', icon: <Cloud className="h-8 w-8 text-primary" /> },
      { name: 'GCP', icon: <Server className="h-8 w-8 text-primary" /> },
      { name: 'Azure', icon: <Cloud className="h-8 w-8 text-primary" /> },
      { name: 'Kubernetes', icon: <Container className="h-8 w-8 text-primary" /> },
      { name: 'Python', icon: <Code2 className="h-8 w-8 text-primary" /> },
      { name: 'Go (Golang)', icon: <Code2 className="h-8 w-8 text-primary" /> },
      { name: 'Terraform', icon: <Layers className="h-8 w-8 text-primary" /> },
      { name: 'ArgoCD', icon: <GitMerge className="h-8 w-8 text-primary" /> },
  ];

  const projects = [
      {
          title: 'awsx',
          description: 'Stuck in a network jam? awsx slices through connectivity issues by checking the reachability.',
          link: 'https://github.com/itzrahulyadav/awsx',
          tag: 'Networking',
      },
      {
          title: 'Hack The Net',
          description: 'A tool that provides public information about domains and IP addresses for reconnaissance.',
          link: 'https://hack-the-net-412486075231.asia-south1.run.app',
          tag: 'Security',
      },
      {
          title: 'More Coming Soon',
          description: 'I\'m always building. Follow my GitHub for the latest tools and projects. Some repos may be private.',
          link: 'https://github.com/itzrahulyadav',
          tag: 'In Development',
      },
  ];

  const socials = [
      { name: 'LinkedIn', icon: <Linkedin className="h-6 w-6" />, url: 'https://www.linkedin.com/in/rahul-yadav-2a4b3b199/' },
      { name: 'GitHub', icon: <Github className="h-6 w-6" />, url: 'https://github.com/itzrahulyadav/' },
      { name: 'Email', icon: <Mail className="h-6 w-6" />, url: 'mailto:rahulkyadav9691@gmail.com' },
      { name: 'Instagram', icon: <Instagram className="h-6 w-6" />, url: 'https://www.instagram.com/_rxhxlx_'},
      { name: 'LeetCode', icon: <LeetCodeIcon className="h-6 w-6" />, url: 'https://leetcode.com/itzrahulyadav' },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <main className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center text-center">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 animate-fade-in-up">
              Not your{' '}
              <span className="relative inline-block text-primary transition-all duration-300">
                {words[currentWordIndex]}
              </span>
              <br />
              systems engineer.
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-300">
              Evolving my craft from DevOps and cloud architecture into the broader discipline of building resilient, scalable systems.
            </p>
            <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-600">
              <Button asChild size="lg">
                  <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                  <a href="#connect">Get In Touch</a>
              </Button>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  I’m a DevOps engineer who loves untangling tricky Kubernetes problems and making stubborn networking issues behave. I enjoy designing scalable, resilient systems with the help of AWS, Azure, GCP, and a good dose of distributed systems know-how. I mix serverless tech with Go to build fast, concurrent apps — crafting solutions that are as reliable as they are efficient.
              </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Technologies I Work With</h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                The tools and technologies I use to architect and build robust solutions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                  <Card key={skill.name} className="bg-card/50 border-border hover:border-primary transition-colors duration-300 flex flex-col items-center justify-center p-6 animate-fade-in-up" style={{animationDelay: `${i * 100 + 300}ms`}}>
                      <CardContent className="p-0 flex flex-col items-center justify-center gap-4">
                          {skill.icon}
                          <p className="font-semibold text-center">{skill.name}</p>
                      </CardContent>
                  </Card>
                ))}
              </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 lg:py-32">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">My Projects</h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                    A selection of projects where I've engineered solutions to challenging problems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {projects.map((project, i) => (
                        <a href={project.link} key={project.title} target="_blank" rel="noopener noreferrer" className="group block animate-fade-in-up" style={{animationDelay: `${i * 150 + 300}ms`}}>
                            <Card className="h-full flex flex-col bg-card/50 border-border hover:border-primary hover:-translate-y-1 transition-all duration-300">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                      <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                                      <Badge variant="secondary">{project.tag}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription>{project.description}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-sm font-semibold text-primary flex items-center gap-2">
                                        Check it out <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>

        {/* Connect Section */}
        <footer id="connect" className="py-20 lg:py-32 border-t border-border">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's build something awesome together. Reach out via email or connect with me on social media.
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              {socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-muted-foreground hover:text-primary transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
             <p className="text-sm text-muted-foreground mt-12">© {new Date().getFullYear()} Rahul Yadav. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

    
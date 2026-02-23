"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Filter } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { categories, portfolioProjects } from "@/data/portfolio";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Developer Portfolio</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">MERN Stack Showcase</h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              A curated collection of full-stack projects demonstrating technical expertise, creative problem-solving, and a passion for crafting quality software.
            </p>
          </div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-background">
        <div className="container-wide">
          <div
            className={cn(
              "flex flex-wrap items-center gap-3 mb-12 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Filter size={20} className="text-muted-foreground" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "group bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50 transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 p-6">
                    <a href={project.github} className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-lg text-primary-foreground text-sm font-medium hover:bg-primary-foreground/30 transition-colors">
                      <Github size={16} /> View Code
                    </a>
                    <a href={project.demo} className="flex items-center gap-2 px-4 py-2 bg-accent rounded-lg text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-3 mb-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">Problem</span>
                      <p className="text-sm text-foreground/80 mt-1">{project.problem}</p>
                    </div>
                    <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">Solution</span>
                      <p className="text-sm text-foreground/80 mt-1">{project.solution}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Key Challenges</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.challenges.map((challenge) => (
                        <span key={challenge} className="text-xs text-muted-foreground">• {challenge}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-subtle">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Interested in collaborating or have a project in mind? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <a href="mailto:hello@wmsols.com">Get in Touch</a>
            </Button>
            <Button variant="default" size="lg" asChild>
              <a href="#">
                <Github size={18} className="mr-2" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

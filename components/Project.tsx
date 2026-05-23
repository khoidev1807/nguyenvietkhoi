"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { TImageUrlVariants } from "./ui/Badge";
import ProjectCard from "./ui/ProjectCard";

type TProject = {
  title: string;
  imageUrl: string;
  demoUrl: string;
  projectUrl: string;
  duration: string;
  type: string;
  description: string;
  stacks: {
    frontend: TImageUrlVariants[`variant`][];
    backend: TImageUrlVariants[`variant`][];
    database: TImageUrlVariants[`variant`][];
  };
};

const projects: TProject[] = [
];

interface ProjectProps {
  className?: string;
}

const Project: React.FC<ProjectProps> = ({ className, ...props }) => {
  return (
    <Card className={cn("bg-white shadow-md", className)}>
      <CardHeader>
        <CardTitle>Pet Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-8">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                type={project.type}
                title={project.title}
                imageUrl={project.imageUrl}
                demoUrl={project.demoUrl}
                projectUrl={project.projectUrl}
                duration={project.duration}
                stacks={project.stacks}
                description={project.description}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;

"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import FullSizeBtn from "./ui/FullSizeBtn";
import useExpandSkills from "@/hooks/useExpandSkills";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Aws from "../public/assets/skills/aws.png";
import Azure from "../public/assets/skills/azure.png";
import Gcp from "../public/assets/skills/gcp.png";
import Github from "../public/assets/skills/github.png";
import Python from "../public/assets/skills/python.png";
import Linux from "../public/assets/skills/linux.png";
import Windows from "../public/assets/skills/windows.png";
import Kubernetes from "../public/assets/skills/kubernetes.png";
import Helm from "../public/assets/skills/helm.png";
import Docker from "../public/assets/skills/docker.png";
import Ansible from "../public/assets/skills/ansible.png";
import Terraform from "../public/assets/skills/terraform.png";
import Prometheus from "../public/assets/skills/prometheus.png";
import Grafana from "../public/assets/skills/grafana.png";

interface SKillsProps {
  className?: string;
}

const skills = [
  {
    skill: "AWS",
    imageUrl:Aws,
    url:"https://aws.amazon.com"
  },
  {
    skill: "Azure",
    imageUrl:Azure,
    url:"https://azure.microsoft.com/en-us"
  },
  {
    skill: "GCP",
    imageUrl:Gcp,
    url:"https://cloud.google.com"
  },
  {
    skill: "Linux",
    imageUrl:Linux,
    url:"https://www.linux.org/"
  },
  {
    skill: "Windows",
    imageUrl:Windows,
    url:"https://www.microsoft.com/en-us/windows"
  },
  {
    skill: "Docker",
    imageUrl:Docker,
    url:"https://www.docker.com/"
  },
  {
    skill: "Kubernetes",
    imageUrl:Kubernetes,
    url:"https://kubernetes.io/"
  },
  {
    skill: "Helm",
    imageUrl:Helm,
    url:"https://helm.sh/"
  },
  {
    skill: "Terraform",
    imageUrl:Terraform,
    url:"https://www.terraform.io/"
  },
  {
    skill: "Ansible",
    imageUrl:Ansible,
    url:"https://www.ansible.com/"
  },
  {
    skill: "Prometheus",
    imageUrl:Prometheus,
    url:"https://prometheus.io/"
  },
  {
    skill: "Grafana",
    imageUrl:Grafana,
    url:"https://grafana.com/"
  },
  {
    skill: "Python",
    imageUrl: Python,
    url: `https://docs.python.org/3/`,
  },
  { skill: "GitHub", imageUrl: Github, url: `https://github.com/` },
];

const Skills: React.FC<SKillsProps> = ({ className }) => {
  const expandSkillsModal = useExpandSkills();

  return (
    <Card className={cn("bg-white shadow-md", className)}>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-skill  gap-10">
            {skills.map((skill, index) => {
              return (
                <HoverCard openDelay={100} closeDelay={100} key={index}>
                  <HoverCardTrigger asChild>
                    <Link href={skill.url}  target="_blank">
                      <Image
                        className="rounded-sm col-span-1 border-solid cursor-pointer hover:opacity-[80%]"
                        src={skill.imageUrl}
                        alt={skill.skill}
                        height={50}
                        width={50}
                      />
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit px-2 py-1">
                    <h4 className="text-sm font-semibold dark:text-white text-[12px]">
                      @{skill.skill}
                    </h4>
                  </HoverCardContent>
                </HoverCard>
              );
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <FullSizeBtn onClick={expandSkillsModal.onOpen}>More</FullSizeBtn>
      </CardFooter>
    </Card>
  );
};

export default Skills;

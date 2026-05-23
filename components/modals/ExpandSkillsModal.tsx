"use client";

import React from "react";
import Modal from "./Modal";
import useExpandSkills from "@/hooks/useExpandSkills";
import Badge from "../ui/Badge";
import { TImageUrlVariants } from "../ui/Badge";

type TExtandSkill = {
  title: string;
  skills: ({ name: string } & TImageUrlVariants)[];
};

const extandSkills: TExtandSkill[] = [
  {
    title: "Cloud Platforms",
    skills: [
      {
        name: "Aws",
        variant: "aws",
      },
      {
        name: "Azure",
        variant: "azure",
      },
      {
        name: "GCP",
        variant: "gcp",
      }
    ],
  },
  {
    title: "Coding Languages and Scripting Languages",
    skills: [
      {
        name: "Python",
        variant: "python",
      },
      {
        name: "Bash",
        variant: "bash",
      }
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      {
        name: "Linux",
        variant: "linux",
      },
      {
        name: "Windows",
        variant: "windows",
      },
    ],
  },
  {
    title: "Containerization and Orchestration Technologies",
    skills: [
      {
        name: "Docker",
        variant: "docker",
      },
      {
        name: "Kubernetes",
        variant: "kubernetes",
      },
      {
        name: "Helm",
        variant: "helm",  
      },
    ],
  },
{
    title: "Configuration Management ",
    skills: [
      {
        name: "Ansible",
        variant: "ansible",
      },
    ],
  },
  {
    title: "Infrastructure as Code (IaC) Tools",
    skills: [
      {
        name: "Terraform",
        variant: "terraform",
      },
    ],
  },
  {
    title: "Monitoring and Observability Tools",
    skills: [
      {
        name: "Prometheus",
        variant: "prometheus",
      },
      {
        name: "Grafana",
        variant: "grafana",
      },
    ],
  },
  {
    title: "Version control",
    skills: [{ name: "Git", variant: "git" }],
  },
];

const ExpandSkillsModal = () => {
  const expandSkills = useExpandSkills();

  return (
    <Modal isOpen={expandSkills.isOpen} onClose={expandSkills.onClose}>
      <div className="flex flex-col gap-4">
        {extandSkills.map((extandSkill, index) => {
          return (
            <div className="" key={index}>
              <h4 className=" text-[14px] font-bold">{extandSkill.title}</h4>
              <div className="flex gap-2">
                {extandSkill.skills.map((skill, index) => {
                  return (
                    <Badge
                      key={index}
                      variant={skill.variant}
                      className="w-[30px] h-[30px] "
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default ExpandSkillsModal;

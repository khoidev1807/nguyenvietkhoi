"use client";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import Accenture from "../../public/assets/journey/accenture.png";
import KMS from "../../public/assets/journey/kms.png";
import Ueh from "../../public/assets/journey/ueh.png";
import Git from "../../public/assets/skills/git.png";
import Github from "../../public/assets/skills/github.png";
import Python from "../../public/assets/skills/python.png";
import Linux from "../../public/assets/skills/linux.png";
import Windows from "../../public/assets/skills/windows.png";
import Kubernetes from "../../public/assets/skills/kubernetes.png";
import Helm from "../../public/assets/skills/helm.png";
import Docker from "../../public/assets/skills/docker.png";
import Ansible from "../../public/assets/skills/ansible.png";
import Terraform from "../../public/assets/skills/terraform.png";
import Prometheus from "../../public/assets/skills/prometheus.png";
import Grafana from "../../public/assets/skills/grafana.png";
import Azure from "../../public/assets/skills/azure.png";
import Bash from "../../public/assets/skills/bash.png";
import Aws from "../../public/assets/skills/aws.png";
import GCP from "../../public/assets/skills/gcp.png";
export type TImageUrlVariants = {
  variant:
    | "github"
    | "git"
    | "ueh"
    | "accenture"
    | "kms"
    | "azure"
    | "python"
    | "linux"
    | "windows"
    | "docker"
    | "kubernetes"
    | "helm"
    | "ansible"
    | "terraform"
    | "prometheus"
    | "grafana"
    | "bash"
    | "aws"
    | "gcp"

};

export interface BadgeProps extends TImageUrlVariants {
  className?: string;
}

const variantList: Record<
  BadgeProps["variant"],
  { imageUrl: StaticImageData; url: string }
> = {
  kms: {
    imageUrl: KMS,
    url: `https://kms-technology.com`,
  },
  accenture: {
    imageUrl: Accenture,
    url: `https://www.accenture.com`,
  },

  github: {
    imageUrl: Github,
    url: "https://github.com/",
  },
  git: {
    imageUrl: Git,
    url: "https://git-scm.com/",
  },
  ueh: {
    imageUrl: Ueh,
    url: "https://www.ueh.edu.vn/",
  },
  azure: {
    imageUrl: Azure,
    url:"https://azure.microsoft.com/en-us"
  },
  python: {
    imageUrl: Python,
    url: `https://docs.python.org/3/`,
  },
  linux: {
    imageUrl: Linux,
    url: `https://www.linux.org/`,
  },
  windows: {
    imageUrl: Windows,
    url: `https://www.microsoft.com/en-us/windows`,
  },
  docker: {
    imageUrl: Docker, 
    url: `https://www.docker.com/`,
  },
  kubernetes: {
    imageUrl: Kubernetes,
    url: `https://kubernetes.io/`,
  },
  helm: {
    imageUrl: Helm,
    url: `https://helm.sh/`,
  },
  ansible: {
    imageUrl: Ansible,
    url: `https://www.ansible.com/`,
  },
  terraform: {
    imageUrl: Terraform,
    url: `https://www.terraform.io/`,
  },
  prometheus: {
    imageUrl: Prometheus,
    url: `https://prometheus.io/`,
  }, grafana: {
    imageUrl: Grafana,
    url: `https://grafana.com/`,
  },
  bash: {
    imageUrl: Bash,
    url: `https://www.gnu.org/software/bash/`,
  },
  aws: {
    imageUrl: Aws,
    url: `https://aws.amazon.com/`,
  },
  gcp: {
    imageUrl: GCP,
    url: `https://cloud.google.com/`,
  }
};

const Badge: React.FC<BadgeProps> = ({ variant, className, ...props }) => {
  return (
    <Link
      href={variantList[`${variant}`].url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        " cursor-pointer overflow-hidden rounded-[50%]  relative ",
        className
      )}
    >
      <Image
        src={variantList[`${variant}`].imageUrl}
        alt="image"
        style={{ objectFit: "contain" }}
        fill
        className="absolute hover:opacity-50 bg-neutral-200"
      />
    </Link>
  );
};

export default Badge;

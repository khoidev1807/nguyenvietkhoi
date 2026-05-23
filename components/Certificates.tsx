"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import CertificateCard from "./ui/CertificateCard";
import cka from "../public/assets/certificates/cka.png"
import tf_a from "../public/assets/certificates/tf_a.png"
import gcp_ace from "../public/assets/certificates/gcp_ace.png"
import aws_cp from "../public/assets/certificates/aws_cp.png"
import { StaticImageData } from "next/image";

type TCertificate = {
  certName: string;
  time: string;
  issuer: string;
  certImageURL: StaticImageData;
  certUrl:string;

};

const certificates: TCertificate[] = [
  {
    certName:"CKA: Certified Kubernetes Administrator",
    time:"Apr 2026",
    issuer:"The Linux Foundation",
    certImageURL:cka,
    certUrl:"https://www.credly.com/badges/56322ec0-dc29-4f9f-9645-2c364d5fc25c/linked_in_profile"
  },
  {
    certName:"HASHICORP TERRAFORM ASSOCIATE",
    time:"Jul 2025",
    issuer:"HashiCorp",
    certImageURL:tf_a,
    certUrl:"https://www.credly.com/badges/4cb29aed-a0f6-4308-bb3e-0b9e3a8d56f4/linked_in_profile"
  },
  {
    certName:"Associate Cloud Engineer Certification",
    time:"Jul 2025",
    issuer:"Google",
    certImageURL:gcp_ace,
    certUrl:"https://www.credly.com/badges/b22924f2-7d5f-4ecb-9a75-3a24c3bd13c5/linked_in_profile"
  },
  {
    certName:"AWS Certified Cloud Practitioner",
    time:"Feb 2025",
    issuer:"AWS",
    certImageURL:aws_cp,
    certUrl:"https://cp.certmetrics.com/amazon/en/public/verify/credential"
  },
];

interface CertificatesProps {
  className?: string;
}

const Certificates: React.FC<CertificatesProps> = ({ className, ...props }) => {
  return (
    <Card className={cn("bg-white shadow-md", className)}>
      <CardHeader>
        <CardTitle>Certificates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-4">
          {certificates.map((certificate, index) => {
            return (
              <CertificateCard
                key={index}
                certImageURL={certificate.certImageURL}
                certName={certificate.certName}
                certUrl={certificate.certUrl}
                time={certificate.time}
                issuer={certificate.issuer}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Certificates;

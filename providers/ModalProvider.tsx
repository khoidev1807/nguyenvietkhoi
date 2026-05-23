"use client";

import { useEffect, useState } from "react";

import ExpandSkillsModal from "@/components/modals/ExpandSkillsModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ExpandSkillsModal />
    </>
  );
};

export default ModalProvider;

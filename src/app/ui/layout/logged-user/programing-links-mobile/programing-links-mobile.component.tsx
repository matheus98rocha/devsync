"use client";
import React, { useState } from "react";
import ProgramingIcons from "../programing-links/programing-icons/programing-icons.component";
import HamburguerMenu from "@/app/ui/components/hamburguer-menu/hamburguer-menu.component";

function ProgramingLinksMobile() {
  const [showIcons, setShowIcons] = useState(false);
  return (
    <div className="absolute top-4 left-3 h-[30%] flex flex-col items-center justify-start">
      <HamburguerMenu
        isOpen={showIcons}
        setIsOpen={() => setShowIcons(!showIcons)}
      />
      {showIcons && <ProgramingIcons />}
    </div>
  );
}

export default ProgramingLinksMobile;

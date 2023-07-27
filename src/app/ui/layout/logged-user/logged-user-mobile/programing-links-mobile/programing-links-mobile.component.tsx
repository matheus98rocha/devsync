"use client";
import React, { useState } from "react";
import HamburguerMenu from "@/app/ui/components/hamburguer-menu/hamburguer-menu.component";
import ProgramingIcons from "../../logger-user-desktop/programing-links/programing-icons/programing-icons.component";
import { useElementsContext } from "@/context/elements.context";

function ProgramingLinksMobile() {
  const { isExpandedIconsMobile, toggleIsExpandedIconsMobile } =
    useElementsContext();
  return (
    <div className="absolute top-4 left-3 h-[30%] flex flex-col items-center justify-start">
      <HamburguerMenu
        isOpen={isExpandedIconsMobile}
        setIsOpen={() => toggleIsExpandedIconsMobile()}
      />
      {isExpandedIconsMobile && <ProgramingIcons />}
    </div>
  );
}

export default ProgramingLinksMobile;

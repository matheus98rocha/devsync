import React from "react";
import HamburguerMenu from "@/app/components/hamburguer-menu/hamburguer-menu.component";
import { useElementsContext } from "@/context/elements.context";
import ProgramingIcons from "./programing-icons/programing-icons.component";

function ProgramingLinks({ isOnMobile }: { isOnMobile: boolean }) {
  const { isExpandedIconsMobile, toggleIsExpandedIconsMobile } = useElementsContext();
  return (
    <>
      {
        isOnMobile ?
          <div className="absolute top-4 left-3 h-[30%] flex flex-col items-center justify-start z-10">
            <HamburguerMenu
              isOpen={isExpandedIconsMobile}
              setIsOpen={() => toggleIsExpandedIconsMobile()}
            />
            {isExpandedIconsMobile && <ProgramingIcons />}
          </div>
          :
          <div
            className="
      fixed
      right-0
      w-24
      h-screen
      bg-background
      shadow-md
      overflow-y-hidden
      "
          >
            <ProgramingIcons />
          </div>
      }
    </>
  );
}

export default ProgramingLinks;
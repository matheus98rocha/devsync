import React from "react";
import ProgramingIcons from "./programing-icons/programing-icons.component";

function ProgramingLinks({ showModal }: { showModal: boolean }) {
  return (
    <div
      className={`
      fixed
      right-0
      w-40
      h-screen
      bg-background
      shadow-md
      overflow-y-hidden
      ${showModal ? "-z-10" : ""}`}
    >
      <ProgramingIcons />
    </div>
  );
}

export default ProgramingLinks;

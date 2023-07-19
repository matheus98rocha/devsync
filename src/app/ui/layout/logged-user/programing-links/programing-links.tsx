import React from "react";
import NewsItem from "./news-item/news-item.component";
import ProgramingIcons from "./programing-icons/programing-icons.component";

function ProgramingLinks({ showModal }: { showModal: boolean }) {
  const [isExpandedSidebar, setIsExpandedSidebar] = React.useState(false);
  return (
    <div
      className={`
      fixed
      right-0
      ${isExpandedSidebar ? "w-72" : "w-40"}
      h-screen
      bg-background
      shadow-md
      overflow-y-hidden
      ${showModal ? "-z-10" : ""}`}
    >
      {isExpandedSidebar ? (
        <NewsItem handleBackToLink={() => setIsExpandedSidebar(false)} />
      ) : (
        <ProgramingIcons handleSetLanguage={() => setIsExpandedSidebar(true)} />
      )}
    </div>
  );
}

export default ProgramingLinks;

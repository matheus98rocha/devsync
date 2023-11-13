"use client";
import { ReactElement, createContext, useContext, useState } from "react";

type ElementsContextState = {
  text: string;
  handleText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isOpenSidebar: boolean;
  toggleIsOpenSidebar: () => void;
  isExpandedIconsMobile: boolean;
  toggleIsExpandedIconsMobile: () => void;
  isOpenDropdownMenuMobile: boolean;
  toggleIsOpenDropdownMenuMobile: () => void;
};

type ElementsContextProps = {
  children: ReactElement;
};

const ElementsContext = createContext<ElementsContextState | undefined>(
  undefined
);

// Componente de Provedor do Contexto
const ThemeProvider = ({ children }: ElementsContextProps) => {
  const [text, setText] = useState("");
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const [isExpandedIconsMobile, setIsExpandedIconsMobile] = useState(false);
  const [isOpenDropdownMenuMobile, setIsOpenDropdownMenuMobile] =
    useState(false);

  const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => setText(event.target.value);

  const toggleIsOpenSidebar = () => {
    setIsOpenSidebar((prevIsOpenSidebar) => !prevIsOpenSidebar);
  };

  const toggleIsExpandedIconsMobile = () => {
    setIsExpandedIconsMobile(
      (prevIsExpandedIconsMobile) => !prevIsExpandedIconsMobile
    );
  };

  const toggleIsOpenDropdownMenuMobile = () => {
    setIsOpenDropdownMenuMobile((prevStateDropdown) => !prevStateDropdown);
  };

  const contextValue: ElementsContextState = {
    text,
    handleText,
    isOpenSidebar,
    toggleIsOpenSidebar,
    isExpandedIconsMobile,
    toggleIsExpandedIconsMobile,
    isOpenDropdownMenuMobile,
    toggleIsOpenDropdownMenuMobile,
  };

  return (
    <ElementsContext.Provider value={contextValue}>
      {children}
    </ElementsContext.Provider>
  );
};

const useElementsContext = (): ElementsContextState => {
  const context = useContext(ElementsContext);
  if (!context) {
    throw new Error(
      "useElementsContext deve ser usado dentro de um ThemeProvider"
    );
  }
  return context;
};

export { ThemeProvider, useElementsContext };

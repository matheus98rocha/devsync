"use client";
import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
} from "react";

type ElementsContextState = {
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
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const [isExpandedIconsMobile, setIsExpandedIconsMobile] = useState(false);
  const [isOpenDropdownMenuMobile, setIsOpenDropdownMenuMobile] =
    useState(false);

  const toggleIsOpenSidebar = React.useCallback(() => {
    setIsOpenSidebar((prevIsOpenSidebar) => !prevIsOpenSidebar);
  }, []);

  const toggleIsExpandedIconsMobile = React.useCallback(() => {
    setIsExpandedIconsMobile(
      (prevIsExpandedIconsMobile) => !prevIsExpandedIconsMobile
    );
  }, []);

  const toggleIsOpenDropdownMenuMobile = React.useCallback(() => {
    setIsOpenDropdownMenuMobile((prevStateDropdown) => !prevStateDropdown);
  }, []);

  const contextValue: ElementsContextState = {
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

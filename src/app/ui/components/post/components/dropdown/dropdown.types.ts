import React from "react";

export interface DropdownProps {
    handleDeleteModal: (deleteModal: boolean) => void,
    options: Array<{ icon: React.ReactNode, label: string, isClicked: (handleDeleteModal: (deleteModal: boolean) => void) => void }>,
};
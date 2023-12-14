import React from "react";

export interface DropdownProps {
    openDeletePostModal: () => void,
    options: Array<{ icon: React.ReactNode, label: string }>,
};
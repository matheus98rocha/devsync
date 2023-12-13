import React from "react";

export interface DropdownProps {
    checkPostOptions: () => void,
    options: Array<{ icon: React.ReactNode, label: string }>,
};
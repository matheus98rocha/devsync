import React from 'react';
import { SideBarIconsProps } from './sidebar-icons.types';
import { BsNewspaper } from 'react-icons/bs';

const SideBarIcons = ({ handleShowNews }: SideBarIconsProps) => (
    <div className="fixed flex items-center justify-center flex-col right-0 top-0 h-screen w-12 bg-background shadow-md">
        <BsNewspaper className="cursor-pointer" onClick={() => handleShowNews(true)} />
    </div>
);

export default SideBarIcons;
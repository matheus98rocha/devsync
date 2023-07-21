import React from 'react';
import { CollaboratorsCardProps } from './collaborators-card.types';

const CollaboratorsCard = ({ user, avatar, keyValue }: CollaboratorsCardProps) => (
    <a
        href={`https://github.com/${user}`}
        target="_blank"
        className="flex justify-center items-center flex-col bg-white shadow-md rounded-lg p-4 w-52 cursor-pointer"
        key={keyValue}
    >
        <img
            alt={user}
            src={avatar}
            className="w-24 h-24 rounded-full mb-2"
        />
        <h2 className="text-xl font-semibold">{user}</h2>
        {/* text-blue-500 hover:text-blue-700 duration-300 */}
    </a>
);

export default CollaboratorsCard;
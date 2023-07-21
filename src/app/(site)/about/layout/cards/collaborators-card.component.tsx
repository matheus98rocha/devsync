import React from 'react';
import { CollaboratorsCardProps } from './collaborators-card.types';

const CollaboratorsCard = ({ user, avatar, keyValue }: CollaboratorsCardProps) => (
    <div
        key={keyValue}
        className="bg-white shadow-md rounded-lg p-4 w-52"
    >
        <a href={`https://github.com/${user}`} target="_blank" className="flex justify-center items-center flex-col">
            <img
                alt={user}
                src={avatar}
                className="w-24 h-24 rounded-full mb-2"
            />
            <h2 className="text-xl font-semibold">{user}</h2>
        </a>
    </div>
);

export default CollaboratorsCard;

import React from 'react';
import { DevTeamCardsProps } from './devTeamCards.types';

const DevTeamCards = ({ username, avatar, keyValue }: DevTeamCardsProps) => (
    <div key={keyValue}>
        <a href={`https://github.com/${username}`} target='_blank'>
            <img alt={username} src={avatar} width="260" height="260" />
            <h2>{username}</h2>
        </a>
    </div>
);

export default DevTeamCards;
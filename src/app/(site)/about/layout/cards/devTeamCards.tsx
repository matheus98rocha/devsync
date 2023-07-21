import React from 'react';
import { DevTeamCardsProps } from './devTeamCards.types';

const DevTeamCards = ({ user, avatar, keyValue }: DevTeamCardsProps) => (
    <div key={keyValue}>
        <a href={`https://github.com/${user}`} target='_blank'>
            <img alt={user} src={avatar} width="260" height="260" />
            <h2>{user}</h2>
        </a>
    </div>
);

export default DevTeamCards;
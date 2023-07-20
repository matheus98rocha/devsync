'use client';
import React from 'react';
import LoaggedUser from '@/app/ui/layout/logged-user/logged-user';
import fetchContributorsData from './fetchContributorsData';
import DevTeamCards from './layout/cards/devTeamCards';
import { devTeam } from './mock/devTeam';

function About() {
  const contributorsData = fetchContributorsData(devTeam);
  return (
    <LoaggedUser>
      <div
        className="
          min-h-screen
          w-3/6
          shadow-md
          bg-background
          flex
          flex-col
          items-center
          justify-center
          overflow-x-hidden
        "
      >
        <h1>sobre</h1>
        <div className='flex'>
          {contributorsData.map((user, index) => <DevTeamCards keyValue={index} username={user.user} avatar={user.avatar} />)}
        </div>
      </div>
    </LoaggedUser>
  );
}

export default About;
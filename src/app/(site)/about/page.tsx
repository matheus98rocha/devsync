'use client';
import React from 'react';
import LoaggedUser from '@/app/ui/layout/logged-user/logged-user';
import fetchContributorsData, { Contributor } from './fetchContributorsData';
import DevTeamCards from './layout/cards/devTeamCards';
import { devTeam } from './mock/devTeam';

function About() {
  const { contributorsData, isLoading } = fetchContributorsData(devTeam);
  if (isLoading) return <div>Loading...</div>;
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
          {contributorsData.map((user: Contributor, index: number) => <DevTeamCards keyValue={index} user={user.user} avatar={user.avatar} />)}
        </div>
      </div>
    </LoaggedUser>
  );
};

export default About;
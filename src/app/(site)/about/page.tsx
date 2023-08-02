'use client';
import React, { useState, useEffect } from 'react';
import LoaggedUser from '@/app/ui/layout/logged-user/logged-user';
import projectCollaborators from './utils/collaborators';
import CollaboratorsCard from './layout/cards/collaborators-card.component';
import { collaboratorsTeam } from './mock/collaborators.mock';
import { CollaboratorsTypes } from './utils/collaborators.types';
import Loading from '@/app/ui/components/loading/loading.component';
import TextTypingAnimation from './components/TextTypingAnimation';

function About() {
  const { collaborators, isLoading } = projectCollaborators(collaboratorsTeam);
  if (isLoading) return <div className="h-screen w-screen flex items-center justify-center"><Loading /></div>
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
          gap-10
          px-24
          items-center
          justify-center
          overflow-x-hidden
        "
      >
        <>
          <TextTypingAnimation />
        </>

        <div className='flex justify-center items-center flex-col gap-16'>
          <h2 className='text-lg'>Equipe de desenvolvedores</h2>
          <div className='flex flex-row gap-16'>
            {collaborators.map((user: CollaboratorsTypes, index: number) => <CollaboratorsCard key={index} keyValue={index} user={user.user} avatar={user.avatar} />)}
          </div>
        </div>
      </div>
    </LoaggedUser>
  );
};

export default About;
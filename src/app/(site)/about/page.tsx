'use client';
import React from 'react';
import LoaggedUser from '@/app/ui/layout/logged-user/logged-user';
import projectCollaborators from './utils/collaborators';
import CollaboratorsCard from './layout/cards/collaborators-card.component';
import { collaboratorsTeam } from './mock/collaborators.mock';
import { CollaboratorsTypes } from './utils/collaborators.types';
import Loading from '@/app/ui/components/loading/loading.component';

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
        <h1>Equipe de desenvolvimento</h1>
        <h2>Quem somos ?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo non sed deserunt sapiente aspernatur vel reprehenderit nostrum expedita. Facere ducimus consectetur soluta ipsam ratione optio deserunt facilis, aspernatur assumenda.</p>
        <h2>Sobre o que é o projeto ?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo non sed deserunt sapiente aspernatur vel reprehenderit nostrum expedita. Facere ducimus consectetur soluta ipsam ratione optio deserunt facilis, aspernatur assumenda.</p>
        <h2>Nossas contas do GitHub</h2>
        <div className='flex flex-row gap-16'>
          {collaborators.map((user: CollaboratorsTypes, index: number) => <CollaboratorsCard keyValue={index} user={user.user} avatar={user.avatar} />)}
        </div>
      </div>
    </LoaggedUser>
  );
};

export default About;
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
        <h2>Sobre o que é o projeto ?</h2>
        <p>Nós somos uma equipe de desenvolvedores apaixonados por tecnologia e inovação. Estamos criando uma plataforma que busca simplificar e aprimorar funções já existentes e similares ao GitHub.</p>
        <p>Nosso objetivo é criar um ambiente onde programadores de todos os níveis possam se conectar, compartilhar conhecimentos e melhorar seus projetos.</p>
        <p>Queremos ser uma comunidade acolhedora, onde cada pessoa se sinta apoiada e encontre oportunidades para aprender e crescer. Acreditamos que colaboração e troca de ideias são fundamentais para o sucesso na programação.</p>
        <p>A missão do projeto é de poder capacitar a comunidade de desenvolvedores e criar um ambiente que inspire criatividade, aprendizado e inovação.</p>
        <div className='flex justify-center items-center flex-col gap-16'>
          <h2>Equipe de desenvolvedores</h2>
          <div className='flex flex-row gap-16'>
            {collaborators.map((user: CollaboratorsTypes, index: number) => <CollaboratorsCard keyValue={index} user={user.user} avatar={user.avatar} />)}
          </div>
        </div>
      </div>
    </LoaggedUser>
  );
};

export default About;
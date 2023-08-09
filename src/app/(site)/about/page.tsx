'use client';
import React, { useState, useEffect } from 'react';
import LoaggedUser from '@/app/ui/layout/logged-user/logged-user';
import Loading from '@/app/ui/components/loading/loading.component';
import { aboutMock } from './mock/about.mock';
import AboutCard from './layout/card/about-card.component';

function About() {
  const words = [
    'Nós somos uma equipe de desenvolvedores apaixonados por tecnologia e inovação. Estamos criando uma plataforma que busca simplificar e aprimorar funções já existentes e similares ao GitHub.',
    'Nosso objetivo é criar um ambiente onde programadores de todos os níveis possam se conectar, compartilhar conhecimentos e melhorar seus projetos.',
  ];
  return (
    <LoaggedUser>
      <div
        className="
        flex 
        flex-col 
        gap-16 
        h-screen 
        animate-[fadeIn_0.3s_ease-in-out_forwards]
          w-3/6
          shadow-md
          bg-background
          px-24
          overflow-x-hidden
        ">
        <div className='flex flex-col gap-6'>
          <h1 className="text-center text-3xl mb-4 font-black text-gray">A PLATAFORMA PARA TODOS OS DESENVOLVEDORES</h1>
          {words.map(word => <p className='text-center'>{word}</p>)}
        </div>
        <div className="flex flex-col w-full gap-10">
          <h2 className='uppercase font-black text-gray'>objetivos do projeto</h2>
          <AboutCard card={aboutMock} />
        </div>
      </div>
    </LoaggedUser>
  );
};

export default About;
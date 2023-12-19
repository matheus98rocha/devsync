"use client";
import React from "react";
import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import { aboutMock, cardTexts, mobileMock } from "./mock/about.mock";
import AboutCard from "./components/card/about/about-card.component";
import Loading from '@/app/ui/components/loading/loading.component'
import { Subtitle } from "./components/subtitle/subtitle.component";
import SectionCard from "./components/card/section/section-card.component";

function About() {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
  }, []);

  if (!isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  }
  return (
    <LoaggedUser currentPage="about">
      <div
        className="
        flex 
        flex-col
        items-center
        justify-start
        w-screen
        shadow-md
        overflow-scroll
        overflow-x-hidden
        lg:w-3/6
        h-full
        bg-background
        gap-16 
        py-10
        animate-[fadeIn_0.3s_ease-in-out_forwards]
        "
      >
        <div className="flex flex-col gap-6 p-7">
          <h1 className="text-center text-3xl mb-4 font-black text-primary">
            A PLATAFORMA PARA TODOS OS DESENVOLVEDORES
          </h1>
          {cardTexts.map((text, index) => <p key={index} className="text-center">{text}</p>)}
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-6">
          <Subtitle text="objetivos do projeto" />
          <SectionCard mock={aboutMock} />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-6 py-16">
          <Subtitle text="expandindo para versão mobile" />
          <SectionCard mock={mobileMock} />
        </div>
      </div>
    </LoaggedUser>
  );
}

export default About;
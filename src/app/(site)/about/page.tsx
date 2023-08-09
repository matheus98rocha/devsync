"use client";
import React from "react";
import LoaggedUser from "@/app/ui/layout/logged-user/logged-user";
import { aboutMock, cardTexts } from "./mock/about.mock";
import AboutCard from "./layout/card/about-card.component";

function About() {
  return (
    <LoaggedUser>
      <div
        className="
        flex 
        flex-col
        items-center
        justify-start
        gap-16 
        h-full
        animate-[fadeIn_0.3s_ease-in-out_forwards]
        w-3/6
        shadow-md
        bg-background
        overflow-scroll
        overflow-x-hidden
        "
      >
        <div className="flex flex-col gap-6 p-7">
          <h1 className="text-center text-3xl mb-4 font-black text-gray">
            A PLATAFORMA PARA TODOS OS DESENVOLVEDORES
          </h1>
          {cardTexts.map((text, index) => (
            <p key={index} className="text-center">
              {text}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-6">
          <h2 className="uppercase font-black text-gray">
            objetivos do projeto
          </h2>
          <div className="grid grid-cols-2 items-center justify-start gap-10">
            <AboutCard
              image="https://www.integrasist.com.br/dados/editor/image/WhatsApp_Image_2021_04_05_at_21.13.13.jpeg"
              title="De desenvolvedores para desenvolvedores"
              text="Nossa equipe é formada por desenvolvedores apaixonados que vivem e respiram código. Estamos imersos no mundo da programação e entendemos as necessidades e desejos dos nossos colegas desenvolvedores.         Nossa plataforma é um espaço onde capacita a comunidade de desenvolvedores a criar um ambiente que inspire criatividade, aprendizado e inovação."
            />
            <AboutCard
              image="https://www.integrasist.com.br/dados/editor/image/WhatsApp_Image_2021_04_05_at_21.13.13.jpeg"
              title="De desenvolvedores para desenvolvedores"
              text="Nossa equipe é formada por desenvolvedores apaixonados que vivem e respiram código. Estamos imersos no mundo da programação e entendemos as necessidades e desejos dos nossos colegas desenvolvedores.         Nossa plataforma é um espaço onde capacita a comunidade de desenvolvedores a criar um ambiente que inspire criatividade, aprendizado e inovação."
            />
            <AboutCard
              image="https://www.integrasist.com.br/dados/editor/image/WhatsApp_Image_2021_04_05_at_21.13.13.jpeg"
              title="De desenvolvedores para desenvolvedores"
              text="Nossa equipe é formada por desenvolvedores apaixonados que vivem e respiram código. Estamos imersos no mundo da programação e entendemos as necessidades e desejos dos nossos colegas desenvolvedores.         Nossa plataforma é um espaço onde capacita a comunidade de desenvolvedores a criar um ambiente que inspire criatividade, aprendizado e inovação."
            />
          </div>
        </div>
      </div>
    </LoaggedUser>
  );
}

export default About;

import React, { useEffect, useRef, useState } from 'react';
import typingAndDeleteAnimation from '../utils/typingAndDeleteAnimation';
import useTypingAnimation from '../utils/typingTextAnimation';

const TextTypingAnimation: React.FC = () => {
    const words = [
        'Nós somos uma equipe de desenvolvedores apaixonados por tecnologia e inovação. Estamos criando uma plataforma que busca simplificar e aprimorar funções já existentes e similares ao GitHub.',
        'Nosso objetivo é criar um ambiente onde programadores de todos os níveis possam se conectar, compartilhar conhecimentos e melhorar seus projetos.',
        'Queremos ser uma comunidade acolhedora, onde cada pessoa se sinta apoiada e encontre oportunidades para aprender e crescer. Acreditamos que colaboração e troca de ideias são fundamentais para o sucesso na programação.',
        'A missão do projeto é de poder capacitar a comunidade de desenvolvedores e criar um ambiente que inspire criatividade, aprendizado e inovação.',
    ];
    const [currentWord, setCurrentWord] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const typingSpeed: number = 50;
    const pauseDuration: number = 2500;

    // Refs to store mutable variables
    const isDeletingRef = useRef<boolean>(false);
    const currentCharacterIndexRef = useRef<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const shouldContinueRef = useRef<boolean>(true); // New ref for the shouldContinue flag

    const title = useTypingAnimation('Sobre o Projeto!', typingSpeed, pauseDuration);
    const [showCurrentWord, setShowCurrentWord] = useState<boolean>(false);

    useEffect(() => {
        const currentWordTimer = setTimeout(() => {
            setShowCurrentWord(true);
        }, 1000);

        return () => {
            clearTimeout(currentWordTimer);
            shouldContinueRef.current = false; // Stop the animation on unmount
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    useEffect(() => {
        if (showCurrentWord) {
            shouldContinueRef.current = true; // Start the animation when showCurrentWord becomes true
            timerRef.current = setTimeout(
                () =>
                    typingAndDeleteAnimation(
                        currentIndex,
                        words,
                        setCurrentWord,
                        setCurrentIndex,
                        typingSpeed,
                        pauseDuration,
                        isDeletingRef,
                        currentCharacterIndexRef,
                        timerRef
                    ),
                typingSpeed
            );
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [currentIndex, showCurrentWord]);

    return (
        <>
            <h1>{title}</h1>
            <div className='h-24'>
                {showCurrentWord && <p>{currentWord}</p>}
            </div>
        </>
    );
};

export default TextTypingAnimation;
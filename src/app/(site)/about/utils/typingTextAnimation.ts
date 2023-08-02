import { useEffect, useState } from 'react';

const useTypingAnimation = (text: string, typingSpeed: number, pauseDuration: number) => {
    const [currentWord, setCurrentWord] = useState('');

    useEffect(() => {
        let isMounted = true;
        let currentCharacterIndex = 0;

        const typeText = () => {
            if (isMounted && currentCharacterIndex <= text.length) {
                setCurrentWord((prev) => text.substr(0, currentCharacterIndex));
                currentCharacterIndex++;
                setTimeout(typeText, typingSpeed);
            }
        };

        setCurrentWord('');
        currentCharacterIndex = 0;
        typeText();

        return () => {
            isMounted = false;
        };
    }, [text, typingSpeed]);

    return currentWord;
};

export default useTypingAnimation;
import React from 'react';

const typingAndDeleteAnimation = (
    currentIndex: number,
    words: string[],
    setCurrentWord: React.Dispatch<React.SetStateAction<string>>,
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
    typingSpeed: number,
    pauseDuration: number,
    isDeletingRef: React.MutableRefObject<boolean>,
    currentCharacterIndexRef: React.MutableRefObject<number>,
    timerRef: React.MutableRefObject<NodeJS.Timeout | null>
) => {
    const currentText = words[currentIndex];
    const textLength = currentText.length;

    if (isDeletingRef.current) {
        setCurrentWord((prev) => prev.substr(0, currentCharacterIndexRef.current));
        currentCharacterIndexRef.current--;

        if (currentCharacterIndexRef.current === 0) {
            // Move to the next word after deleting is complete
            isDeletingRef.current = false;
            setCurrentIndex((prev) => (prev + 1) % words.length);
            timerRef.current = setTimeout(() => typingAndDeleteAnimation(currentIndex, words, setCurrentWord, setCurrentIndex, typingSpeed, pauseDuration, isDeletingRef, currentCharacterIndexRef, timerRef), pauseDuration);
            return;
        }
    } else {
        setCurrentWord((prev) => currentText.substr(0, currentCharacterIndexRef.current + 1));
        currentCharacterIndexRef.current++;

        if (currentCharacterIndexRef.current === textLength) {
            // Pause after typing a word
            isDeletingRef.current = true;
            timerRef.current = setTimeout(() => typingAndDeleteAnimation(currentIndex, words, setCurrentWord, setCurrentIndex, typingSpeed, pauseDuration, isDeletingRef, currentCharacterIndexRef, timerRef), pauseDuration);
            return;
        }
    }

    const typingDelay = isDeletingRef.current ? typingSpeed / 3 : typingSpeed;
    timerRef.current = setTimeout(() => typingAndDeleteAnimation(currentIndex, words, setCurrentWord, setCurrentIndex, typingSpeed, pauseDuration, isDeletingRef, currentCharacterIndexRef, timerRef), typingDelay);
};

export default typingAndDeleteAnimation;
export const CharactersLimit = ({ text, charactersLimit }: { text: string, charactersLimit: number }) => {
    const remainingCharacters = text.length;
    const characterCounter = remainingCharacters > charactersLimit ? 'text-red-500' : 'text-black';

    return <div className={`text-sm ${characterCounter}`}>{remainingCharacters} / {charactersLimit}</div>
};
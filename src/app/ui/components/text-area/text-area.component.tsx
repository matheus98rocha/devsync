import { TextAreaProps } from "./text-area.types";

export const TextArea = ({ text, characterLimit, handleText, placeholder }: TextAreaProps) => (
    <textarea
        placeholder={placeholder}
        value={text}
        onChange={(e) => handleText(e.target.value)}
        className={`resize-none 
        border-none 
        outline-none 
        sm:w-[40rem] 
        sm:h-[15rem] 
        w-[14rem] 
        h-[8rem] 
        ${text.length > characterLimit ? "text-red-500" : "text-black"}`}
    />
);
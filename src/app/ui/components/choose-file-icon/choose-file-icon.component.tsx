import { ChooseFileIconProps } from "./choose-file-icon.types";
import { AiFillPicture, AiOutlineClose } from 'react-icons/ai';

export const ChooseFileIcon = ({handleFileChange, selectedFile, handleSelectedFile}: ChooseFileIconProps) => (
    <div className={`flex items-center h-14 ${selectedFile ? 'w-56 sm:w-64 pr-6 gap-5 justify-between' : 'w-14 justify-center'} bg-[#f4f2ee] rounded-full cursor-pointer hover:shadow-postIcon duration-300`}>
        {/* icon */}
        <label className={`flex items-center justify-center ${!selectedFile && "w-full h-full cursor-pointer"}`}>
            <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
            />
            <div className={`text-2xl flex items-center justify-center ${selectedFile && 'pl-6'}`}><AiFillPicture /></div>
        </label>

        {/* file name */}
        <div className={`flex items-center justify-center overflow-hidden duration-300`}>
            {selectedFile &&
                <span className="max-w-[128px] text-sm whitespace-nowrap overflow-hidden text-ellipsis">{selectedFile["name"]}</span>
            }
        </div>
        {selectedFile && <div> <AiOutlineClose className={"text-[1.3em] hover:text-gray duration-300"} onClick={() => handleSelectedFile(null)} /></div>}
    </div>
);
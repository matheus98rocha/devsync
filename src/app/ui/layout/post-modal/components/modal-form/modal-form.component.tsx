import React from "react";
import { CharactersLimit } from "@/utils/characters-limit/characters-limit.component";
import { ChooseFileIcon } from "@/app/ui/components/choose-file-icon/choose-file-icon.component";
import { TextArea } from "@/app/ui/components/text-area/text-area.component";
import PostButton from "../post-button/post-button.component";
import { ModalFormProps } from "./modal-form.types";
import Loading from "@/app/ui/components/loading/loading.component";

const ModalForm = ({ text, authorId, handleText, selectedFile, handleFileChange, handleSelectedFile, handleSubmitPost, handleShowError }: ModalFormProps) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        setIsLoading(false);
    }, []);
    return (
        <>
            {/* text area */}
            <div className='flex flex-col gap-5'>
                <TextArea
                characterLimit={300}
                    placeholder="No que você está pensando?"
                    text={text}
                    handleText={handleText}
                />
                {/* characters limit per post */}
                <CharactersLimit text={text} charactersLimit={300} />
            </div>

            {/* file icon */}
            <ChooseFileIcon
                handleFileChange={handleFileChange}
                handleSelectedFile={handleSelectedFile}
                selectedFile={selectedFile}
            />

            {/* post button */}
            <React.Suspense>
                <PostButton
                    isLoading={isLoading}
                    textContent="Publicar"
                    iconContent={<Loading />}
                    handleIsLoading={setIsLoading}
                    text={text}
                    authorId={authorId}
                    handleSubmitPost={handleSubmitPost}
                    handleShowError={handleShowError}
                />
            </React.Suspense>
        </>
    )
};

export default ModalForm;
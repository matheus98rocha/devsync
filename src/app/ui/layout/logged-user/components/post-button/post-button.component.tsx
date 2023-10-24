import React from 'react';
import { GrAdd } from 'react-icons/gr';
import PrimaryButton from "../../../../components/button/primary-button.component";
import { isMobileOnly } from "mobile-device-detect";

const PostButton = ({ handlePostModalVisibility }: { handlePostModalVisibility: (postModalVisibility: boolean) => void }) => (
    <div className={`fixed right-[10%] ${isMobileOnly ? "bottom-[15%]" : "bottom-[10%]"} w-12`}>
        <PrimaryButton
            buttonContent={
                <GrAdd style={{ filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)', }} />
            }
            handleOnClick={() => handlePostModalVisibility(true)}
            isDisabled={false}
            buttonType="primary"
            borderRadius="rounded-full"
        />
    </div>
);

export default PostButton;
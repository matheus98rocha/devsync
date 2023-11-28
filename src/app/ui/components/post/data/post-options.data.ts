import React from "react";
import { FaRegTrashCan, FaFlag } from "react-icons/fa6";

export const postOptions = {
    myPostsOptions: [
        {
            label: "Deletar publicação",
            icon: React.createElement(FaRegTrashCan),
            isClicked: true,
        }
    ],
    otherPostsOptions: [
        {
            label: "Ocultar publicação",
            icon: React.createElement(FaFlag),
            isClicked: "",
        }
    ],
};
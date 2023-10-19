"use client";
import React from "react";
import type { FileWithPath } from "@uploadthing/react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { useUploadThing } from "@/utils/uploadthing";

interface UploadButtonProps {
  handleChangeBannerImage: () => void;
}

export function UploadButton({ handleChangeBannerImage }: UploadButtonProps) {
  const [files, setFiles] = React.useState<File[]>([]);
  const onDrop = React.useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { startUpload, permittedFileInfo } = useUploadThing("imageUploader", {
    onClientUploadComplete: (fileUrl) => {
      console.log(fileUrl);
      alert("uploaded successfully!");
    },
    onUploadError: () => {
      alert("error occurred while uploading");
    },
    onUploadBegin: () => {
      alert("upload has begun");
    },
  });

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileTypes ? generateClientDropzoneAccept(fileTypes) : undefined,
  });

  return (
    // <div {...getRootProps()} className="flex flex-col">
    //   <input {...getInputProps()} />
    //   <div>
    //     {files.length > 0 && (
    //       <button onClick={() => startUpload(files)}>
    //         Upload {files.length} files
    //       </button>
    //     )}
    //   </div>
    //   Drop files here!
    // </div>
    <button onClick={() => handleChangeBannerImage()}>Adicionar Banner</button>
  );
}

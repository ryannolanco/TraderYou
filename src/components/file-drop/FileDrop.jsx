import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import "./file-drop.css";

const FileDrop = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
      console.log(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="drop-zone-container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="drop-zone">
          Drag 'n' drop some files here, or click to select files
        </p>
      </div>
    </div>
  );
};

export default FileDrop;

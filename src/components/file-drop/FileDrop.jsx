import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import "./file-drop.css";
import NavBar from "../navigation/NavBar";

const FileDrop = () => {
  const [tradingFile, setTradingFile] = useState();

  const parseCSV = (csvString) => {
    const lines = csvString
      .trim()
      .split("\n")
      .filter((line) => line.trim() !== ""); // Split CSV into lines
    const headers = headerLine.split(",").map((header) => header.trim()); // Extract headers

    return lines.map((line) => {
      const values = line.split(",").map((value) => value.trim());
      return headers.reduce((acc, header, index) => {
        acc[header] = values[index]; // Create object with key-value pairs
        return acc;
      }, {});
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      if (file.type !== "text/csv") {
        console.error("Only CSV files are allowed.");
        return;
      }

      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const text = reader.result;
        const parsedData = parseCSV(text);
        parsedData.forEach((item) => console.log(item.AMOUNT));
        setTradingFile(parsedData);
      };
      reader.readAsText(file);
      console.log(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <NavBar />
      <div className="file-drop-body">
        <div className="drop-zone-container">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="drop-zone">
              Drag 'n' drop some files
              <br /> here, or click to select files
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileDrop;

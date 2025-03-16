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
      .map((line) => line.trim()) // Remove extra spaces
      .filter((line) => line !== ""); // Remove empty lines
  
    const sections = {};
    let currentSection = null;
    let headers = [];
  
    lines.forEach((line) => {
      if (line === "Cash Balance" || line === "Account Order History" || line === "Account Trade History" || line === "Profits and Losses") {
        currentSection = line;
        sections[currentSection] = []; // Initialize the section
        headers = []; // Reset headers for new section
      } else if (currentSection && headers.length === 0) {
        headers = line.split(",").map((h) => h.trim()); // Capture headers
      } else if (currentSection) {
        const values = line.split(",").map((v) => v.trim());
        const rowObject = headers.reduce((obj, header, index) => {
          obj[header] = values[index] || ""; // Assign values to headers
          return obj;
        }, {});
        sections[currentSection].push(rowObject);
      }

  
    });
  
    return sections;
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
        console.log(text)
        const parsedData = parseCSV(text);
        console.log(parsedData)
        setTradingFile(parsedData);
      };
      reader.readAsText(file);
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

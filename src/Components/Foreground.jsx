import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";

function Foreground({ darkMode }) {
  const ref = useRef(null);
  const [files, setfiles] = useState([]); //initializing state


  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    setfiles(storedFiles);
  }, []); //loading files from local storage

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0]; //access the first uploaded file
    if (uploadedFile) {
      const newFile = {
        id: Date.now(), //unique id for the file
        name: uploadedFile.name,
        size: `${(uploadedFile.size / 1024).toFixed(1)} KB`,
        content: URL.createObjectURL(uploadedFile), //Blob URL to preview the file
      };

      const updatedFiles = [...files, newFile]; //add the new file to the current list
      setfiles(updatedFiles);//update state

      localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
    }
  };

  const handleFileDelete = (id) => {
    const updatedFiles = files.filter((file) => file.id !== id);
    setfiles(updatedFiles);

    // Update local storage
    localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
  };



  
return (
  <div
    ref={ref}
    className="fixed top-0 left-0 z-[3] p-5 w-full h-full flex flex-col gap-5"
  >

    <div className="flex gap-10 flex-wrap">
      {files.map((file) => (
        <Card
          key={file.id}
          data={{
            desc: file.name,  
            filesize: file.size,
            close: true,
            tag: { isOpen: true, tagTitle: "Download", tagColor: "green" },
          }}
          onDelete={() => handleFileDelete(file.id)}
          darkMode={darkMode}
        />
      ))}
    </div>

    <label className="fixed bottom-5 right-5 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md shadow-md">
      Upload File
      <input
        type="file"
        accept=".txt,.docx"
        className="hidden"
        onChange={handleFileUpload}
      />
    </label>
  </div>
);
}

export default Foreground;

// fixed top-0 left-0 z-[3] p-5 w-full h-full

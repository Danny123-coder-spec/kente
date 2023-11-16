import React, { useState, useRef } from "react";
import waveBg from "../assets/wavebackground.svg";
import pictureIcon from "../assets/pictureIcon.svg";
import { AiOutlineClose } from "react-icons/ai";



const DragAndDropModal = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [resizable, setResizable] = useState(false);
  const resizableRef = useRef(null);

  const handleInputChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    showFile(selectedFile);
    setIsActive(true);
    setResizable(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleDragLeave = () => {
    setIsActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    showFile(droppedFile);
    setIsActive(true);
    setResizable(true);
  };

  const showFile = (selectedFile) => {
    let fileType = selectedFile.type;
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];

    if (validExtensions.includes(fileType)) {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        let fileURL = fileReader.result;
        // Handle the file display as needed (e.g., updating state or UI)
        console.log("File URL:", fileURL);
      };
      fileReader.readAsDataURL(selectedFile);
    } else {
      alert("This is not an Image File!");
      setIsActive(false);
    }
  };

  const handleButtonClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.click();

    input.addEventListener("change", (e) => {
      handleInputChange(e);
    });
  };

  const handleResizeStop = () => {
    // Handle resize stop event if needed
  };

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 ${
        isActive ? "active" : ""
      }`}
    >
      <div className="bg-white rounded-lg shadow-md w-[40%]">
        <div className="flex justify-between px-4 py-5 border-b">
          <h3 className="text-2xl font-bold font-sans">Upload Photo</h3>
          <div className="cursor-pointer">
            <AiOutlineClose onClick={onClose} size={17} />
          </div>
        </div>
        {resizable ? (
          <Resizable
            className="drag-area"
            defaultSize={{ width: 300, height: 300 }}
            minWidth={100}
            minHeight={100}
            onResizeStop={handleResizeStop}
            ref={resizableRef}
            style={{
              background: "black", // Set the background color to black
              border: "2px solid white", // Set the border color to white
            }}
          >
            <img
              src={URL.createObjectURL(file)}
              alt="Resized File"
              className="rounded w-full h-full"
            />
          </Resizable>
        ) : (
          <div
            className="drag-area border border-dashed border-[#dedeff] rounded p-8  m-6  text-sm"
            style={{ backgroundImage: `url(${waveBg})` }}
          >
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className="flex flex-col items-center justify-center gap-5"
            >
              <img src={pictureIcon} alt="picture icon" />
              <div>
                <span
                  className="underline text-[#3c41c2] cursor-pointer"
                  onClick={handleButtonClick}
                >
                  Choose a file
                </span>
                <span> or drag and drop an image here to upload</span>
              </div>

              <input type="file" onChange={handleInputChange} hidden />
            </div>
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="Uploaded File"
                className="mt-4 mx-auto rounded"
              />
            )}
          </div>
        )}
        <div className="flex justify-end gap-2 px-5 mb-5 font-semibold">
          <button
            onClick={onClose}
            className="text-sm border border-[#3c41c2] text-[#3c41c2] hover:bg-[#3c41c2] hover:text-white py-1.5 px-7 rounded cursor-pointer"
          >
            Close
          </button>
          <button className="text-sm border bg-[#3c41c2] text-white py-1.5 px-7 rounded cursor-pointer">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DragAndDropModal;

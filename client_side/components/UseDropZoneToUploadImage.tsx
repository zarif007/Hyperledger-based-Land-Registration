import React from "react";
import Dropzone from "react-dropzone";

const UseDropZoneToUploadImage = ({ handleImageUpload }: any) => {
  return (
    <Dropzone onDrop={(acceptedFiles) => handleImageUpload(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section className="my-2">
          <div {...getRootProps()}>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col rounded-sm border-dashed border-2 border-gray-700 w-full h-20 md:h-40 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col justify-center items-center pointer-none text-gray-500 text-sm md:text-lg">
                  Select or Drag NID Image
                </div>
              </label>
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default UseDropZoneToUploadImage;
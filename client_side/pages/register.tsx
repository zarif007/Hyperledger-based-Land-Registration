import React, { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import dynamic from "next/dynamic";


const projectId = process.env.NEXT_PUBLIC_IPFS_PROJECT_KEY
const projectSecretKey = process.env.NEXT_PUBLIC_IPFS_SECRET_KEY
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);


const Register = () => {

  const [uploadedImage, setUploadedImage] = useState<any>('');

  const ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
      authorization,
    },
  });



  const onSubmitHandler = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const files = form[0].files;

    if (!files || files.length === 0) {
      return alert("No files selected");
    }

    const file = files[0];
    // upload files
    const result = await ipfs.add(file);

    console.log(result)
    setUploadedImage(result.path)

    form.reset();
  };

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative min-h-screen ">
        <div className="container px-5 py-24 mx-auto my-auto pt-24">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
              Register
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-400">
                    Phone Number
                  </label>
                  <input
                    type="Phone Number"
                    id="Phone Number"
                    name="Phone Number"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-400">
                    Region
                  </label>
                  <select className="w-full p-2 bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    <option>Dhaka</option>
                    <option>Chattogram</option>
                    <option>Barishal</option>
                    <option>Khulna</option>
                    <option>Rajshahi</option>
                    <option>Rangpur</option>
                    <option>Mymensingh</option>
                    <option>Sylhet</option>
                  </select>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-400">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-400">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password2"
                    name="password"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-400">
                    NID number
                  </label>
                  <input
                    type="text"
                    id="text"
                    name="text"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              
              {ipfs ? (
                <div className="container m-2 my-6">
                  <h1>Upload NID card picture</h1>
                  <form onSubmit={onSubmitHandler} className="flex justify-between">
                    <input id="file-upload" type="file" name="file" />
                    <button className=" text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">
                      Upload image
                    </button>
                  </form>
                </div>
              ) : null}

              {
                uploadedImage && <img
                className="image m-2"
                alt="up"
                src={"https://ipfs.io/ipfs/" + uploadedImage}
              />
              }
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(Register), {ssr: false});

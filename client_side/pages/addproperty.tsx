import React, { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Navbar from "../components/Navbar";
import Link from "next/link";

const projectId = process.env.NEXT_PUBLIC_IPFS_PROJECT_KEY;
const projectSecretKey = process.env.NEXT_PUBLIC_IPFS_SECRET_KEY;
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

const AddProperty = () => {

  const [property, setProperty] = useState<any>({
    owner: "",
    ownerNid: "",
    ownerPhoneNumber: "",
    status: "Selling",
    listed_on: "",
    lat: 0,
    long: 0,
    description: ``,
    prev_owners: [],
    images: [],
    documents: [],
    isApproved: false,
    region: "Dhaka",
    propertyLocation: "",
  })

  const ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
      authorization,
    },
  });

  const uploadImageToIPFS = async (file: any, to: string) => {
    if (!file || file.length === 0) {
      return alert("No files selected");
    }
    console.log(file)
    const result = await ipfs.add(file[0]);

    if(to === 'image')
      setProperty({ ...property, images: [ ...property.images, "https://ipfs.io/ipfs/" + result.path] })
    else 
      setProperty({ ...property, documents: [ ...property.documents, "https://ipfs.io/ipfs/" + result.path] })
  }

  const handleSubmit = () => {
    const up = property;
    property.listed_on = Date.now()
    setProperty(up)
    console.log(property)
  }

  return (
    <section className="text-gray-300 bg-gray-900 body-font relative min-h-screen pb-12 ">
        <Navbar />
      <div className="container px-5 py-24 mx-auto my-auto pt-24">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-white">
            Add New property
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Owner's full Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={(e: any) => setProperty({ ...property, owner: e.target.value })}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Owner's NID
                </label>
                <input
                  type="text"
                  name="text"
                  onChange={(e: any) => setProperty({ ...property, ownerNid: e.target.value })}
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
                  onChange={(e: any) => setProperty({ ...property, ownerPhoneNumber: e.target.value })}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Region
                </label>
                <select onChange={(e: any) => setProperty({ ...property, region: e.target.value })} className="w-full p-2 bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
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

            <div className="p-2 w-3/4">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Property Location
                </label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  onChange={(e: any) => setProperty({ ...property, propertyLocation: e.target.value })}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-1/4">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Selling Status
                </label>
                <select onChange={(e: any) => setProperty({ ...property, status: e.target.value })} className="w-full p-2 bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  <option>Not selling</option>
                  <option>Selling</option>
                </select>
              </div>
            </div>

            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Property latitude
                </label>
                <input
                  type="text"
                  name="text"
                  onChange={(e: any) => setProperty({ ...property, lat: e.target.value })}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Property longitude
                </label>
                <input
                  type="text"
                  name="text"
                  onChange={(e: any) => setProperty({ ...property, long: e.target.value })}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Property Details
                </label>
                <textarea
                  name="text"
                  onChange={(e: any) => setProperty({ ...property, description: e.target.value })}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Property Images
                </label>
              </div>
            </div>

            {ipfs ? (
              <div className="container m-2 my-6 flex space-x-2">
                <input id="file-upload" type="file" name="file" onChange={(e: any) => uploadImageToIPFS(e.target.files, 'image')} />
              </div>
            ) : null}

            <div className="w-full flex flex-wrap space-x-2">
              {
                property.images.map((image: string, index: number) => {
                  return (
                    <img key={index} src={image} className="w-48"  alt="propimg" />
                  )
                })
              }
            </div>

            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-400">
                  Property Documents
                </label>
              </div>
            </div>

            {ipfs ? (
              <div className="container m-2 my-6 flex space-x-2">
                <input id="file-upload" type="file" name="file" onChange={(e: any) => uploadImageToIPFS(e.target.files, 'document')} />
              </div>
            ) : null}

            {
              property?.documents.map((document: any, index: number) => {
                return (
                  <div key={index}>
                    {
                      document && <Link target="_blank" className="text-lg font-semibold text-blue-500" href={document}>{document}</Link>
                    }
                  </div>
                )
              })
            }

            <div className="p-2 w-full">
              <button onClick={handleSubmit} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProperty;

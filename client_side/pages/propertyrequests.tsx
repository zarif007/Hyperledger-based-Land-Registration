import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import { lands } from "./../Lands";

const PropertyRequests = () => {
  return (
    <div className="text-gray-300 bg-gray-900 body-font relative min-h-screen pb-12 ">
      <Navbar />
      <div className="mx-auto max-w-7xl py-24">
        <h1 className="sm:text-3xl py-4 text-2xl font-bold title-font text-white">
          Property Addition Requests
        </h1>
        <div className="rounded bg-black p-8 border-2 border-gray-800">
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-4">
            <img
              className="w-full h-72"
              src={lands[0].images[0]}
              alt="nid pic"
            />
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11265.861250879923!2d90.433028723791!3d23.7294137983897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1679309580019!5m2!1sen!2sbd" width="90%" height="90%"   loading="lazy"></iframe>
            <div>
            <h1 className="my-8 font-bold text-2xl">Documents</h1>
        {
          lands[0].documents.map((document: any, index: number) => {
            return (
              <div key={index}>
                {
                  document.paper && <Link target="_blank" className="text-lg font-semibold text-blue-500" href={document.paper}>{document.name}</Link>
                }
              </div>
            )
          })
        }
            </div>
            </div>
            <div className="flex flex-col w-1/2 justify-between">
              <div className="">
                <p className="text-lg py-1">
                  owner: <span className="font-semibold">{lands[0].owner}</span>
                </p>
                <p className="text-lg py-1">
                  status:{" "}
                  <span className="font-semibold">{lands[0].status}</span>
                </p>
                <p className="text-lg py-1">
                  listed_on:{" "}
                  <span className="font-semibold">{lands[0].listed_on}</span>
                </p>
                <p className="text-lg py-1">
                  Region: <span className="font-semibold">Khulna</span>
                </p>
                <p className="text-lg py-1">
                  Info: <span className="font-semibold">{lands[0].description.substring(0, 150)}...</span>
                </p>
              </div>

              <div className="my-16">
                <h1 className="mb-2 font-bold text-2xl">Transfer History</h1>
                <div className="flex flex-col border-2 border-gray-700">
                  <div className="flex justify-around py-3 text-md border-b-2 rounded border-b-gray-700 font-bold">
                    <p>Owner</p>
                    <p>Transfer Date</p>
                    <p>Fraction</p>
                  </div>
                  <div className="flex justify-around py-3 text-md border-b-2 rounded border-b-gray-700 font-semibold">
                    <p>CR7</p>
                    <p>16th May, 2022</p>
                    <p>100%</p>
                  </div>
                  <div className="flex justify-around py-3 text-md border-b-2 rounded border-b-gray-700 font-semibold">
                    <p>CR7</p>
                    <p>16th May, 2022</p>
                    <p>45%</p>
                  </div>
                  <div className="flex justify-around py-3 text-md rounded border-b-gray-700 font-semibold">
                    <p>CR7</p>
                    <p>16th May, 2022</p>
                    <p>98%</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 justify-end items-end text-white">
                <button className="px-4 py-2 bg-red-600 text-md font-semibold rounded">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-green-600 text-md font-semibold rounded">
                  Proceed
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PropertyRequests;

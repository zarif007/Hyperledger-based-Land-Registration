import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const Land = () => {

  const { query: { id } } = useRouter();

  const [land, setLand] = useState<any>(null);

  const [currentImage, setCurrentImage] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-car")
      .then((res: any) => {
        res.data.map((x: any) => {
          if(x.Key === id) {
            setLand(x.Record)
            setCurrentImage(x.Record.images[0])
          }
        })
        
      });
  }, []);

  return (
    <div className="text-gray-300 bg-gray-900 body-font relative min-h-screen pb-12 ">

      <Navbar />
      <div className="mx-auto max-w-7xl">
        <div className="flex space-x-6 items-start justify-center">
          <div className="w-1/2">
            <img src={currentImage} alt="pImage" style={{ width: "700px" }} className="my-12" />
            <div className="flex space-x-2">
              {
                land?.images.map((image: string, index: number) => {
                    return (
                        <img key={index} src={image} alt="pimage" style={{ width: "100px" }} className="cursor-pointer" onClick={() => setCurrentImage(land?.images[index])} />
                    )
                })
              }
            </div>
          </div>
          <div className="w-1/2">
            <h1 className={`mb-4 font-bold text-lg ${land?.isApproved ? 'text-green-500' : 'text-red-500'}`}>
              {land?.isApproved ? 'Approved' : 'Not Approved (processing)'}
            </h1>
            <h1 className=" mb-2 font-bold text-2xl">Owner: {land?.owner}</h1>
            <h1 className="mt-4 mb-2 font-bold text-2xl">Land Info</h1>
            {
                land?.description.split('\n').map((x: string, index: number) => {
                    return (
                        <>
                            <p className="mt-4 mb-8 text-xs" key={index}>{x}</p>
                            <br />
                        </>
                    )
                })
            }
          </div>
        </div>
        
        

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="rounded w-1/2 h-full">
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
          <iframe 
              width="100%" 
              height="400px" 

              src='https://maps.google.com/maps?q=23.730967,90.431584&hl=es&z=14&amp;output=embed'
            />
        </div>
        <h1 className="my-8 font-bold text-2xl">Documents</h1>
        {
          land?.documents.map((document: any, index: number) => {
            return (
              <div key={index}>
                {
                  document.paper && <Link target="_blank" className="text-lg font-semibold text-blue-500" href={document.paper}>{document.paper}</Link>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Land;

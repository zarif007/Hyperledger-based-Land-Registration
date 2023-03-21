import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const Dashboard = () => {

  const [lands, setLands] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-car")
      .then((res: any) => setLands(res.data));
  }, []);

  return (
    <>
      {lands.map((land: any, index: number) => (
        <PropertyInfo land={land} key={index} />
      ))}
    </>
  );
};

export default Dashboard;

const PropertyInfo = ({ land }: any) => {
  const router = useRouter()
  return (
    <section className="text-gray-300 body-font relative mt-4">
      <div className="absolute inset-0 bg-gray-300 rounded">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src='https://maps.google.com/maps?q=23.730967,90.431584&hl=es&z=14&amp;output=embed'
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h1 className="text-gray-100 text-lg mb-1 font-medium title-font">
            Land Info
          </h1>
          <span className="leading-relaxed text-xs my-2 rounded p-1 font-semibold text-green-400">
            {land?.Record?.status}
          </span>
          <p className="my-2 text-xs font-semibold text-gray-300">
            Listed on: {land?.Record?.listed_on}
          </p>

          <p className="text-lg my-3 text-gray-300 mt-3">Owner: {land?.Record?.owner}</p>

          <p className="text-sm text-gray-300 mt-3">{land?.Record?.description.substring(0, 150)}</p>

          <button onClick={() => router.push(`/land/${land.Key}`)} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            More info
          </button>
        </div>
      </div>
    </section>
  );
};

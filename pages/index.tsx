import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="rounded-md bg-gray-50 p-4">
      Hello, world<div className="rounded-md bg-blue-500">blue </div>
    </div>
  );
};

export default Home;

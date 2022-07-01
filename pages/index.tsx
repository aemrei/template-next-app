import { useHello } from "hooks/useHello";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
};

const Home: NextPage<Props> = ({ title, description }) => {
  const { data, isLoading } = useHello();
  return (
    <div className="rounded-md bg-gray-50 p-4">
      {title}
      <div className="rounded-md bg-blue-500">{description}</div>
      <div>{isLoading ? "..." : <span>from async {data?.name}.</span>}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  return {
    props: {
      title: "Hello, world",
      description: "This is a description",
    },
  };
};

export default Home;

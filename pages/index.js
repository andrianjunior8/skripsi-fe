import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import { useEffect } from "react";

export default function Home() {
  const Router = useRouter();

  useEffect(() => {
    Router.push({
      pathname: "/dashboard",
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Skripsi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/SR.png" />
      </Head>
    </div>
  );
}

import React from "react";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Image from "next/image";
import Head from "next/head";
import Header4 from "./components/Header4";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO : India`s Best Online Hotel Booking Site For Sanitized Stay.
        </title>
        <link rel="icon" href="/Images/icon.png"></link>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className="my-14">
          <Image
            src={"/Images/banner1.avif"}
            className="w-full rounded-sm h-60"
            width={200}
            height={200}
          />
        </div>
        <div className=" mb-14">
          <Image
            src={"/Images/banner2.avif"}
            className="w-full rounded-sm h-40"
            width={200}
            height={200}
          />
        </div>
      </div>
      <Header4 />
      <Footer />
    </div>
  );
};

export default Home;

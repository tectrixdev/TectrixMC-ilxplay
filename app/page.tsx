"use client";
import { navItems } from "@/data";
import Head from "next/head";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Features from "@/components/Features";
import { Provider } from "@/components/src/components/ui/provider";

const Home = () => {
  return (
    <Provider>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          {/*<FloatingNav navItems={navItems} /> */}{" "}
          {/* potential fix for vercel */}
          <Hero />
          <Grid />
          {/*<Players />*/}
          <Features />
          <Approach />
          <Footer />
        </div>
      </main>
    </Provider>
  );
};

export default Home;

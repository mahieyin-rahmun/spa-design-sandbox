import { Typography, Container } from "@material-ui/core";
import Head from "next/head";
import Features from "../components/landingPage/sections/features";
import Hero from "../components/landingPage/sections/hero";
import Testimonials from "../components/landingPage/sections/testimonials";
import Pricing from "../components/landingPage/sections/pricing";
import ContactUs from "../components/landingPage/sections/contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WoodMark &tm;</title>
        <meta name="description" content="A static website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactUs />
    </div>
  );
}

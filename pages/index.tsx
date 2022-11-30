import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thomas Hellin | Full-stack Developer</title>
        <meta name="description" content="Thomas Hellin's Personnal website" />
      </Head>

      <main className="min-h-screen bg-tuna">
        <Hero />
      </main>
    </>
  );
}

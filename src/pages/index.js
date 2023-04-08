import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codeswear.com - wear the code</title>
        <meta name="description" content="Codeswear.com - wear the code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Hey this is codes wear
        <div className="mx-4">his is me</div>
        <div className="mx-4 bg-slate-400">his is me</div>
      </main>
    </>
  );
}

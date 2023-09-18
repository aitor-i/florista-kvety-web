import { Navigation } from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <body>
      <hgroup>
        <h1 className="text-8xl ">Kvety</h1>
        <h2 className="text-4xl">Florista</h2>
      </hgroup>
      <main>
        <Navigation />
        <p></p>
      </main>
    </body>
  );
}

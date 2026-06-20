import Card from "@/components/home/card";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  // Supabase'den verileri çekiyoruz
  // .order('title') ekledim ki her seferinde farklı sırayla gelmesin
  const { data: features } = await supabase.from("features").select("*").order("title");

  return (
    <>
      {/* Hero Section */}
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Starway Vision Forum
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          The global hub for tech enthusiasts, AI developers, and future leaders
        </p>

        {/* Action Buttons */}
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            href="#"
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            <p>Explore Forums</p>
          </a>
          <a
            href="#"
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          >
            <p>Join Community</p>
          </a>
        </div>
      </div>

      {/* Forum Features Grid */}
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features && features.length > 0 ? (
          features.map((feature: any) => (
            <Card
              key={feature.title} // Supabase'deki verinin benzersiz olması önemli
              title={feature.title}
              description={feature.description}
              large={!!feature.large} // Boolean'a kesin çevirdik
              demo={feature.demo || null}
            />
          ))
        ) : (
          <p className="text-center text-gray-400">Henüz özellik eklenmedi...</p>
        )}
      </div>
    </>
  );
}

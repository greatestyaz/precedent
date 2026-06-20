import Card from "@/components/home/card";

export default async function Home() {
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
        {features.map(({ title, description, large, demo }) => (
          <Card
            key={title}
            title={title}
            description={description}
            large={!!large} // Boolean'a zorladık
            demo={demo || null} // Eksik olan demo prop'unu null olarak geçtik
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Global Community",
    description: "Connect with developers, creators, and tech pioneers from all around the world. Share your vision and collaborate on next-generation projects.",
    large: true,
    demo: null,
  },
  {
    title: "Advanced Roles & Ranks",
    description: "Earn reputation, unlock unique badges, and climb the ranks from a passionate learner to an Elite Member or trusted Moderator.",
    large: false,
    demo: null,
  },
  {
    title: "Secure Verification",
    description: "Powered by reliable, industry-standard authentication systems to keep your profile, discussions, and data completely secure.",
    large: false,
    demo: null,
  },
  {
    title: "Real-time Discussions",
    description: "Engage in lighting-fast, real-time conversations across diverse categories covering Artificial Intelligence, Software Engineering, and Digital Innovation.",
    large: true,
    demo: null,
  },
];

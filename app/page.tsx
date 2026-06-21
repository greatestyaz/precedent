import { createClient } from "@/utils/supabase/server"; // Server-side client kullanımı zorunlu!
import Card from "@/components/home/card";

export default async function Home() {
  const supabase = createClient(); // Artık server context'inde çalışıyoruz
  
  // Veriyi çekiyoruz
  const { data: categories, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error("Supabase Error:", error);
  }

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

        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            href="#categories"
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
          >
            <p>Explore Forums</p>
          </a>
        </div>
      </div>

      {/* Forum Categories Grid */}
      <div id="categories" className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {categories && categories.length > 0 ? (
          categories.map((cat: any) => (
            <Card
              key={cat.id}
              title={cat.name}
              description={cat.description}
              href={`/forum/${cat.slug}`}
              // Eğer Card bileşenin ikon destekliyorsa buraya icon={cat.icon_name} ekleyebilirsin
            />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-400">
            {error ? "Bir hata oluştu, veritabanını kontrol et." : "Kategoriler yükleniyor..."}
          </p>
        )}
      </div>
    </>
  );
}

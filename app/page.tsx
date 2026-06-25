import { supabase } from "@/lib/supabase"; // Lib'den gelen hazır istemciyi kullanıyoruz
import Card from "@/components/home/card";

export default async function Home() {
  // `createClient()` yerine import ettiğimiz hazır `supabase` nesnesini kullanıyoruz
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*")
    .order("id");

  if (error) {
    console.error("Supabase Veri Çekme Hatası:", error);
  }

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em] md:text-7xl">
          Starway Vision Forum
        </h1>
        <p className="mt-6 text-center text-gray-500 md:text-xl">
          The global hub for tech enthusiasts, AI developers, and future leaders
        </p>

        <div className="mx-auto mt-6 flex items-center justify-center space-x-5">
          <a
            href="#categories"
            className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white hover:bg-white hover:text-black transition-colors"
          >
            Explore Forums
          </a>
        </div>
      </div>

      <div id="categories" className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {categories && categories.length > 0 ? (
          categories.map((cat: any) => (
            <Card
              key={cat.id}
              title={cat.name}
              description={cat.description}
              href={`/forum/${cat.slug}`}
            />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-400">
            {error ? "Veritabanı bağlantısında bir sorun oluştu." : "Kategoriler yükleniyor..."}
          </p>
        )}
      </div>
    </>
  );
}

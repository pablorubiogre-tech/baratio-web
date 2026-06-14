const brands = [
  "NATURGY",
  "ENDESA",
  "IBERDROLA",
  "REPSOL",
  "AUDAX",
  "REAZZIONA",
  "GANA",
  "NUFRI",
];

export default function Brands() {
  return (
    <section className="border-y border-[#e7ecf3] bg-[#f6f8fc] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-[#7a89a3]">
          Trabajamos con las mejores comercializadoras
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-lg font-bold tracking-wide text-[#aab4c6] transition-colors duration-300 hover:text-[#13233b] sm:text-xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

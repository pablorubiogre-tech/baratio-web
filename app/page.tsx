import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const LandingSections = dynamic(
  () => import("@/components/LandingSections"),
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <LandingSections />
      </main>
      <Footer />
    </>
  );
}

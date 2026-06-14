import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const LandingSections = dynamic(
  () => import("@/components/LandingSections"),
  { ssr: false },
);

type ConsentPageProps = {
  params: { token: string };
};

export default function ConsentPage({ params }: ConsentPageProps) {
  // TODO: Obtener nombre y teléfono reales desde el CRM usando params.token
  // e.g. GET app.baratio.es/api/consentimientos/{token}
  void params.token;

  return (
    <>
      <main>
        <Hero
          modo="consentimiento"
          nombreInicial="Juan Pérez García"
          telefonoInicial="600 123 456"
        />
        <LandingSections />
      </main>
      <Footer />
    </>
  );
}

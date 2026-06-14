import nextDynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import {
  buildNombreCompleto,
  CRM_CONSENT_API,
  type ConsentimientoData,
  resolveConsentInitialState,
} from "@/lib/consentimiento";

const LandingSections = nextDynamic(
  () => import("@/components/LandingSections"),
  { ssr: false },
);

export const dynamic = "force-dynamic";

type ConsentPageProps = {
  params: { token: string };
};

export default async function ConsentPage({ params }: ConsentPageProps) {
  const { token } = params;

  const res = await fetch(`${CRM_CONSENT_API}/${token}`, { cache: "no-store" });

  if (!res.ok) {
    return (
      <>
        <main>
          <Hero modo="consentimiento" consentInitialState="invalido" />
          <LandingSections />
        </main>
        <Footer />
      </>
    );
  }

  const data = (await res.json()) as ConsentimientoData;
  const consentInitialState = resolveConsentInitialState(data);

  return (
    <>
      <main>
        <Hero
          modo="consentimiento"
          nombreInicial={buildNombreCompleto(data)}
          telefonoInicial={data.telefono_sms}
          consentToken={token}
          consentInitialState={consentInitialState}
        />
        <LandingSections />
      </main>
      <Footer />
    </>
  );
}

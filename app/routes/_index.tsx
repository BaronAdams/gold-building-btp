import type { V2_MetaFunction } from "@remix-run/node";
import { Spinner } from "flowbite-react";
import { ClientOnly } from "remix-utils";
import HeroCarousel from "~/components/HeroCarousel";
import RoadMap from "~/components/RoadMap";
import Services from "~/components/Services";
import Team from "~/components/Team";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Gold Building BTP" },
    { name: "description", content: "Bienvenue à Gold Building BTP! Nous sommes disponibles pour tous vos services de batiments, travaux Publics, Génie Civil et architecture" }
  ];
};

export default function Index() {
  return (
    <>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ClientOnly fallback={(<div className="w-screen h-[90vh] flex justify-center items-center"><Spinner size={"xl"} color={"warning"} /></div>)}>
      {() => <>
          <HeroCarousel/>
          <Services/>
          <Team/>
          <RoadMap/>
          </>}
      </ClientOnly>
      </div>
    </>
  );
}

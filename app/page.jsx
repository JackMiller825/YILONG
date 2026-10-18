import Script from "next/script";
import { asset } from "../lib/paths";
import { Archives } from "./components/Archives";
import { Buy } from "./components/Buy";
import { Closing } from "./components/Closing";
import { Lightbox, SiteFooter, SiteHeader } from "./components/Chrome";
import { Edict } from "./components/Edict";
import { Hero } from "./components/Hero";
import { Legend } from "./components/Legend";
import { Portraits } from "./components/Portraits";

export default function Page() {
  return (
    <>
      <div className="lantern-layer" aria-hidden="true">
        <span /><span /><span /><span /><span /><span />
      </div>
      <SiteHeader />
      <main>
        <Hero />
        <Edict />
        <Legend />
        <Portraits />
        <Archives />
        <Buy />
        <Closing />
      </main>
      <SiteFooter />
      <Lightbox />
      <Script src={asset("/site.js")} strategy="afterInteractive" />
    </>
  );
}

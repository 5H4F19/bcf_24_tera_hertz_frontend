'use client'

import Footer from "@/components/sections/footer";
import Form from "@/components/sections/form";
import Hero from "@/components/sections/hero";
import Nav from "@/components/sections/nav";
import { Suggestions } from "@/components/sections/suggestions";
import MapComponent from "@/components/ui/routeVisualizer";
import { ContextProvider, useGlobalContext } from "@/context";

export default function Home() {
  return (
    <ContextProvider>
      <main className="relative flex w-full overflow-hidden bg-background min-h-screen flex-col items-center justify-between">
        <Nav />
        <div className="h-14" />
        <Hero />
        <Suggestions />
        <div className="h-44"></div>
        <Footer />
      </main>
    </ContextProvider>
  );
}

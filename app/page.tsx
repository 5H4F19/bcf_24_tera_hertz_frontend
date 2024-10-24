import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Nav from "@/components/sections/nav";

export default function Home() {
  return (
    <main className="relative flex w-full overflow-hidden bg-[#1d1d1f] min-h-screen flex-col items-center justify-between">
      <div
        style={{
          backgroundPosition: "50% 0",
          backgroundSize: "auto",
          alignItems: "end",
        }}
        className="flex flex-col align-end bg-[url('/bg.svg')] bg-repeat-x  absolute w-[100vw] h-[80vh]"
      >
        <div className="absolute bottom-0  w-full bg-gradient-to-b from-transparent to-background h-44 " />
      </div>
      <Nav />
      <div className="h-24" />
      <Hero />
      <Footer />
    </main>
  );
}

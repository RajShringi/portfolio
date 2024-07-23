import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-gray-50 h-screen overflow-auto">
      <div className="max-w-[700px] mx-auto py-6 px-4 text-stone-800 flex flex-col gap-12">
        <Navbar />
        <About />
        <Skills />
      </div>
    </main>
  );
}

import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-gray-50 h-screen overflow-auto">
      <div className="max-w-[700px] mx-auto py-6 px-4 text-stone-800 flex flex-col gap-12">
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <div className="py-6 border-t border-stone-500">
          <p>
            If you'd like to get in touch, you can reach me:{" "}
            <span className="text-stone-500 underline">
              raj24shringi@gmail.com
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}

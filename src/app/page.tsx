import About from "@/components/About";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-50 h-screen">
      <div className="max-w-[800px] mx-auto py-6 px-4 text-stone-800 flex flex-col gap-6">
        <Navbar />
      </div>
    </main>
  );
}

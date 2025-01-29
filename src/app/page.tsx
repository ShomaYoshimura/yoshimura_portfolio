import AboutMe from "@/components/AboutMe";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <div className="flex justify-center items-center h-full p-6 text-2xl md:text-4xl font-extrabold tracking-wide text-white bg-black border border-gray-800 rounded-xl shadow-md hover:bg-gray-900 transition-all duration-300">
        <br/>IT×〇〇をより身近に<br/>
      </div>
      <AboutMe />
      <Works />
    </div>
  );
}

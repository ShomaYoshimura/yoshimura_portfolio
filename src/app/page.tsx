import AboutMe from "@/components/AboutMe";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="w-full max-w-screen-lg mx-auto px-4">
      <AboutMe />
      <Works />
    </div>
  );
}

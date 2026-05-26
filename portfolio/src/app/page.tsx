import Navbar from "@/components/Navbar";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="bg-[#050816] text-white overflow-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative px-6">

        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-[120px] rounded-full top-10 left-10"></div>

        <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full bottom-10 right-10"></div>

        <div className="relative z-10 text-center">

          <div className="mb-6 inline-block border border-gray-700 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md">
            👋 Welcome to my portfolio
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="text-pink-400">
              Rament
            </span>{" "}
            <span className="text-blue-400">
              Tharu
            </span>
          </h1>

          <p className="mt-6 text-2xl text-gray-300">
            Frontend / Full Stack Developer
          </p>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Building scalable web applications
            using modern JavaScript technologies.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <button className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-xl font-semibold">
              Explore My Work
            </button>

            <button className="border border-gray-700 hover:bg-white/10 transition px-8 py-4 rounded-xl">
              Get In Touch
            </button>

          </div>

        </div>

      </section>
      {/* SKILLS */}
<section
  id="skills"
  className="py-24 px-6 max-w-6xl mx-auto"
>
  <h2 className="text-5xl font-bold mb-14 text-center">
    Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:scale-105 transition">
      React
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:scale-105 transition">
      Next.js
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:scale-105 transition">
      Tailwind CSS
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:scale-105 transition">
      PostgreSQL
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:scale-105 transition">
      Node.js
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:scale-105 transition">
      Python
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:scale-105 transition">
      Machine Learning
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:scale-105 transition">
      GitHub
    </div>

  </div>
</section>
{/* PROJECTS */}
<section
  id="projects"
  className="py-24 px-6 max-w-6xl mx-auto"
>
  <h2 className="text-5xl font-bold mb-14 text-center">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:scale-105 transition">

      <h3 className="text-3xl font-bold">
        Expense Tracker
      </h3>

      <p className="mt-4 text-gray-400">
        Full stack expense management app
        using Next.js and PostgreSQL.
      </p>

      <button className="mt-6 bg-purple-600 px-5 py-3 rounded-xl">
        View Project
      </button>

    </div>

    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:scale-105 transition">

      <h3 className="text-3xl font-bold">
        Plant Disease Detection
      </h3>

      <p className="mt-4 text-gray-400">
        Deep learning project for plant
        disease prediction using AI.
      </p>

      <button className="mt-6 bg-blue-600 px-5 py-3 rounded-xl">
        View Project
      </button>

    </div>

  </div>
</section>
{/* CONTACT */}
<section
  id="contact"
  className="py-24 px-6 text-center"
>

  <h2 className="text-5xl font-bold">
    Contact Me
  </h2>

  <p className="mt-6 text-gray-400">
    Let's build something amazing together.
  </p>

  <div className="mt-10 flex justify-center gap-5 flex-wrap">

    <a
      href="https://www.linkedin.com/in/rament-tharu-64b5573a0/"
      target="_blank"
      className="bg-blue-600 px-6 py-3 rounded-xl"
    >
      LinkedIn
    </a>

    <a
      href="https://github.com/Ramenttharu"
      target="_blank"
      className="bg-gray-800 px-6 py-3 rounded-xl"
    >
      GitHub
    </a>

    <a
      href="mailto:ramenttharu18@gmail.com"
      className="bg-purple-600 px-6 py-3 rounded-xl"
    >
      Email Me
    </a>

  </div>

</section>
{/* SCROLL TO TOP */}
<a
  href="#top"
  className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-full text-white hover:bg-purple-600 transition z-50"
>
  <FaArrowUp />
</a>
{/* FOOTER */}
<footer className="border-t border-white/10 py-8 px-6">

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

    <h1 className="text-xl font-bold text-pink-400">
      Rament Tharu
    </h1>

    <p className="text-gray-400 text-sm">
      © 2026 All rights reserved.
    </p>

    <div className="flex gap-5 text-gray-400">

      <a
        href="https://linkedin.com"
        target="_blank"
        className="hover:text-white transition"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com"
        target="_blank"
        className="hover:text-white transition"
      >
        GitHub
      </a>

      <a
        href="mailto:your@email.com"
        className="hover:text-white transition"
      >
        Email
      </a>

    </div>

  </div>

</footer>

    </div>
    
    </>
  );
}
export default function Navbar() {
  return (
    <>
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">

  <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

</div>
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <h1 className="text-2xl font-bold text-pink-400">
          RT
        </h1>

        <div className="flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#skills" className="hover:text-white">
            Skills
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

      </div>

    </nav>
    </>
  );
}
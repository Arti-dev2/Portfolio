export default function Navbar() {
  return (
    <div className="fixed w-full top-0 backdrop-blur-lg bg-white/5 border-b border-white/10 px-8 py-4 flex justify-between z-50">

      <h1 className="text-purple-400 font-bold text-lg">Arti Gumme</h1>

      <div className="flex gap-6">
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>
    </div>
  );
}
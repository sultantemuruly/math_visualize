const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-black/60 backdrop-blur-sm">
      <h1 className="text-xl font-bold text-white">Math Visualize</h1>
      <button className="bg-white px-4 py-2 rounded-lg text-sm md:text-base hover:scale-110 transition">
        Start
      </button>
    </header>
  );
};

export default Header;

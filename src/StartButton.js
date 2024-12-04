const StartButton = () => {
  return (
    <button className="relative flex items-center bg-zinc-900 border-2 border-emerald-500 rounded-lg p-4 overflow-hidden group transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
      <span className="text-sm font-medium relative z-10 text-emerald-500 group-hover:text-white transition-colors duration-300">
        Start Session
      </span>
      <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500 transition-colors duration-300 ease-in-out" />
    </button>
  );
};

export default StartButton;

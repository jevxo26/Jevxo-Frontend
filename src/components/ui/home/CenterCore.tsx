import Image from "next/image";

const CenterCore = () => {
  return (
    <div className="absolute z-40 flex items-center justify-center w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Strong Solid Backing - Hides lines completely */}
      <div className="absolute size-[200px] rounded-full bg-[#c3ceec] dark:bg-[#0B0F14] z-10" />

      {/* Your Original Backing Plate */}
      <div
        className="absolute size-[190px] rounded-full 
                bg-primary/5 z-20
                dark:bg-primary/10 
                shadow-[inset_0_0_100px_rgba(0,0,0,0.5),0_0_20px_rgba(2,8,23,0.8)] 
                dark:shadow-[inset_0_0_130px_rgba(0,0,0,0.8),0_0_30px_rgba(2,8,23,0.9)] 
                pointer-events-none"
      />

      {/* SVG Rings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
        viewBox="0 0 190 190"
      >
        <circle
          cx="95"
          cy="95"
          r="90"
          fill="none"
          stroke="#1E40AF"
          strokeWidth="3"
          strokeDasharray="10 7"
          className="origin-center animate-[spin_60s_linear_infinite]"
        />
        <circle
          cx="95"
          cy="95"
          r="77"
          fill="none"
          stroke="#1E40AF"
          strokeWidth="3"
          strokeDasharray="10 7"
          className="origin-center animate-[spin_45s_linear_infinite_reverse]"
        />
      </svg>

      {/* Your Original Glow - Unchanged */}
      <div
        className="absolute inset-6 rounded-full bg-blue-300/90 blur-[60px] 
                dark:bg-primary/30 dark:blur-2xl 
                pointer-events-none z-30"
      />

      {/* Logo */}
      <Image
        width={100}
        height={100}
        src="/images/center-logo.png"
        alt="Jevxo Core"
        className="w-[120px] h-auto relative z-40 select-none object-contain hover:scale-110 transition-transform duration-500"
      />
    </div>
  );
};

export default CenterCore;

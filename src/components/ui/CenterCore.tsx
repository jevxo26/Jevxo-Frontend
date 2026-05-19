import Image from "next/image";

const CenterCore = () => {
  return (
    <div className="absolute z-20 flex items-center justify-center w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Backing Plate */}
      <div className="absolute size-[190px] rounded-full bg-[#102247]/20 border-white/[0.03] shadow-[inset_0_0_130px_rgba(0,0,0,0.8),0_0_20px_rgba(2,8,23,0.9)] pointer-events-none" />

      {/* SVG Rings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 190 190"
      >
        <circle
          cx="95"
          cy="95"
          r="90"
          fill="none"
          stroke="rgba(27, 103, 255, 0.4)"
          strokeWidth="3"
          strokeDasharray="10 7"
          className="origin-center animate-[spin_60s_linear_infinite]"
        />
        <circle
          cx="95"
          cy="95"
          r="77"
          fill="none"
          stroke="rgba(27, 103, 255, 0.25)"
          strokeWidth="3"
          strokeDasharray="10 7"
          className="origin-center animate-[spin_40s_linear_infinite_reverse]"
        />
      </svg>

      {/* Glow */}
      <div className="absolute inset-6 rounded-full bg-primary/20 blur-xl pointer-events-none" />

      {/* Logo */}
      <Image
        width={100}
        height={100}
        src="/images/center-logo.png"
        alt="Jevxo Core"
        className="w-[120px] h-auto relative z-10 select-none object-contain hover:scale-110 transition-transform duration-500"
      />
    </div>
  );
};

export default CenterCore;

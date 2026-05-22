"use client";

import { PiggyBank, Wallet } from 'lucide-react';
import { useState } from 'react';

const Estimator = () => {
  // Calculator State
  const [enrollment, setEnrollment] = useState<number>(750);
  const [isYearly, setIsYearly] = useState<boolean>(true);

  // Mock Calculation Logic (You can replace this with your actual business logic)
  const basePricePerStudent = 1.665;
  const estimatedMonthlyCost = Math.floor(enrollment * basePricePerStudent);
  const annualSavings = isYearly
    ? Math.floor(estimatedMonthlyCost * 12 * 0.16)
    : 0;

  return (
    <div className="bg-[#121824] border border-card-border rounded-3xl p-8 lg:p-12 mb-24 shadow-2xl relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Calculator Controls (Left, takes 5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <h3 className="text-3xl font-bold text-white mb-3">
            Interactive{" "}
            <span className="text-cyan-500">
              Savings
              <br />
              Estimator
            </span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Calculate how much Jevxo proprietary products can save your
            enterprise annually.
          </p>

          {/* Slider Area */}
          <div className="mb-8">
            <div className="flex justify-between text-sm font-bold mb-4">
              <span className="text-white">Monthly Enrollment</span>
              <span className="text-cyan-500">
                {enrollment.toLocaleString()} Students
              </span>
            </div>

            <input
              type="range"
              min="100"
              max="10000"
              step="50"
              value={enrollment}
              onChange={(e) => setEnrollment(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400 transition-all"
            />

            <div className="flex justify-between text-[10px] font-bold text-slate-500 mt-2 uppercase">
              <span>100</span>
              <span>10k+</span>
            </div>
          </div>

          {/* Toggle Area */}
          <div className="flex p-1 bg-slate-800/50 rounded-xl border border-slate-700">
            <button
              onClick={() => setIsYearly(false)}
              className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${!isYearly ? "bg-cyan-500 text-black shadow-md" : "text-slate-400 hover:text-white"}`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-all ${isYearly ? "bg-cyan-500 text-black shadow-md" : "text-slate-400 hover:text-white"}`}
            >
              YEARLY (SAVE 20%)
            </button>
          </div>
        </div>

        {/* Results Cards (Right, takes 7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Cost Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
            <div>
              <Wallet className="text-cyan-500 mb-4" size={24} />
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                Estimated Monthly Cost
              </p>
            </div>
            <div>
              <h4 className="text-cyan-500 text-4xl font-bold mb-2">
                ${estimatedMonthlyCost.toLocaleString()}
              </h4>
              <p className="text-slate-500 text-xs font-medium">
                Enterprise Scalability included
              </p>
            </div>
          </div>

          {/* Savings Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between min-h-[200px] relative overflow-hidden">
            {/* Subtle Yellow Glow in the Savings Card */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#f59e0b]/10 blur-[40px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <PiggyBank className="text-[#f59e0b] mb-4" size={24} />
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                Estimated Annual Savings
              </p>
            </div>
            <div className="relative z-10">
              <h4 className="text-[#f59e0b] text-4xl font-bold mb-2">
                Save ${annualSavings.toLocaleString()}
              </h4>
              <p className="text-slate-500 text-xs font-medium">
                With Premium Support Access
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};;

export default Estimator;
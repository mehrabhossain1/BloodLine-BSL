"use client";

import { useTheme } from "next-themes";

import Navbar from "@/components/Navbar";
import StatisticsCards from "@/components/StatisticsCards";

export default function Home() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-black/60" : "bg-slate-100";
  return (
    <div className={`${bgColor} relative min-h-screen`}>
      <Navbar />
      <StatisticsCards />
    </div>
  );
}

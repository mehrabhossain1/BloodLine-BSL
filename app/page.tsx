"use client";

import { useTheme } from "next-themes";

import Navbar from "@/components/Navbar";
import StatisticsCards from "@/components/StatisticsCards";
import SummaryAndButtonsArea from "@/components/SummaryAndButtonsArea";
import useDonorDataStore from "@/hooks/useDonorDataStore";
import { useEffect } from "react";
import FilterArea from "@/components/FilterArea";

export default function Home() {
  const { theme } = useTheme();
  const { fetchDonors } = useDonorDataStore();

  const bgColor = theme === "dark" ? "bg-black/60" : "bg-slate-100";

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <div className={`${bgColor} relative min-h-screen`}>
      <Navbar />
      <StatisticsCards />
      <SummaryAndButtonsArea />
      <FilterArea />
    </div>
  );
}

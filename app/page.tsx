"use client";

import { useTheme } from "next-themes";

import Navbar from "@/components/Navbar";
import StatisticsCards from "@/components/StatisticsCards";
import SummaryAndButtonsArea from "@/components/SummaryAndButtonsArea";
import useDonorDataStore from "@/hooks/useDonorDataStore";
import { useEffect } from "react";
import FilterArea from "@/components/FilterArea";
import { useDonorViewStore } from "@/hooks/useDonorViewStore";
import DonorsTable from "@/components/donors-table/DonorsTable";
import DonorsCardArea from "@/components/donors-cards-area/DonorsCardArea";

export default function Home() {
  const { theme } = useTheme();
  const { fetchDonors } = useDonorDataStore();
  const { currentView } = useDonorViewStore();

  const bgColor = theme === "dark" ? "bg-black/60" : "bg-slate-100";

  useEffect(() => {
    fetchDonors();
  }, []);

  function RenderCurrentView() {
    if (currentView === "list") {
      return <DonorsTable />;
    } else {
      return <DonorsCardArea />;
    }
  }

  return (
    <div className={`${bgColor} relative min-h-screen`}>
      <Navbar />
      <StatisticsCards />
      <SummaryAndButtonsArea />
      <FilterArea />
      <RenderCurrentView />
    </div>
  );
}

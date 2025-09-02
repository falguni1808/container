"use client";
import dynamic from "next/dynamic";

const DashboardPage = dynamic(() => import("dashboard/DashboardPage"), {
  ssr: false,
  loading: () => <div>Loading Dashboard...</div>,
});

export default function DashboardRoute() {
  return <DashboardPage />;
}
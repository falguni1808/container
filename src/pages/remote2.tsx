"use client";
import dynamic from "next/dynamic";

const Remote2Page = dynamic(() => import("remote2/RemotePage"), {
  ssr: false,
  loading: () => <div>Loading Remote2...</div>,
});

export default function Remote2Route() {
  return <Remote2Page />;
}
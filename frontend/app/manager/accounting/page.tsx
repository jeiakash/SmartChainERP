"use client";
import { Navbar } from "../Navbar/navbar";
import { Accounting } from "@/components/accounts/Accounting";

export default function AccountingPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Accounting</h1>
        <div className="w-full">
          <Accounting />
        </div>
      </main>
    </>
  );
}
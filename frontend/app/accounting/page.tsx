"use client";

import { MainDashboard } from "@/components/accounts/MainDashboard";
import { Accounting } from "@/components/accounts/Accounting";
export default function AccountingPage() {
  return (
    <div className="container mx-auto p-6">
      
        <h1 className="text-2xl font-bold mb-6">Accounting</h1>
        <div className="h-screen w-screen">
          <Accounting/>
        </div>
      
    </div>
  );
}
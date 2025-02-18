"use client";
import React, { useState } from 'react';
import StockOverview from './StockOverview';
import SidePanel from './SidePanel';
import { stockData } from './data';
import NavigationBar from './NavigationBar';

const StockDashboard = () => {
  const [activeView, setActiveView] = useState('charts');

  return (
    <div className="w-full min-h-screen bg-black text-blue-400 p-6">
      <NavigationBar activeView={activeView} setActiveView={setActiveView} />

      <div className="grid grid-cols-12 gap-6">
        {/* Main Content Area */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <StockOverview activeView={activeView} stockData={stockData} />
        </div>

        {/* Side Panel */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <SidePanel stockData={stockData} />
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;
"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { FileText, UserPlus, FileInput, Building2, Settings, CreditCard } from "lucide-react";

type PageType = 'main' | 'new-bill' | 'new-customer' | 'invoices' | 'vendor-bills' | 'configure' | 'payments';

interface MenuItem {
  title: string;
  icon: React.ElementType;
  path: PageType;
}

interface MainDashboardProps {
  onNavigate: (page: PageType) => void;
}

interface BackButtonProps {
  onBack: () => void;
}

interface PageProps {
  onBack: () => void;
}

interface Invoice {
  id: number;
  customer: string;
  amount: number;
  status: string;
  date: string;
}

// Main Accounting Component
const Accounting = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('main');

  const renderPage = () => {
    switch(currentPage) {
      case 'new-bill':
        return <NewBill onBack={() => setCurrentPage('main')} />;
      case 'new-customer':
        return <NewCustomer onBack={() => setCurrentPage('main')} />;
      case 'invoices':
        return <CustomerInvoices onBack={() => setCurrentPage('main')} />;
      case 'vendor-bills':
        return <VendorBills onBack={() => setCurrentPage('main')} />;
      case 'configure':
        return <ConfigureDocuments onBack={() => setCurrentPage('main')} />;
      case 'payments':
        return <TrackPayment onBack={() => setCurrentPage('main')} />;
      default:
        return <MainDashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] p-6">
      {renderPage()}
    </div>
  );
};

// Main Dashboard Component
const MainDashboard = ({ onNavigate }: MainDashboardProps) => {
  const menuItems: MenuItem[] = [
    {
      title: "Create New Bill",
      icon: FileText,
      path: "new-bill"
    },
    {
      title: "Add New Customer",
      icon: UserPlus,
      path: "new-customer"
    },
    {
      title: "Customer Invoices",
      icon: FileInput,
      path: "invoices"
    },
    {
      title: "Vendor Bills",
      icon: Building2,
      path: "vendor-bills"
    },
    {
      title: "Configure Documents",
      icon: Settings,
      path: "configure"
    },
    {
      title: "Track Payment",
      icon: CreditCard,
      path: "payments"
    }
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Accounting</h1>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {menuItems.map((item) => (
          <Button 
            key={item.path}
            variant="outline" 
            className="h-24 border-2 border-blue-500 bg-transparent hover:bg-blue-900/20"
            onClick={() => onNavigate(item.path)}
          >
            <div className="flex flex-col items-center gap-2 text-white">
              <item.icon className="h-6 w-6" />
              <span>{item.title}</span>
            </div>
          </Button>
        ))}
      </div>
    </>
  );
};

// Back Button Component
const BackButton = ({ onBack }: BackButtonProps) => (
  <Button 
    variant="ghost" 
    onClick={onBack}
    className="mb-6 text-white"
  >
    ← Back to Accounting
  </Button>
);

// New Bill Component
const NewBill = ({ onBack }: PageProps) => {
  return (
    <>
      <BackButton onBack={onBack} />
      <Card className="max-w-2xl mx-auto bg-[#1E293B] border-0">
        <CardHeader>
          <CardTitle className="text-xl text-blue-400">Create New Bill</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="vendor" className="text-white">Vendor Name</Label>
              <Input id="vendor" className="bg-[#0F172A] border-blue-500 text-white" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="billNumber" className="text-white">Bill Number</Label>
              <Input id="billNumber" className="bg-[#0F172A] border-blue-500 text-white" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount" className="text-white">Amount</Label>
              <Input id="amount" type="number" className="bg-[#0F172A] border-blue-500 text-white" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dueDate" className="text-white">Due Date</Label>
              <Input id="dueDate" type="date" className="bg-[#0F172A] border-blue-500 text-white" />
            </div>

            <div className="pt-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Create Bill
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

// New Customer Component
const NewCustomer = ({ onBack }: PageProps) => {
  return (
    <>
      <BackButton onBack={onBack} />
      <Card className="max-w-2xl mx-auto bg-[#1E293B] border-0">
        <CardHeader>
          <CardTitle className="text-xl text-blue-400">Add New Customer</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Customer Name</Label>
              <Input id="name" className="bg-[#0F172A] border-blue-500 text-white" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" type="email" className="bg-[#0F172A] border-blue-500 text-white" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone</Label>
              <Input id="phone" className="bg-[#0F172A] border-blue-500 text-white" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-white">Address</Label>
              <Input id="address" className="bg-[#0F172A] border-blue-500 text-white" />
            </div>

            <div className="pt-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Add Customer
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

// Customer Invoices Component
const CustomerInvoices = ({ onBack }: PageProps) => {
  const invoices: Invoice[] = [
    { id: 1, customer: "Acme Corp", amount: 1500, status: "Paid", date: "2024-02-14" },
    { id: 2, customer: "TechStart", amount: 2300, status: "Pending", date: "2024-02-13" },
    { id: 3, customer: "Global Inc", amount: 850, status: "Overdue", date: "2024-02-10" },
  ];

  return (
    <>
      <BackButton onBack={onBack} />
      <Card className="bg-[#1E293B] border-0">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl text-blue-400">Customer Invoices</CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700">
            New Invoice
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-blue-500">
                <TableHead className="text-blue-400">Invoice ID</TableHead>
                <TableHead className="text-blue-400">Customer</TableHead>
                <TableHead className="text-blue-400">Amount</TableHead>
                <TableHead className="text-blue-400">Status</TableHead>
                <TableHead className="text-blue-400">Date</TableHead>
                <TableHead className="text-blue-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="border-blue-500/20">
                  <TableCell className="text-white">#{invoice.id}</TableCell>
                  <TableCell className="text-white">{invoice.customer}</TableCell>
                  <TableCell className="text-white">${invoice.amount}</TableCell>
                  <TableCell className="text-white">{invoice.status}</TableCell>
                  <TableCell className="text-white">{invoice.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

// Vendor Bills Component
const VendorBills = ({ onBack }: PageProps) => {
  return (
    <>
      <BackButton onBack={onBack} />
      <Card className="bg-[#1E293B] border-0">
        <CardHeader>
          <CardTitle className="text-xl text-blue-400">Vendor Bills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-white">Vendor Bills content coming soon...</div>
        </CardContent>
      </Card>
    </>
  );
};

// Configure Documents Component
const ConfigureDocuments = ({ onBack }: PageProps) => {
  return (
    <>
      <BackButton onBack={onBack} />
      <Card className="bg-[#1E293B] border-0">
        <CardHeader>
          <CardTitle className="text-xl text-blue-400">Configure Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-white">Document configuration coming soon...</div>
        </CardContent>
      </Card>
    </>
  );
};

// Track Payment Component
const TrackPayment = ({ onBack }: PageProps) => {
  return (
    <>
      <BackButton onBack={onBack} />
      <Card className="bg-[#1E293B] border-0">
        <CardHeader>
          <CardTitle className="text-xl text-blue-400">Track Payment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-white">Payment tracking features coming soon...</div>
        </CardContent>
      </Card>
    </>
  );
};

export default Accounting;
export default function Page() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h1 className="text-4xl font-bold mb-8">Inventory Management System</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <a 
            href="/manager/dashBoard" 
            className="p-6 border rounded-lg hover:shadow-lg transition-all bg-slate-50 hover:bg-slate-100"
          >
            <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
            <p>View your business metrics and KPIs</p>
          </a>
          <a 
            href="/manager/accounting" 
            className="p-6 border rounded-lg hover:shadow-lg transition-all bg-slate-50 hover:bg-slate-100"
          >
            <h2 className="text-xl font-semibold mb-2">Accounting</h2>
            <p>Manage your financial transactions</p>
          </a>
          <a 
            href="/manager/stockCount" 
            className="p-6 border rounded-lg hover:shadow-lg transition-all bg-slate-50 hover:bg-slate-100"
          >
            <h2 className="text-xl font-semibold mb-2">Stock Count</h2>
            <p>Track your inventory and supplies</p>
          </a>
        </div>
      </div>
    )
  }
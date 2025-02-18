"use client";

import React from 'react';
import { OrdersTable } from './OrdersTable';
import { UndeliverableOrders } from './UndeliverableOrders';
import { DeliveryStatus } from './DeliveryStatus';
import { CancelOrderDialog } from './CancelOrderDialog';
import { DeliveryOrder, UndeliverableOrder } from './types';

export const DeliveryDashboard = () => {
  const [mounted, setMounted] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedOrderId, setSelectedOrderId] = React.useState<string | null>(null);
  const [selectedReason, setSelectedReason] = React.useState("");
  const [orders, setOrders] = React.useState<DeliveryOrder[]>([
    {
      orderId: "ORD-001",
      orderName: "John Smith",
      phoneNumber: "555-0123",
      address: "123 Main St, City, State",
      isDelivered: false,
      items: ["Laptop", "Mouse"]
    },
    // ... rest of the orders
  ]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const undeliverableOrders: UndeliverableOrder[] = [
    {
      orderId: "ORD-006",
      name: "Alice Johnson",
      phone: "555-0128",
    },
    {
      orderId: "ORD-007",
      name: "Tom Davis",
      phone: "555-0129",
    }
  ];

  const handleCancelClick = (orderId: string) => {
    setSelectedOrderId(orderId);
    setDialogOpen(true);
  };

  const handleCancelOrder = () => {
    if (selectedOrderId && selectedReason) {
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.orderId === selectedOrderId 
            ? { ...order, isCancelled: true, cancellationReason: selectedReason }
            : order
        )
      );
      setDialogOpen(false);
      setSelectedOrderId(null);
      setSelectedReason("");
    }
  };

  const calculatePieChartData = React.useMemo(() => {
    const deliveredCount = orders.filter(order => order.isDelivered && !order.isCancelled).length;
    const notDeliveredCount = orders.filter(order => !order.isDelivered && !order.isCancelled).length;
    const cancelledCount = orders.filter(order => order.isCancelled).length;
    const undeliverableCount = undeliverableOrders.length;

    return [
      { name: 'Delivered', value: deliveredCount, color: '#22c55e' },
      { name: 'Pending', value: notDeliveredCount, color: '#3b82f6' },
      { name: 'Cancelled', value: cancelledCount, color: '#eab308' },
      { name: 'Undeliverable', value: undeliverableCount, color: '#94a3b8' }
    ];
  }, [orders, undeliverableOrders]);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <CancelOrderDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        selectedReason={selectedReason}
        onReasonChange={setSelectedReason}
        onConfirm={handleCancelOrder}
      />

      <OrdersTable 
        orders={orders}
        onCancelClick={handleCancelClick}
      />

      <div className="grid grid-cols-2 gap-6">
        <UndeliverableOrders orders={undeliverableOrders} />
        {mounted && (
          <DeliveryStatus 
            data={calculatePieChartData}
            totalOrders={orders.length + undeliverableOrders.length}
          />
        )}
      </div>
    </div>
  );
};
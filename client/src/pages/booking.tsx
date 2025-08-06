
import React from 'react';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Booking() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentView="vendor" />
      
      <div className="ml-64">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div>
            <Title level={2} style={{ margin: 0, marginBottom: 8 }}>
              Booking Management
            </Title>
            <Paragraph style={{ margin: 0, color: '#6b7280' }}>
              Manage reservations, bookings, and availability
            </Paragraph>
          </div>
        </header>

        <main className="p-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <Title level={3}>Booking Management</Title>
            <Paragraph>
              Here you can manage all your bookings, reservations, and availability settings.
              View upcoming bookings, handle cancellations, and manage booking policies.
            </Paragraph>
          </div>
        </main>
      </div>
    </div>
  );
}

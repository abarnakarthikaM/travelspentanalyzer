
import React, { useMemo } from 'react';
import { Card, Select, Space, Typography } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const { Title, Text } = Typography;
const { Option } = Select;

interface ExpenseTrendsChartProps {
  timePeriod: string;
  travelMode: string;
  onTimePeriodChange: (value: string) => void;
  onTravelModeChange: (value: string) => void;
}

export const ExpenseTrendsChart: React.FC<ExpenseTrendsChartProps> = ({
  timePeriod,
  travelMode,
  onTimePeriodChange,
  onTravelModeChange
}) => {
  // Service type breakdown data from JSON
  const serviceTypeData = {
    "airline": {
      "total": 264209772.9536795,
      "monthly": {
        "2025-08": 37065053.76758003,
        "2025-10": 34117096.30018019,
        "2025-11": 43464603.50961995,
        "2025-12": 43660950.613819964,
        "2026-01": 52951034.381239675,
        "2026-02": 52951034.38123968
      },
      "quarterly": {
        "Q3 2025": 37065053.76758003,
        "Q4 2025": 121242650.4236201,
        "Q1 2026": 105902068.76247936
      },
      "percentage": 96.9
    },
    "hotel": {
      "total": 0,
      "monthly": {
        "2025-08": 0,
        "2025-10": 0,
        "2025-11": 0,
        "2025-12": 0,
        "2026-01": 0,
        "2026-02": 0
      },
      "quarterly": {
        "Q3 2025": 0,
        "Q4 2025": 0,
        "Q1 2026": 0
      },
      "percentage": 0.0
    },
    "ground": {
      "total": 8489277.27531999,
      "monthly": {
        "2025-08": 1110200.567579994,
        "2025-10": 862204.4440000014,
        "2025-11": 1448859.8821200011,
        "2025-12": 1450951.299020001,
        "2026-01": 1808530.541299996,
        "2026-02": 1808530.541299996
      },
      "quarterly": {
        "Q3 2025": 1110200.567579994,
        "Q4 2025": 3762015.625140004,
        "Q1 2026": 3617061.082599992
      },
      "percentage": 3.1
    }
  };

  // Transform data based on selected filters
  const expenseTrendsData = useMemo(() => {
    const dataSource = timePeriod === 'quarterly' ? 'quarterly' : 'monthly';
    
    if (timePeriod === 'yearly') {
      // For yearly view, aggregate the data
      return [{
        period: '2025-2026',
        airline: Math.round(serviceTypeData.airline.total / 1000000),
        hotel: Math.round(serviceTypeData.hotel.total / 1000000),
        ground: Math.round(serviceTypeData.ground.total / 1000000)
      }];
    }

    const periods = Object.keys(serviceTypeData.airline[dataSource]);
    
    return periods.map(period => ({
      period: period,
      airline: Math.round(serviceTypeData.airline[dataSource][period] / 1000000),
      hotel: Math.round(serviceTypeData.hotel[dataSource][period] / 1000000),
      ground: Math.round(serviceTypeData.ground[dataSource][period] / 1000000)
    }));
  }, [timePeriod]);

  // Filter data based on travel mode selection
  const filteredData = useMemo(() => {
    if (travelMode === 'all') return expenseTrendsData;
    
    return expenseTrendsData.map(item => {
      const filtered = { period: item.period };
      if (travelMode === 'airline' || travelMode === 'air') filtered.airline = item.airline;
      if (travelMode === 'hotel' || travelMode === 'hotels') filtered.hotel = item.hotel;
      if (travelMode === 'ground' || travelMode === 'transport') filtered.ground = item.ground;
      return filtered;
    });
  }, [expenseTrendsData, travelMode]);

  return (
    <Card style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <Title level={4} style={{ margin: 0, marginBottom: 4 }}>
            Expense Trends Over Time
          </Title>
          <Text style={{ color: '#8c8c8c' }}>
            Monthly expense breakdown by category
          </Text>
        </div>
        <Space>
          <Select 
            value={timePeriod} 
            onChange={onTimePeriodChange} 
            style={{ width: 120 }}
          >
            <Option value="monthly">Monthly</Option>
            <Option value="quarterly">Quarterly</Option>
            <Option value="yearly">Yearly</Option>
          </Select>
          <Select 
            value={travelMode} 
            onChange={onTravelModeChange} 
            style={{ width: 140 }}
          >
            <Option value="all">All Categories</Option>
            <Option value="airline">Airline</Option>
            <Option value="hotel">Hotels</Option>
            <Option value="ground">Ground Transport</Option>
          </Select>
        </Space>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={filteredData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="period" stroke="#8c8c8c" />
          <YAxis stroke="#8c8c8c" tickFormatter={(value) => `$${value}M`} />
          <Tooltip 
            formatter={(value, name) => [`$${value}M`, name]}
            labelStyle={{ color: '#1f2937' }}
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '6px'
            }}
          />
          {(travelMode === 'all' || travelMode === 'airline') && (
            <Line 
              type="monotone" 
              dataKey="airline" 
              stroke="#6366f1" 
              strokeWidth={2}
              dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
              name="Airline"
            />
          )}
          {(travelMode === 'all' || travelMode === 'hotel') && (
            <Line 
              type="monotone" 
              dataKey="hotel" 
              stroke="#8b5cf6" 
              strokeWidth={2}
              dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
              name="Hotels"
            />
          )}
          {(travelMode === 'all' || travelMode === 'ground') && (
            <Line 
              type="monotone" 
              dataKey="ground" 
              stroke="#ec4899" 
              strokeWidth={2}
              dot={{ fill: '#ec4899', strokeWidth: 2, r: 4 }}
              name="Ground Transport"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

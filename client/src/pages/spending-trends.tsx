import React, { useState, useMemo } from 'react';
import { Layout, Typography, Card, Row, Col, Select, Button, Space, Table, Tag, DatePicker } from 'antd';
import { CalendarOutlined, FilterOutlined, DownloadOutlined, RiseOutlined, FallOutlined } from '@ant-design/icons';
import { Sidebar } from '@/components/dashboard/sidebar';
import { ExpenseTrendsChart } from '@/components/dashboard/expense-trends-chart';
import { PieChart, Pie, Cell, BarChart, Bar, ResponsiveContainer, Tooltip, CartesianGrid, XAxis, YAxis } from 'recharts';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const SpendingTrends = () => {
  // State for filters
  const [timePeriod, setTimePeriod] = useState('monthly');
  const [travelMode, setTravelMode] = useState('all');

  // Service type breakdown data from JSON
  const serviceTypeData = {
    "airline": {
      "total": 264209772.9536795,
      "percentage": 96.9
    },
    "hotel": {
      "total": 0,
      "percentage": 0.0
    },
    "ground": {
      "total": 8489277.27531999,
      "percentage": 3.1
    }
  };

  // Metrics data for the top cards
  const totalExpenses = serviceTypeData.airline.total + serviceTypeData.hotel.total + serviceTypeData.ground.total;
  const monthlyAverage = totalExpenses / 6; // 6 months of data
  
  const metricsData = [
    {
      title: 'Total Expenses',
      value: `$${Math.round(totalExpenses / 1000000)}M`,
      change: '+5.2%',
      changeType: 'positive',
      subtitle: 'vs. previous year'
    },
    {
      title: 'Monthly Average',
      value: `$${Math.round(monthlyAverage / 1000000)}M`,
      change: '+2.1%',
      changeType: 'positive',
      subtitle: 'vs. previous period'
    },
    {
      title: 'Airline Expenses',
      value: `$${Math.round(serviceTypeData.airline.total / 1000000)}M`,
      change: '+8.3%',
      changeType: 'positive',
      subtitle: `${serviceTypeData.airline.percentage}% of total`
    },
    {
      title: 'Ground Transport',
      value: `$${Math.round(serviceTypeData.ground.total / 1000000)}M`,
      change: '+6.7%',
      changeType: 'positive',
      subtitle: `${serviceTypeData.ground.percentage}% of total`
    }
  ];

  // Category distribution pie chart data
  const categoryData = [
    { 
      name: 'Airline', 
      value: serviceTypeData.airline.percentage, 
      amount: `$${Math.round(serviceTypeData.airline.total / 1000000)}M`, 
      color: '#6366f1' 
    },
    { 
      name: 'Hotels', 
      value: serviceTypeData.hotel.percentage, 
      amount: `$${Math.round(serviceTypeData.hotel.total / 1000000)}M`, 
      color: '#8b5cf6' 
    },
    { 
      name: 'Ground Transport', 
      value: serviceTypeData.ground.percentage, 
      amount: `$${Math.round(serviceTypeData.ground.total / 1000000)}M`, 
      color: '#ec4899' 
    }
  ];

  // Spending projections bar chart data
  const projectionsData = [
    { period: 'Dec 2023', amount: 460 },
    { period: 'Feb 2024', amount: 485 },
    { period: 'Apr 2024', amount: 520 },
    { period: 'Jun 2024', amount: 545 },
    { period: 'Aug 2024', amount: 580 },
    { period: 'Oct 2024', amount: 610 }
  ];

  // Projections summary data
  const projectionsSummary = [
    { period: 'Q4 2023 Projection', subtitle: 'Based on current trends', amount: '$487,250' },
    { period: 'Q1 2024 Projection', subtitle: 'Based on historical patterns', amount: '$512,800' },
    { period: 'Annual 2024 Forecast', subtitle: 'Full year estimate', amount: '$1,925,000' }
  ];

  // Anomalies insights data
  const insightsData = [
    {
      title: 'Seasonal Spike Detected',
      description: 'Air travel expenses consistently increase by 22-38% during Q4 each year. Consider adjusting budget allocations accordingly.',
      type: 'warning',
      icon: '⚠️'
    },
    {
      title: 'Cost Reduction Trend',
      description: 'Ground transport costs have decreased by 15% since implementing the new travel policy in March. Projected annual savings: $32,000.',
      type: 'success',
      icon: '💰'
    },
    {
      title: 'Budget Optimization',
      description: 'Based on spending patterns, reallocating 8% from hotel to air travel budget could better align with actual expenses.',
      type: 'info',
      icon: '💡'
    }
  ];

  // Year-over-year comparison table data
  const comparisonData = [
    {
      key: '1',
      category: 'Air Travel',
      ytd2022: '$481,790',
      ytd2023: '$567,800',
      change: '+17.9%',
      projected2023: '$750,500',
      projected2024: '$865,750'
    },
    {
      key: '2',
      category: 'Hotels',
      ytd2022: '$445,320',
      ytd2023: '$435,900',
      change: '-2.1%',
      projected2023: '$586,000',
      projected2024: '$623,000'
    },
    {
      key: '3',
      category: 'Ground Transport',
      ytd2022: '$209,450',
      ytd2023: '$248,521',
      change: '+18.7%',
      projected2023: '$340,317',
      projected2024: '$434,250'
    },
    {
      key: '4',
      category: 'Total',
      ytd2022: '$1,156,920',
      ytd2023: '$1,248,567',
      change: '+7.9%',
      projected2023: '$1,735,817',
      projected2024: '$1,925,000'
    }
  ];

  const comparisonColumns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: 150,
    },
    {
      title: '2022 YTD',
      dataIndex: 'ytd2022',
      key: 'ytd2022',
      width: 120,
    },
    {
      title: '2023 YTD',
      dataIndex: 'ytd2023',
      key: 'ytd2023',
      width: 120,
    },
    {
      title: 'Change',
      dataIndex: 'change',
      key: 'change',
      width: 100,
      render: (change: string) => (
        <Tag color={change.startsWith('+') ? 'green' : 'red'}>
          {change.startsWith('+') ? <RiseOutlined /> : <FallOutlined />} {change}
        </Tag>
      ),
    },
    {
      title: 'Projected 2023',
      dataIndex: 'projected2023',
      key: 'projected2023',
      width: 130,
    },
    {
      title: 'Projected 2024',
      dataIndex: 'projected2024',
      key: 'projected2024',
      width: 130,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Sidebar />

      <Layout style={{ marginLeft: 256 }}>
        {/* Header */}
        <div style={{
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <Title level={2} style={{ margin: 0, marginBottom: 4 }}>
              Spending Trends & Projections
            </Title>
            <Text style={{ color: '#8c8c8c' }}>
              Analyze historical spending patterns and view future projections
            </Text>
          </div>

          <Space>
            <DatePicker.RangePicker
              suffixIcon={<CalendarOutlined />}
              defaultValue={[null, null]}
              placeholder={['1/1/2023', '7/30/2025']}
              style={{ width: 240 }}
            />
            <Button icon={<FilterOutlined />}>Filters</Button>
            <Button icon={<DownloadOutlined />}>Export</Button>
          </Space>
        </div>

        <Content style={{ padding: '32px' }}>
          {/* Top Metrics Cards */}
          <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
            {metricsData.map((metric, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card style={{ height: '100%', textAlign: 'center' }}>
                  <Title level={4} style={{ color: '#8c8c8c', fontSize: 14, fontWeight: 400, marginBottom: 8 }}>
                    {metric.title}
                  </Title>
                  <Title level={2} style={{ margin: 0, marginBottom: 4, fontSize: 28 }}>
                    {metric.value}
                  </Title>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                    <Tag color="green" style={{ margin: 0 }}>
                      <RiseOutlined /> {metric.change}
                    </Tag>
                  </div>
                  <Text style={{ color: '#8c8c8c', fontSize: 12 }}>
                    {metric.subtitle}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Expense Trends Chart */}
          <ExpenseTrendsChart 
            timePeriod={timePeriod}
            travelMode={travelMode}
            onTimePeriodChange={setTimePeriod}
            onTravelModeChange={setTravelMode}
          />

          {/* Bottom Row - Category Distribution and Spending Projections */}
          <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
            {/* Category Distribution */}
            <Col xs={24} lg={12}>
              <Card style={{ height: 400 }}>
                <Title level={4} style={{ marginBottom: 16 }}>
                  Category Distribution
                </Title>
                <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                  Breakdown of expenses by category
                </Text>

                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Percentage']}
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #d9d9d9',
                        borderRadius: '6px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {categoryData.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ 
                        width: 12, 
                        height: 12, 
                        borderRadius: '50%', 
                        backgroundColor: item.color
                      }} />
                      <Text style={{ flex: 1 }}>{item.name}</Text>
                      <Text strong>{item.value}%</Text>
                      <Text style={{ color: '#8c8c8c' }}>({item.amount})</Text>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>

            {/* Spending Projections */}
            <Col xs={24} lg={12}>
              <Card style={{ height: 400 }}>
                <Title level={4} style={{ marginBottom: 16 }}>
                  Spending Projections
                </Title>
                <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                  Forecasted expenses for the next 6 months
                </Text>

                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={projectionsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="period" stroke="#8c8c8c" />
                    <YAxis stroke="#8c8c8c" />
                    <Tooltip 
                      formatter={(value) => [`$${value}K`, 'Amount']}
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #d9d9d9',
                        borderRadius: '6px'
                      }}
                    />
                    <Bar dataKey="amount" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
                  {projectionsSummary.map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <Text strong style={{ display: 'block' }}>{item.period}</Text>
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>{item.subtitle}</Text>
                      </div>
                      <Text strong style={{ color: '#1890ff', fontSize: 16 }}>{item.amount}</Text>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>

          {/* Spending Anomalies & Insights */}
          <Card style={{ marginBottom: 32 }}>
            <Title level={4} style={{ marginBottom: 16 }}>
              Spending Anomalies & Insights
            </Title>
            <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
              AI-identified patterns and anomalies in spending data
            </Text>

            <Row gutter={[16, 16]}>
              {insightsData.map((insight, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card 
                    size="small" 
                    style={{ 
                      height: '100%',
                      borderLeft: `4px solid ${insight.type === 'warning' ? '#faad14' : insight.type === 'success' ? '#52c41a' : '#1890ff'}`
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: 16 }}>{insight.icon}</span>
                      <Title level={5} style={{ margin: 0, fontSize: 14 }}>
                        {insight.title}
                      </Title>
                    </div>
                    <Text style={{ color: '#8c8c8c', fontSize: 12, lineHeight: 1.5 }}>
                      {insight.description}
                    </Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          {/* Year-over-Year Comparison */}
          <Card>
            <Title level={4} style={{ marginBottom: 16 }}>
              Year-over-Year Comparison
            </Title>
            <Table
              dataSource={comparisonData}
              columns={comparisonColumns}
              pagination={false}
              size="small"
              style={{ backgroundColor: '#fafafa' }}
            />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default SpendingTrends;
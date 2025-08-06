
import React, { useState } from 'react';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Typography, Card, Row, Col, Progress, Button, Tabs, Table, Tag, Space } from 'antd';
import { InfoCircleOutlined, FilterOutlined, ExportOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function VendorDashboard() {
  const [activeTab, setActiveTab] = useState('Performance');

  // Performance metrics data
  const performanceMetrics = [
    {
      title: 'On-Time Performance',
      value: '94.7%',
      target: '95%',
      industry: '87.5%',
      progress: 94.7,
      status: 'top',
      color: '#52c41a'
    },
    {
      title: 'Customer Satisfaction',
      value: '92%',
      target: '90%',
      industry: '84.6%',
      progress: 92,
      status: 'top',
      color: '#52c41a'
    },
    {
      title: 'Cost Efficiency',
      value: '88.3%',
      target: '85%',
      industry: '82.1%',
      progress: 88.3,
      status: 'top',
      color: '#1890ff'
    },
    {
      title: 'Policy Compliance',
      value: '97.8%',
      target: '95%',
      industry: '91.4%',
      progress: 97.8,
      status: 'top',
      color: '#52c41a'
    }
  ];

  // Improvement opportunities data
  const improvementOpportunities = [
    {
      title: 'Baggage Handling',
      description: 'Your baggage handling satisfaction score (88.2%) is below your overall satisfaction score. Consider reviewing your baggage handling procedures to improve customer experience.',
      current: 88.2,
      target: 95,
      color: '#1890ff'
    },
    {
      title: 'Check-in Experience',
      description: 'Your check-in experience rating (89.5%) has room for improvement. Consider streamlining the check-in process to reduce wait times.',
      current: 89.5,
      target: 95,
      color: '#1890ff'
    },
    {
      title: 'In-flight Meal Quality',
      description: 'Your in-flight meal quality rating (82.7%) is significantly below your overall satisfaction score. Consider reviewing your meal options and quality.',
      current: 82.7,
      target: 90,
      color: '#fa8c16'
    }
  ];

  // Competitive analysis data
  const competitiveData = [
    {
      key: '1',
      metric: 'On-Time Performance',
      yourScore: '94.7%',
      topPerformer: '96.2%',
      industryAverage: '87.2%',
      ranking: '2nd of 8',
      status: 'good'
    },
    {
      key: '2',
      metric: 'Customer Satisfaction',
      yourScore: '92.0%',
      topPerformer: '92.8%',
      industryAverage: '84.5%',
      ranking: '2nd of 8',
      status: 'good'
    },
    {
      key: '3',
      metric: 'Cost Efficiency',
      yourScore: '88.3%',
      topPerformer: '91.5%',
      industryAverage: '82.1%',
      ranking: '3rd of 8',
      status: 'warning'
    },
    {
      key: '4',
      metric: 'Policy Compliance',
      yourScore: '97.8%',
      topPerformer: '98.1%',
      industryAverage: '91.4%',
      ranking: '2nd of 8',
      status: 'good'
    }
  ];

  const competitiveColumns = [
    {
      title: 'Metric',
      dataIndex: 'metric',
      key: 'metric',
      width: 200,
    },
    {
      title: 'Your Score',
      dataIndex: 'yourScore',
      key: 'yourScore',
      width: 120,
      render: (text: string) => <Text strong>{text}</Text>
    },
    {
      title: 'Top Performer',
      dataIndex: 'topPerformer',
      key: 'topPerformer',
      width: 120,
    },
    {
      title: 'Industry Average',
      dataIndex: 'industryAverage',
      key: 'industryAverage',
      width: 140,
    },
    {
      title: 'Your Ranking',
      dataIndex: 'ranking',
      key: 'ranking',
      width: 120,
      render: (text: string, record: any) => (
        <Tag color={record.status === 'good' ? 'green' : record.status === 'warning' ? 'orange' : 'red'}>
          {text}
        </Tag>
      )
    },
  ];

  const tabItems = [
    {
      key: 'Performance',
      label: 'Performance',
    },
    {
      key: 'Bookings',
      label: 'Bookings',
    },
    {
      key: 'Payments',
      label: 'Payments',
    },
    {
      key: 'Communications',
      label: 'Communications',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentView="vendor" />
      
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Title level={2} style={{ margin: 0, marginBottom: 4 }}>
                Vendor Dashboard
              </Title>
              <Text style={{ color: '#8c8c8c' }}>
                Welcome, AirCorp. View your performance and relationship with Infiniti Travel
              </Text>
              <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Text style={{ fontSize: '12px', color: '#8c8c8c' }}>
                  1/1/2023 - 8/4/2025
                </Text>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Button icon={<FilterOutlined />}>Filters</Button>
              <Button icon={<ExportOutlined />}>Export</Button>
            </div>
          </div>
        </header>

        <main className="p-8">
          {/* Performance Cards */}
          <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
            <Col xs={24} sm={12} lg={6}>
              <Card style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <Title level={4} style={{ margin: 0, marginRight: 8 }}>Total Bookings</Title>
                  <InfoCircleOutlined style={{ color: '#8c8c8c' }} />
                </div>
                <Title level={2} style={{ margin: 0, marginBottom: 4 }}>1,248</Title>
                <Text style={{ color: '#52c41a' }}>+12% from previous period</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <Title level={4} style={{ margin: 0, marginRight: 8 }}>Revenue</Title>
                  <InfoCircleOutlined style={{ color: '#8c8c8c' }} />
                </div>
                <Title level={2} style={{ margin: 0, marginBottom: 4 }}>$567,890</Title>
                <Text style={{ color: '#52c41a' }}>+8% from previous period</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <Title level={4} style={{ margin: 0, marginRight: 8 }}>Customer Satisfaction</Title>
                  <InfoCircleOutlined style={{ color: '#8c8c8c' }} />
                </div>
                <Title level={2} style={{ margin: 0, marginBottom: 4 }}>92%</Title>
                <Text style={{ color: '#52c41a' }}>+2% from previous period</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
                  <Title level={4} style={{ margin: 0, marginRight: 8 }}>On-Time Performance</Title>
                  <InfoCircleOutlined style={{ color: '#8c8c8c' }} />
                </div>
                <Title level={2} style={{ margin: 0, marginBottom: 4 }}>94.7%</Title>
                <Text style={{ color: '#52c41a' }}>+1% from previous period</Text>
              </Card>
            </Col>
          </Row>

          {/* Tabs */}
          <Card>
            <Tabs 
              activeKey={activeTab} 
              onChange={setActiveTab} 
              items={tabItems}
              style={{ marginBottom: 24 }}
            />

            {activeTab === 'Performance' && (
              <div>
                <Row gutter={[24, 24]}>
                  {/* Performance Metrics */}
                  <Col xs={24} lg={12}>
                    <div style={{ marginBottom: 24 }}>
                      <Title level={4} style={{ marginBottom: 8 }}>Performance Metrics</Title>
                      <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                        Your performance compared to other vendors
                      </Text>

                      <Space direction="vertical" style={{ width: '100%' }} size="large">
                        {performanceMetrics.map((metric, index) => (
                          <div key={index}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                              <Text strong>{metric.title}</Text>
                              <Text strong style={{ color: metric.color }}>{metric.value}</Text>
                            </div>
                            <Progress 
                              percent={metric.progress} 
                              strokeColor={metric.color}
                              showInfo={false}
                              style={{ marginBottom: 4 }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#8c8c8c' }}>
                              <span>Industry average: {metric.industry}</span>
                              <Tag color="green" style={{ fontSize: '10px' }}>
                                Top {metric.status === 'top' ? '5%' : '10%'}
                              </Tag>
                            </div>
                          </div>
                        ))}
                      </Space>

                      <div style={{ textAlign: 'center', marginTop: 24 }}>
                        <Button type="link">View Detailed Performance Report</Button>
                      </div>
                    </div>
                  </Col>

                  {/* Performance Trend */}
                  <Col xs={24} lg={12}>
                    <div style={{ marginBottom: 24 }}>
                      <Title level={4} style={{ marginBottom: 8 }}>Performance Trend</Title>
                      <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                        Your performance over the last 12 months
                      </Text>
                      
                      <div style={{ 
                        height: 300, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        backgroundColor: '#fafafa',
                        borderRadius: 6,
                        color: '#8c8c8c',
                        border: '1px dashed #d9d9d9'
                      }}>
                        Performance trend chart would appear here
                      </div>
                    </div>
                  </Col>
                </Row>

                {/* Improvement Opportunities */}
                <div style={{ marginBottom: 32 }}>
                  <Title level={4} style={{ marginBottom: 8 }}>Improvement Opportunities</Title>
                  <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                    Areas where you can enhance your service
                  </Text>

                  <Space direction="vertical" style={{ width: '100%' }} size="large">
                    {improvementOpportunities.map((opportunity, index) => (
                      <Card key={index} size="small" style={{ backgroundColor: '#fafafa' }}>
                        <div style={{ marginBottom: 12 }}>
                          <Title level={5} style={{ margin: 0, marginBottom: 8 }}>{opportunity.title}</Title>
                          <Text style={{ fontSize: '14px', color: '#595959' }}>
                            {opportunity.description}
                          </Text>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                          <Text style={{ fontSize: '12px', color: '#8c8c8c' }}>
                            Current: {opportunity.current}% | Target: {opportunity.target}%
                          </Text>
                        </div>
                        <Progress 
                          percent={(opportunity.current / opportunity.target) * 100} 
                          strokeColor={opportunity.color}
                          showInfo={false}
                        />
                      </Card>
                    ))}
                  </Space>
                </div>

                {/* Competitive Analysis */}
                <div>
                  <Title level={4} style={{ marginBottom: 8 }}>Competitive Analysis</Title>
                  <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                    How you compare to other vendors (anonymized)
                  </Text>

                  <Table
                    columns={competitiveColumns}
                    dataSource={competitiveData}
                    pagination={false}
                    size="middle"
                  />
                </div>
              </div>
            )}

            {activeTab !== 'Performance' && (
              <div style={{ 
                height: 300, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: '#fafafa',
                borderRadius: 6,
                color: '#8c8c8c'
              }}>
                {activeTab} content would appear here
              </div>
            )}
          </Card>
        </main>
      </div>
    </div>
  );
}

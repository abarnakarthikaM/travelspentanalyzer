
import React from 'react';
import { Layout, Typography, Button, Space, Card, Row, Col, Tabs, Badge, Progress, DatePicker, Modal, Table, List } from 'antd';
import { 
  CalendarOutlined, 
  FilterOutlined, 
  DownloadOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  RiseOutlined,
  FallOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { Sidebar } from '@/components/dashboard/sidebar';

const { Title, Text } = Typography;

const AIInsights = () => {
  const [activeTab, setActiveTab] = React.useState('insights');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalType, setModalType] = React.useState('');
  
  const tabItems = [
    { key: 'insights', label: 'Key Insights' },
    { key: 'recommendations', label: 'Recommendations' },
    { key: 'predictions', label: 'Predictions' },
    { key: 'assistant', label: 'AI Assistant' },
  ];

  const costSavingOpportunities = [
    {
      title: 'Vendor Consolidation',
      description: 'Consolidating hotel bookings to preferred vendors could save $45,000 annually.',
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    },
    {
      title: 'Advance Booking Policy',
      description: 'Implementing a 14-day advance booking policy could reduce air travel costs by $82,500 annually.',
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    },
  ];

  const spendingAnomalies = [
    {
      title: 'Marketing Department',
      description: '35% increase in premium air travel bookings in the last 30 days.',
      icon: <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />,
    },
    {
      title: 'Engineering Team',
      description: 'Unusual pattern of last-minute hotel cancellations resulting in $12,450 in fees.',
      icon: <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />,
    },
  ];

  const improvingDepartments = [
    {
      title: 'Improving Departments',
      description: 'Sales team improved compliance from 72% to 91% after training.',
      icon: <RiseOutlined style={{ color: '#1890ff' }} />,
    },
    {
      title: 'Needs Improvement',
      description: 'Research team compliance dropped to 68% in the last quarter.',
      icon: <FallOutlined style={{ color: '#faad14' }} />,
    },
  ];

  // Detailed data for modals
  const detailedCostSavingOpportunities = [
    {
      title: 'Vendor Consolidation',
      description: 'Consolidating hotel bookings to preferred vendors could save $45,000 annually.',
      potentialSavings: '$45,000',
      currentSpend: '$180,000',
      timeframe: '12-18 months',
      effort: 'Medium',
      category: 'Hotels',
      impact: 'High'
    },
    {
      title: 'Advance Booking Policy',
      description: 'Implementing a 14-day advance booking policy could reduce air travel costs by $82,500 annually.',
      potentialSavings: '$82,500',
      currentSpend: '$350,000',
      timeframe: '3-6 months',
      effort: 'Low',
      category: 'Air Travel',
      impact: 'High'
    },
    {
      title: 'Alternative Transport',
      description: 'Using train services for routes under 300 miles could save $28,750 annually.',
      potentialSavings: '$28,750',
      currentSpend: '$95,000',
      timeframe: '6-9 months',
      effort: 'Medium',
      category: 'Ground Transport',
      impact: 'Medium'
    },
    {
      title: 'Virtual Meeting Incentives',
      description: 'Departmental incentive program for choosing virtual over in-person meetings.',
      potentialSavings: '$35,000',
      currentSpend: '$120,000',
      timeframe: '2-4 months',
      effort: 'Low',
      category: 'All Categories',
      impact: 'Medium'
    }
  ];

  const detailedSpendingAnomalies = [
    {
      title: 'Marketing Department Premium Travel',
      description: '35% increase in premium air travel bookings in the last 30 days.',
      anomalyType: 'Spending Spike',
      department: 'Marketing',
      category: 'Air Travel',
      variance: '+35%',
      amount: '$45,200',
      dateDetected: '2024-01-15',
      severity: 'High',
      status: 'Under Review'
    },
    {
      title: 'Engineering Last-Minute Cancellations',
      description: 'Unusual pattern of last-minute hotel cancellations resulting in $12,450 in fees.',
      anomalyType: 'Policy Violation',
      department: 'Engineering',
      category: 'Hotels',
      variance: '+280%',
      amount: '$12,450',
      dateDetected: '2024-01-12',
      severity: 'Medium',
      status: 'Action Required'
    },
    {
      title: 'Sales Team Route Deviation',
      description: 'Frequent bookings outside preferred vendor network in Q4.',
      anomalyType: 'Policy Deviation',
      department: 'Sales',
      category: 'All Categories',
      variance: '+22%',
      amount: '$18,300',
      dateDetected: '2024-01-10',
      severity: 'Medium',
      status: 'Investigating'
    },
    {
      title: 'Executive Travel Pattern Change',
      description: 'Unusual increase in international travel expenses for executive team.',
      anomalyType: 'Pattern Change',
      department: 'Executive',
      category: 'Air Travel',
      variance: '+67%',
      amount: '$89,500',
      dateDetected: '2024-01-08',
      severity: 'High',
      status: 'Approved Exception'
    }
  ];

  const detailedComplianceData = [
    {
      department: 'Sales',
      currentRate: '91%',
      previousRate: '72%',
      change: '+19%',
      trend: 'Improving',
      lastTraining: '2023-12-15',
      violations: 8,
      status: 'Excellent'
    },
    {
      department: 'Marketing',
      currentRate: '89%',
      previousRate: '85%',
      change: '+4%',
      trend: 'Improving',
      lastTraining: '2023-11-20',
      violations: 12,
      status: 'Good'
    },
    {
      department: 'Engineering',
      currentRate: '82%',
      previousRate: '78%',
      change: '+4%',
      trend: 'Improving',
      lastTraining: '2023-10-10',
      violations: 24,
      status: 'Fair'
    },
    {
      department: 'Research',
      currentRate: '68%',
      previousRate: '76%',
      change: '-8%',
      trend: 'Declining',
      lastTraining: '2023-08-15',
      violations: 31,
      status: 'Needs Attention'
    },
    {
      department: 'Operations',
      currentRate: '94%',
      previousRate: '92%',
      change: '+2%',
      trend: 'Stable',
      lastTraining: '2024-01-05',
      violations: 5,
      status: 'Excellent'
    }
  ];

  const openModal = (type: string) => {
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalType('');
  };

  const renderModalContent = () => {
    switch (modalType) {
      case 'cost-saving':
        return (
          <div>
            <Title level={4} style={{ marginBottom: 16 }}>All Cost Saving Opportunities</Title>
            <Table
              dataSource={detailedCostSavingOpportunities}
              pagination={false}
              size="small"
              columns={[
                {
                  title: 'Opportunity',
                  dataIndex: 'title',
                  key: 'title',
                  render: (text, record) => (
                    <div>
                      <Text strong>{text}</Text>
                      <Text style={{ display: 'block', fontSize: 12, color: '#8c8c8c' }}>
                        {record.description}
                      </Text>
                    </div>
                  )
                },
                {
                  title: 'Potential Savings',
                  dataIndex: 'potentialSavings',
                  key: 'potentialSavings',
                  render: (text) => <Text style={{ color: '#52c41a', fontWeight: 500 }}>{text}</Text>
                },
                {
                  title: 'Category',
                  dataIndex: 'category',
                  key: 'category'
                },
                {
                  title: 'Timeline',
                  dataIndex: 'timeframe',
                  key: 'timeframe'
                },
                {
                  title: 'Impact',
                  dataIndex: 'impact',
                  key: 'impact',
                  render: (text) => (
                    <Badge 
                      color={text === 'High' ? '#52c41a' : '#1890ff'} 
                      text={text} 
                    />
                  )
                }
              ]}
            />
          </div>
        );
      
      case 'anomalies':
        return (
          <div>
            <Title level={4} style={{ marginBottom: 16 }}>All Spending Anomalies</Title>
            <Table
              dataSource={detailedSpendingAnomalies}
              pagination={false}
              size="small"
              columns={[
                {
                  title: 'Anomaly',
                  dataIndex: 'title',
                  key: 'title',
                  render: (text, record) => (
                    <div>
                      <Text strong>{text}</Text>
                      <Text style={{ display: 'block', fontSize: 12, color: '#8c8c8c' }}>
                        {record.description}
                      </Text>
                    </div>
                  )
                },
                {
                  title: 'Department',
                  dataIndex: 'department',
                  key: 'department'
                },
                {
                  title: 'Variance',
                  dataIndex: 'variance',
                  key: 'variance',
                  render: (text) => (
                    <Text style={{ color: text.includes('+') ? '#ff4d4f' : '#52c41a', fontWeight: 500 }}>
                      {text}
                    </Text>
                  )
                },
                {
                  title: 'Amount',
                  dataIndex: 'amount',
                  key: 'amount',
                  render: (text) => <Text style={{ fontWeight: 500 }}>{text}</Text>
                },
                {
                  title: 'Status',
                  dataIndex: 'status',
                  key: 'status',
                  render: (text) => (
                    <Badge 
                      color={
                        text === 'Action Required' ? '#ff4d4f' : 
                        text === 'Under Review' ? '#faad14' : '#1890ff'
                      } 
                      text={text} 
                    />
                  )
                }
              ]}
            />
          </div>
        );
      
      case 'compliance':
        return (
          <div>
            <Title level={4} style={{ marginBottom: 16 }}>Detailed Policy Compliance</Title>
            <Table
              dataSource={detailedComplianceData}
              pagination={false}
              size="small"
              columns={[
                {
                  title: 'Department',
                  dataIndex: 'department',
                  key: 'department'
                },
                {
                  title: 'Current Rate',
                  dataIndex: 'currentRate',
                  key: 'currentRate',
                  render: (text) => <Text style={{ fontWeight: 500 }}>{text}</Text>
                },
                {
                  title: 'Change',
                  dataIndex: 'change',
                  key: 'change',
                  render: (text) => (
                    <Text style={{ 
                      color: text.includes('+') ? '#52c41a' : '#ff4d4f', 
                      fontWeight: 500 
                    }}>
                      {text}
                    </Text>
                  )
                },
                {
                  title: 'Violations',
                  dataIndex: 'violations',
                  key: 'violations'
                },
                {
                  title: 'Last Training',
                  dataIndex: 'lastTraining',
                  key: 'lastTraining'
                },
                {
                  title: 'Status',
                  dataIndex: 'status',
                  key: 'status',
                  render: (text) => (
                    <Badge 
                      color={
                        text === 'Excellent' ? '#52c41a' : 
                        text === 'Good' ? '#1890ff' : 
                        text === 'Fair' ? '#faad14' : '#ff4d4f'
                      } 
                      text={text} 
                    />
                  )
                }
              ]}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  const trendInsights = [
    {
      title: 'Q4 Travel Spike',
      description: 'Travel expenses consistently increase by 25-30% in Q4 each year, primarily driven by conference attendance and client meetings.',
    },
    {
      title: 'AirCorp Improvement',
      description: "AirCorp's on-time performance has improved by 12% over the past 6 months, making it the most reliable airline partner.",
    },
    {
      title: 'Summer Lull',
      description: 'June-August shows 15-20% reduction in overall travel expenses, suggesting an opportunity for budget reallocation.',
    },
    {
      title: 'GlobalStay Pricing',
      description: "GlobalStay's average nightly rates have increased by 8% while competitors have maintained stable pricing.",
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
              AI-Powered Insights
            </Title>
            <Text style={{ color: '#8c8c8c' }}>
              Smart recommendations and predictive analytics for your travel expenses
            </Text>
          </div>
          
          <Space>
            <DatePicker.RangePicker
              suffixIcon={<CalendarOutlined />}
              defaultValue={[null, null]}
              placeholder={['Jan 01, 2023', 'Jul 15, 2025']}
              style={{ width: 240 }}
            />
            <Button icon={<FilterOutlined />}>Filters</Button>
            <Button icon={<DownloadOutlined />}>Export</Button>
          </Space>
        </div>

        {/* Content */}
        <div style={{ padding: '32px' }}>
          {/* Tabs */}
          <Tabs 
            defaultActiveKey="insights" 
            items={tabItems}
            style={{ marginBottom: 32 }}
            onChange={(activeKey) => setActiveTab(activeKey)}
          />

          {/* Render content based on active tab */}
          {activeTab === 'insights' && (
            <>
              {/* Top Metrics Cards */}
              <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
            <Col xs={24} md={8}>
              <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>Cost Saving Opportunities</Text>
                  <Badge count="High Impact" style={{ backgroundColor: '#1890ff' }} />
                </div>
                <Title level={2} style={{ margin: 0, marginBottom: 4 }}>
                  $127,500
                </Title>
                <Text style={{ color: '#8c8c8c' }}>
                  Potential annual savings identified
                </Text>
                
                <div style={{ marginTop: 16 }}>
                  {costSavingOpportunities.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 12 }}>
                      {item.icon}
                      <div>
                        <Text style={{ fontWeight: 500, display: 'block', fontSize: 14 }}>
                          {item.title}
                        </Text>
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>
                          {item.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button type="link" style={{ padding: 0, marginTop: 8 }} onClick={() => openModal('cost-saving')}>
                  View All Opportunities
                </Button>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>Spending Anomalies</Text>
                  <Badge count="Attention Needed" style={{ backgroundColor: '#ff4d4f' }} />
                </div>
                <Title level={2} style={{ margin: 0, marginBottom: 4 }}>
                  7
                </Title>
                <Text style={{ color: '#8c8c8c' }}>
                  Unusual spending patterns detected
                </Text>
                
                <div style={{ marginTop: 16 }}>
                  {spendingAnomalies.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 12 }}>
                      {item.icon}
                      <div>
                        <Text style={{ fontWeight: 500, display: 'block', fontSize: 14 }}>
                          {item.title}
                        </Text>
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>
                          {item.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button type="link" style={{ padding: 0, marginTop: 8 }} onClick={() => openModal('anomalies')}>
                  View All Anomalies
                </Button>
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <Text style={{ fontSize: 16, fontWeight: 500 }}>Policy Compliance</Text>
                  <Badge count="Improving" style={{ backgroundColor: '#52c41a' }} />
                </div>
                <Title level={2} style={{ margin: 0, marginBottom: 4 }}>
                  87%
                </Title>
                <Text style={{ color: '#8c8c8c' }}>
                  Overall policy compliance rate
                </Text>
                
                <div style={{ marginTop: 16 }}>
                  {improvingDepartments.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 12 }}>
                      {item.icon}
                      <div>
                        <Text style={{ fontWeight: 500, display: 'block', fontSize: 14 }}>
                          {item.title}
                        </Text>
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>
                          {item.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button type="link" style={{ padding: 0, marginTop: 8 }} onClick={() => openModal('compliance')}>
                  View Compliance Details
                </Button>
              </Card>
            </Col>
          </Row>

          {/* Trend Analysis */}
          <Card style={{ marginBottom: 32 }}>
            <Title level={4} style={{ marginBottom: 8 }}>
              Trend Analysis
            </Title>
            <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
              AI-detected patterns in your expense data
            </Text>
            
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card 
                  size="small" 
                  title="Seasonal Patterns"
                  style={{ height: 300 }}
                >
                  <div style={{ 
                    height: 200, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: '#fafafa',
                    borderRadius: 6,
                    color: '#8c8c8c'
                  }}>
                    Seasonal trend chart would appear here
                  </div>
                </Card>
              </Col>
              
              <Col xs={24} md={12}>
                <Card 
                  size="small" 
                  title="Vendor Performance Trends"
                  style={{ height: 300 }}
                >
                  <div style={{ 
                    height: 200, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: '#fafafa',
                    borderRadius: 6,
                    color: '#8c8c8c'
                  }}>
                    Vendor performance chart would appear here
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>

          {/* Trend Insights Grid */}
          <Row gutter={[24, 24]}>
            {trendInsights.map((insight, index) => (
              <Col xs={24} md={12} key={index}>
                <Card size="small" style={{ height: '100%' }}>
                  <Title level={5} style={{ margin: 0, marginBottom: 8, fontSize: 16 }}>
                    {insight.title}
                  </Title>
                  <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.5 }}>
                    {insight.description}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>
            </>
          )}

          {/* Recommendations Tab Content */}
          {activeTab === 'recommendations' && (
            <div>
              {/* Header with filters */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: 24 
              }}>
                <Title level={3} style={{ margin: 0 }}>
                  Strategic Recommendations
                </Title>
                <Space>
                  <Button>
                    Sort by Impact
                  </Button>
                  <Button icon={<FilterOutlined />}>
                    Filter
                  </Button>
                </Space>
              </div>

              {/* Recommendations Grid */}
              <Row gutter={[24, 24]}>
                {/* Vendor Optimization */}
                <Col xs={24} lg={12}>
                  <Card style={{ height: '100%' }}>
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <Title level={4} style={{ margin: 0 }}>
                          Vendor Optimization
                        </Title>
                        <Badge count="High Impact" style={{ backgroundColor: '#52c41a' }} />
                      </div>
                      <Text style={{ color: '#8c8c8c' }}>
                        Consolidate vendors for better rates and service
                      </Text>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <Text strong style={{ display: 'block', marginBottom: 8 }}>Current Situation</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.5 }}>
                        Your organization currently uses 7 different hotel chains with varying rates and service levels. This fragmentation reduces negotiating power and complicates expense tracking.
                      </Text>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <Text strong style={{ display: 'block', marginBottom: 8 }}>Recommendation</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.5 }}>
                        Consolidate to 3 preferred hotel vendors (GlobalStay, TravelEase, and LuxStay) based on coverage, service quality, and pricing. Negotiate volume-based discounts with these vendors.
                      </Text>
                    </div>

                    <Row gutter={16} style={{ marginBottom: 20 }}>
                      <Col span={12}>
                        <div>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Potential Savings</Text>
                          <Title level={3} style={{ margin: 0, color: '#52c41a' }}>$45,000</Title>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Annual estimate</Text>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Implementation Effort</Text>
                          <Title level={3} style={{ margin: 0 }}>Medium</Title>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>3-4 months to fully implement</Text>
                        </div>
                      </Col>
                    </Row>

                    <Button type="primary" block style={{ backgroundColor: '#1e3a8a' }}>
                      View Implementation Plan
                    </Button>
                  </Card>
                </Col>

                {/* Advance Booking Policy */}
                <Col xs={24} lg={12}>
                  <Card style={{ height: '100%' }}>
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <Title level={4} style={{ margin: 0 }}>
                          Advance Booking Policy
                        </Title>
                        <Badge count="High Impact" style={{ backgroundColor: '#52c41a' }} />
                      </div>
                      <Text style={{ color: '#8c8c8c' }}>
                        Implement stricter advance booking requirements
                      </Text>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <Text strong style={{ display: 'block', marginBottom: 8 }}>Current Situation</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.5 }}>
                        32% of air travel bookings are made less than 7 days before departure, resulting in premium pricing. Data shows no correlation between last-minute bookings and business necessity.
                      </Text>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <Text strong style={{ display: 'block', marginBottom: 8 }}>Recommendation</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.5 }}>
                        Implement a mandatory 14-day advance booking policy for all non-emergency travel, with a formal exception process requiring director-level approval.
                      </Text>
                    </div>

                    <Row gutter={16} style={{ marginBottom: 20 }}>
                      <Col span={12}>
                        <div>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Potential Savings</Text>
                          <Title level={3} style={{ margin: 0, color: '#52c41a' }}>$82,500</Title>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Annual estimate</Text>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Implementation Effort</Text>
                          <Title level={3} style={{ margin: 0 }}>Low</Title>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>1-2 months to fully implement</Text>
                        </div>
                      </Col>
                    </Row>

                    <Button type="primary" block style={{ backgroundColor: '#1e3a8a' }}>
                      View Implementation Plan
                    </Button>
                  </Card>
                </Col>

                {/* Alternative Transport Options */}
                <Col xs={24} lg={12}>
                  <Card style={{ height: '100%' }}>
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <Title level={4} style={{ margin: 0 }}>
                          Alternative Transport Options
                        </Title>
                        <Badge count="Medium Impact" style={{ backgroundColor: '#1890ff' }} />
                      </div>
                      <Text style={{ color: '#8c8c8c' }}>
                        Promote train travel for certain routes
                      </Text>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <Text strong style={{ display: 'block', marginBottom: 8 }}>Current Situation</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.5 }}>
                        Analysis shows that 22% of short-haul flights (under 300 miles) could be replaced with high-speed train options that offer comparable door-to-door travel times.
                      </Text>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <Text strong style={{ display: 'block', marginBottom: 8 }}>Recommendation</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.5 }}>
                        Implement a "Train-First" policy for specific city pairs where train service is competitive, and integrate train booking options into your travel portal.
                      </Text>
                    </div>

                    <Row gutter={16} style={{ marginBottom: 20 }}>
                      <Col span={12}>
                        <div>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Potential Savings</Text>
                          <Title level={3} style={{ margin: 0, color: '#52c41a' }}>$28,750</Title>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Annual estimate</Text>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Implementation Effort</Text>
                          <Title level={3} style={{ margin: 0 }}>Medium</Title>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>2-3 months to fully implement</Text>
                        </div>
                      </Col>
                    </Row>

                    <Button type="primary" block style={{ backgroundColor: '#1e3a8a' }}>
                      View Implementation Plan
                    </Button>
                  </Card>
                </Col>

                {/* Virtual Meeting Incentives */}
                <Col xs={24} lg={12}>
                  <Card style={{ height: '100%' }}>
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <Title level={4} style={{ margin: 0 }}>
                          Virtual Meeting Incentives
                        </Title>
                        <Badge count="Medium Impact" style={{ backgroundColor: '#1890ff' }} />
                      </div>
                      <Text style={{ color: '#8c8c8c' }}>
                        Reduce non-essential travel through incentives
                      </Text>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <Text strong style={{ display: 'block', marginBottom: 8 }}>Current Situation</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.5 }}>
                        Post-pandemic analysis shows that 35% of internal meetings that previously required travel can be effectively conducted virtually with minimal business impact.
                      </Text>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                      <Text strong style={{ display: 'block', marginBottom: 8 }}>Recommendation</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.5 }}>
                        Implement a departmental incentive program where 25% of travel savings from choosing virtual meetings over in-person travel is allocated to team development budgets.
                      </Text>
                    </div>

                    <Row gutter={16} style={{ marginBottom: 20 }}>
                      <Col span={12}>
                        <div>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Potential Savings</Text>
                          <Title level={3} style={{ margin: 0, color: '#52c41a' }}>$35,000</Title>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Annual estimate</Text>
                        </div>
                      </Col>
                      <Col span={12}>
                        <div>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Implementation Effort</Text>
                          <Title level={3} style={{ margin: 0 }}>Low</Title>
                          <Text style={{ fontSize: 12, color: '#8c8c8c' }}>1-2 months to fully implement</Text>
                        </div>
                      </Col>
                    </Row>

                    <Button type="primary" block style={{ backgroundColor: '#1e3a8a' }}>
                      View Implementation Plan
                    </Button>
                  </Card>
                </Col>
              </Row>
            </div>
          )}

          {/* Predictions Tab Content */}
          {activeTab === 'predictions' && (
            <div>
              {/* Expense Forecasts Section */}
              <div style={{ marginBottom: 32 }}>
                <Title level={3} style={{ margin: 0, marginBottom: 8 }}>
                  Expense Forecasts
                </Title>
                <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                  AI-powered predictions for future spending
                </Text>

                {/* Main Forecast Chart */}
                <Card style={{ marginBottom: 24 }}>
                  <div style={{ 
                    height: 300, 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    backgroundColor: '#fafafa',
                    borderRadius: 6,
                    color: '#8c8c8c'
                  }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>📊</div>
                    <Text>Expense forecast chart would appear here</Text>
                    <Text style={{ fontSize: 12, marginTop: 4 }}>
                      Showing 12-month projections with confidence intervals
                    </Text>
                  </div>
                </Card>

                {/* Forecast Cards */}
                <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
                  <Col xs={24} md={8}>
                    <Card>
                      <div style={{ textAlign: 'center', marginBottom: 16 }}>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Q4 2023 Forecast</Text>
                        <Title level={2} style={{ margin: 0, marginBottom: 4 }}>
                          $487,250
                        </Title>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>
                          -31% vs Q3 actual
                        </Text>
                        <Text style={{ fontSize: 12, color: '#8c8c8c', display: 'block' }}>
                          Confidence: 92%
                        </Text>
                      </div>
                      
                      <div style={{ marginBottom: 8 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>Air Travel</Text>
                          <Text style={{ fontSize: 12, fontWeight: 500 }}>$210,260</Text>
                        </div>
                        <div style={{ height: 4, backgroundColor: '#f0f0f0', borderRadius: 2, marginBottom: 4 }}>
                          <div style={{ width: '43%', height: '100%', backgroundColor: '#1890ff', borderRadius: 2 }}></div>
                        </div>
                      </div>

                      <div style={{ marginBottom: 8 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>Hotels</Text>
                          <Text style={{ fontSize: 12, fontWeight: 500 }}>$179,540</Text>
                        </div>
                        <div style={{ height: 4, backgroundColor: '#f0f0f0', borderRadius: 2, marginBottom: 4 }}>
                          <div style={{ width: '37%', height: '100%', backgroundColor: '#52c41a', borderRadius: 2 }}></div>
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>Ground Transport</Text>
                          <Text style={{ fontSize: 12, fontWeight: 500 }}>$97,450</Text>
                        </div>
                        <div style={{ height: 4, backgroundColor: '#f0f0f0', borderRadius: 2 }}>
                          <div style={{ width: '20%', height: '100%', backgroundColor: '#722ed1', borderRadius: 2 }}></div>
                        </div>
                      </div>
                    </Card>
                  </Col>

                  <Col xs={24} md={8}>
                    <Card>
                      <div style={{ textAlign: 'center', marginBottom: 16 }}>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Q1 2024 Forecast</Text>
                        <Title level={2} style={{ margin: 0, marginBottom: 4 }}>
                          $512,800
                        </Title>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>
                          +5% vs Q4 forecast
                        </Text>
                        <Text style={{ fontSize: 12, color: '#8c8c8c', display: 'block' }}>
                          Confidence: 85%
                        </Text>
                      </div>
                      
                      <div style={{ marginBottom: 8 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>Air Travel</Text>
                          <Text style={{ fontSize: 12, fontWeight: 500 }}>$230,760</Text>
                        </div>
                        <div style={{ height: 4, backgroundColor: '#f0f0f0', borderRadius: 2, marginBottom: 4 }}>
                          <div style={{ width: '45%', height: '100%', backgroundColor: '#1890ff', borderRadius: 2 }}></div>
                        </div>
                      </div>

                      <div style={{ marginBottom: 8 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>Hotels</Text>
                          <Text style={{ fontSize: 12, fontWeight: 500 }}>$179,480</Text>
                        </div>
                        <div style={{ height: 4, backgroundColor: '#f0f0f0', borderRadius: 2, marginBottom: 4 }}>
                          <div style={{ width: '35%', height: '100%', backgroundColor: '#52c41a', borderRadius: 2 }}></div>
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>Ground Transport</Text>
                          <Text style={{ fontSize: 12, fontWeight: 500 }}>$102,560</Text>
                        </div>
                        <div style={{ height: 4, backgroundColor: '#f0f0f0', borderRadius: 2 }}>
                          <div style={{ width: '20%', height: '100%', backgroundColor: '#722ed1', borderRadius: 2 }}></div>
                        </div>
                      </div>
                    </Card>
                  </Col>

                  <Col xs={24} md={8}>
                    <Card>
                      <div style={{ textAlign: 'center', marginBottom: 16 }}>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>Annual 2024 Forecast</Text>
                        <Title level={2} style={{ margin: 0, marginBottom: 4 }}>
                          $1,925,000
                        </Title>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>
                          +8.5% vs 2023 projected
                        </Text>
                        <Text style={{ fontSize: 12, color: '#8c8c8c', display: 'block' }}>
                          Confidence: 78%
                        </Text>
                      </div>
                      
                      <div style={{ marginBottom: 8 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>Air Travel</Text>
                          <Text style={{ fontSize: 12, fontWeight: 500 }}>$866,250</Text>
                        </div>
                        <div style={{ height: 4, backgroundColor: '#f0f0f0', borderRadius: 2, marginBottom: 4 }}>
                          <div style={{ width: '45%', height: '100%', backgroundColor: '#1890ff', borderRadius: 2 }}></div>
                        </div>
                      </div>

                      <div style={{ marginBottom: 8 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>Hotels</Text>
                          <Text style={{ fontSize: 12, fontWeight: 500 }}>$673,750</Text>
                        </div>
                        <div style={{ height: 4, backgroundColor: '#f0f0f0', borderRadius: 2, marginBottom: 4 }}>
                          <div style={{ width: '35%', height: '100%', backgroundColor: '#52c41a', borderRadius: 2 }}></div>
                        </div>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <Text style={{ fontSize: 12 }}>Ground Transport</Text>
                          <Text style={{ fontSize: 12, fontWeight: 500 }}>$385,000</Text>
                        </div>
                        <div style={{ height: 4, backgroundColor: '#f0f0f0', borderRadius: 2 }}>
                          <div style={{ width: '20%', height: '100%', backgroundColor: '#722ed1', borderRadius: 2 }}></div>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>

              {/* Bottom Section - Budget Impact and Market Trends */}
              <Row gutter={[24, 24]}>
                <Col xs={24} lg={12}>
                  <Card style={{ height: '100%' }}>
                    <Title level={4} style={{ marginBottom: 8 }}>
                      Budget Impact Analysis
                    </Title>
                    <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                      Projected impact on departmental budgets
                    </Text>
                    
                    <div style={{ 
                      height: 200, 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: '#fafafa',
                      borderRadius: 6,
                      color: '#8c8c8c',
                      marginBottom: 24
                    }}>
                      <div style={{ fontSize: 32, marginBottom: 8 }}>📊</div>
                      <Text>Budget impact chart would appear here</Text>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <Text strong style={{ display: 'block', marginBottom: 8 }}>Budget Risk Assessment</Text>
                      
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                          <Text style={{ fontSize: 14 }}>Sales Department</Text>
                          <Badge count="High Risk" style={{ backgroundColor: '#ff4d4f' }} />
                        </div>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>
                          Projected to exceed annual budget by 16% based on current spending patterns.
                        </Text>
                      </div>

                      <div style={{ marginBottom: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                          <Text style={{ fontSize: 14 }}>Engineering Department</Text>
                          <Badge count="Medium Risk" style={{ backgroundColor: '#faad14' }} />
                        </div>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>
                          Projected to exceed annual budget by 7% based on current spending patterns.
                        </Text>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                          <Text style={{ fontSize: 14 }}>Marketing Department</Text>
                          <Badge count="Low Risk" style={{ backgroundColor: '#52c41a' }} />
                        </div>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>
                          Projected to remain 5% under budget based on current spending patterns.
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col xs={24} lg={12}>
                  <Card style={{ height: '100%' }}>
                    <Title level={4} style={{ marginBottom: 8 }}>
                      Market Trend Predictions
                    </Title>
                    <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                      Forecasted changes in travel market conditions
                    </Text>
                    
                    <div style={{ 
                      height: 200, 
                      display: 'flex', 
                      flexDirection: 'column',
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: '#fafafa',
                      borderRadius: 6,
                      color: '#8c8c8c',
                      marginBottom: 24
                    }}>
                      <div style={{ fontSize: 32, marginBottom: 8 }}>📈</div>
                      <Text>Market trend chart would appear here</Text>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <Text strong style={{ display: 'block', marginBottom: 8 }}>Predicted Market Changes</Text>
                      
                      <div style={{ marginBottom: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                          <Text style={{ fontSize: 14 }}>Airline Pricing</Text>
                          <Text style={{ fontSize: 14, color: '#ff4d4f', fontWeight: 500 }}>+6-10%</Text>
                        </div>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>
                          Industry forecasts predict 6-10% increase in business airfares over the next 6 months due to increased demand.
                        </Text>
                      </div>

                      <div style={{ marginBottom: 12 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                          <Text style={{ fontSize: 14 }}>Hotel Rates</Text>
                          <Text style={{ fontSize: 14, color: '#faad14', fontWeight: 500 }}>+4-6%</Text>
                        </div>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>
                          Moderate increases expected in major business hubs, stable in secondary markets.
                        </Text>
                      </div>

                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                          <Text style={{ fontSize: 14 }}>Ground Transport</Text>
                          <Text style={{ fontSize: 14, color: '#52c41a', fontWeight: 500 }}>-2-3%</Text>
                        </div>
                        <Text style={{ fontSize: 12, color: '#8c8c8c' }}>
                          Increased competition in ride-sharing market expected to drive slight price decreases.
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          )}

          {activeTab === 'assistant' && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <Title level={3}>AI Assistant</Title>
              <Text style={{ color: '#8c8c8c' }}>
                AI Assistant interface will be available here
              </Text>
            </div>
          )}
        </div>
      </Layout>

      {/* Modal for detailed views */}
      <Modal
        title={null}
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
        width={1000}
        closeIcon={<CloseOutlined />}
        bodyStyle={{ padding: '24px' }}
      >
        {renderModalContent()}
      </Modal>
    </Layout>
  );
};

export default AIInsights;

import React, { useState } from 'react';
import { Layout, Typography, Card, Row, Col, Input, Button, Select, Avatar, Space, Tabs } from 'antd';
import { 
  UserOutlined, 

  FileTextOutlined, 
  CreditCardOutlined, 
  BellOutlined, 
  LinkOutlined, 
  SecurityScanOutlined, 
  SettingOutlined,
  CameraOutlined
} from '@ant-design/icons';
import { Sidebar } from '@/components/dashboard/sidebar';

const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabItems = [
    {
      key: 'profile',
      label: (
        <Space>
          <UserOutlined />
          Profile
        </Space>
      ),
    },
    {
      key: 'company',
      label: (
        <Space>

          Company
        </Space>
      ),
    },
    {
      key: 'travel-policy',
      label: (
        <Space>
          <FileTextOutlined />
          Travel Policy
        </Space>
      ),
    },
    {
      key: 'payment-methods',
      label: (
        <Space>
          <CreditCardOutlined />
          Payment Methods
        </Space>
      ),
    },
    {
      key: 'notifications',
      label: (
        <Space>
          <BellOutlined />
          Notifications
        </Space>
      ),
    },
    {
      key: 'integrations',
      label: (
        <Space>
          <LinkOutlined />
          Integrations
        </Space>
      ),
    },
    {
      key: 'security',
      label: (
        <Space>
          <SecurityScanOutlined />
          Security
        </Space>
      ),
    },
    {
      key: 'preferences',
      label: (
        <Space>
          <SettingOutlined />
          Preferences
        </Space>
      ),
    },
  ];

  const ProfileContent = () => (
    <div>
      <Title level={3} style={{ marginBottom: 8 }}>
        Profile Settings
      </Title>
      <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 32 }}>
        Manage your personal information and preferences
      </Text>

      <Row gutter={[32, 24]}>
        <Col xs={24} lg={8}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ position: 'relative', display: 'inline-block', marginBottom: 16 }}>
              <Avatar 
                size={120} 
                style={{ backgroundColor: '#f5f5f5', color: '#8c8c8c', fontSize: 48 }}
                icon={<UserOutlined />}
              />
              <Button
                type="text"
                icon={<CameraOutlined />}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  backgroundColor: '#fff',
                  border: '1px solid #d9d9d9',
                  borderRadius: '50%',
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
            </div>
            <Button type="link" style={{ padding: 0 }}>
              Change Photo
            </Button>
          </div>
        </Col>

        <Col xs={24} lg={16}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <div style={{ marginBottom: 16 }}>
                <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                  First Name
                </Text>
                <Input defaultValue="John" />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ marginBottom: 16 }}>
                <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                  Last Name
                </Text>
                <Input defaultValue="Doe" />
              </div>
            </Col>
            <Col xs={24}>
              <div style={{ marginBottom: 16 }}>
                <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                  Email
                </Text>
                <Input defaultValue="john.doe@example.com" />
              </div>
            </Col>
            <Col xs={24}>
              <div style={{ marginBottom: 16 }}>
                <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                  Phone Number
                </Text>
                <Input defaultValue="+1 (555) 123-4567" />
              </div>
            </Col>
            <Col xs={24}>
              <div style={{ marginBottom: 16 }}>
                <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                  Job Title
                </Text>
                <Input defaultValue="Senior Product Manager" />
              </div>
            </Col>
            <Col xs={24}>
              <div style={{ marginBottom: 24 }}>
                <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
                  Department
                </Text>
                <Select defaultValue="Product" style={{ width: '100%' }}>
                  <Option value="Product">Product</Option>
                  <Option value="Engineering">Engineering</Option>
                  <Option value="Sales">Sales</Option>
                  <Option value="Marketing">Marketing</Option>
                  <Option value="Finance">Finance</Option>
                </Select>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Title level={3} style={{ marginTop: 40, marginBottom: 16 }}>
        Travel Preferences
      </Title>

      <Row gutter={[24, 16]}>
        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Seat Preference
            </Text>
            <Select defaultValue="Window" style={{ width: '100%' }}>
              <Option value="Window">Window</Option>
              <Option value="Aisle">Aisle</Option>
              <Option value="Middle">Middle</Option>
            </Select>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Meal Preference
            </Text>
            <Select defaultValue="Regular" style={{ width: '100%' }}>
              <Option value="Regular">Regular</Option>
              <Option value="Vegetarian">Vegetarian</Option>
              <Option value="Vegan">Vegan</Option>
              <Option value="Halal">Halal</Option>
              <Option value="Kosher">Kosher</Option>
            </Select>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Frequent Flyer Programs
            </Text>
            <Input defaultValue="AA 123456789, DL 987654321" />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Hotel Loyalty Programs
            </Text>
            <Input defaultValue="Marriott Bonvoy, Hilton Honors" />
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: 32, textAlign: 'right' }}>
        <Space>
          <Button>Cancel</Button>
          <Button type="primary">Save Changes</Button>
        </Space>
      </div>
    </div>
  );

  const CompanyContent = () => (
    <div>
      <Title level={3} style={{ marginBottom: 8 }}>
        Company Settings
      </Title>
      <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 32 }}>
        Manage your company information and branding
      </Text>

      <Row gutter={[24, 24]}>
        <Col xs={24}>
          <div style={{ marginBottom: 24 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Company Name
            </Text>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 8,
                padding: '8px 16px',
                backgroundColor: '#f5f5f5',
                borderRadius: 6,
                border: '1px solid #d9d9d9',
                minWidth: 200
              }}>
                <div style={{
                  width: 24,
                  height: 24,
                  backgroundColor: '#1890ff',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 12,
                  fontWeight: 'bold'
                }}>
                  I
                </div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: 14 }}>INFINITI</div>
                  <div style={{ fontSize: 12, color: '#8c8c8c' }}>Inspiring Travel Innovation</div>
                </div>
              </div>
              <Input 
                defaultValue="Infiniti Software Solutions" 
                style={{ flex: 1 }}
              />
            </div>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Industry
            </Text>
            <Select defaultValue="Technology" style={{ width: '100%' }}>
              <Option value="Technology">Technology</Option>
              <Option value="Finance">Finance</Option>
              <Option value="Healthcare">Healthcare</Option>
              <Option value="Manufacturing">Manufacturing</Option>
              <Option value="Retail">Retail</Option>
            </Select>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Company Size
            </Text>
            <Select defaultValue="51-200 employees" style={{ width: '100%' }}>
              <Option value="1-10 employees">1-10 employees</Option>
              <Option value="11-50 employees">11-50 employees</Option>
              <Option value="51-200 employees">51-200 employees</Option>
              <Option value="201-500 employees">201-500 employees</Option>
              <Option value="500+ employees">500+ employees</Option>
            </Select>
          </div>
        </Col>

        <Col xs={24}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Address
            </Text>
            <Input defaultValue="123 Corporate Drive" />
          </div>
        </Col>

        <Col xs={24} md={8}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              City
            </Text>
            <Input defaultValue="San Francisco" />
          </div>
        </Col>

        <Col xs={24} md={8}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              State/Province
            </Text>
            <Input defaultValue="CA" />
          </div>
        </Col>

        <Col xs={24} md={8}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Zip/Postal Code
            </Text>
            <Input defaultValue="94105" />
          </div>
        </Col>

        <Col xs={24}>
          <div style={{ marginBottom: 32 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Country
            </Text>
            <Select defaultValue="United States" style={{ width: '100%' }}>
              <Option value="United States">United States</Option>
              <Option value="Canada">Canada</Option>
              <Option value="United Kingdom">United Kingdom</Option>
              <Option value="Germany">Germany</Option>
              <Option value="France">France</Option>
            </Select>
          </div>
        </Col>
      </Row>

      <Title level={3} style={{ marginTop: 40, marginBottom: 16 }}>
        Fiscal Settings
      </Title>

      <Row gutter={[24, 16]}>
        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Fiscal Year Start
            </Text>
            <Select defaultValue="January" style={{ width: '100%' }}>
              <Option value="January">January</Option>
              <Option value="February">February</Option>
              <Option value="March">March</Option>
              <Option value="April">April</Option>
              <Option value="May">May</Option>
              <Option value="June">June</Option>
              <Option value="July">July</Option>
              <Option value="August">August</Option>
              <Option value="September">September</Option>
              <Option value="October">October</Option>
              <Option value="November">November</Option>
              <Option value="December">December</Option>
            </Select>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Default Currency
            </Text>
            <Select defaultValue="USD ($)" style={{ width: '100%' }}>
              <Option value="USD ($)">USD ($)</Option>
              <Option value="EUR (€)">EUR (€)</Option>
              <Option value="GBP (£)">GBP (£)</Option>
              <Option value="CAD ($)">CAD ($)</Option>
              <Option value="JPY (¥)">JPY (¥)</Option>
            </Select>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Tax ID / EIN
            </Text>
            <Input defaultValue="12-3456789" />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div style={{ marginBottom: 16 }}>
            <Text style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>
              Default Tax Rate (%)
            </Text>
            <Input defaultValue="8.5" />
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: 32, textAlign: 'right' }}>
        <Space>
          <Button>Cancel</Button>
          <Button type="primary">Save Changes</Button>
        </Space>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileContent />;
      case 'company':
          return <CompanyContent />;
      default:
        return (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <Text style={{ color: '#8c8c8c', fontSize: 16 }}>
              {tabItems.find(item => item.key === activeTab)?.label} content coming soon...
            </Text>
          </div>
        );
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Sidebar />

      <Layout style={{ marginLeft: 256 }}>
        {/* Header */}
        <div style={{
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          padding: '16px 32px'
        }}>
          <Title level={2} style={{ margin: 0, marginBottom: 4 }}>
            Settings
          </Title>
          <Text style={{ color: '#8c8c8c' }}>
            Manage your account and application preferences
          </Text>
        </div>

        <Content style={{ padding: '32px' }}>
          <Row gutter={32}>
            {/* Left Sidebar Tabs */}
            <Col xs={24} lg={6}>
              <Card style={{ marginBottom: 24 }}>
                <Tabs
                  tabPosition="left"
                  activeKey={activeTab}
                  onChange={setActiveTab}
                  items={tabItems.map(item => ({
                    ...item,
                    children: null
                  }))}
                  style={{
                    '.ant-tabs-tab': {
                      justifyContent: 'flex-start'
                    }
                  }}
                />
              </Card>
            </Col>

            {/* Main Content */}
            <Col xs={24} lg={18}>
              <Card>
                {renderTabContent()}
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
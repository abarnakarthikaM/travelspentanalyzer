
import React, { useState } from 'react';
import { Layout, Typography, Button, Space, Row, Col, Card, Progress, Tabs, Tag, DatePicker, Modal } from 'antd';
import { CalendarOutlined, FilterOutlined, DownloadOutlined, CheckCircleOutlined, ExclamationCircleOutlined, WarningOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Sidebar } from '@/components/dashboard/sidebar';
import { PolicyViolations } from '@/components/dashboard/policy-violations';
import { DepartmentCompliance } from '@/components/dashboard/department-compliance';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function ComplianceMetrics() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const showEmployeeModal = (employee: any) => {
    setSelectedEmployee(employee);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedEmployee(null);
  };

  // Metrics data
  const metricsData = [
    {
      title: 'Overall Compliance',
      value: '87%',
      change: '+3.5%',
      changeType: 'positive',
      subtitle: 'from previous period',
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />
    },
    {
      title: 'Policy Violations',
      value: '143',
      change: '-12%',
      changeType: 'positive',
      subtitle: 'from previous period',
      icon: <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />,
      details: [
        { label: 'High Severity', value: 28 },
        { label: 'Medium Severity', value: 67 },
        { label: 'Low Severity', value: 48 }
      ]
    },
    {
      title: 'Pending Approvals',
      value: '27',
      change: '+34%',
      changeType: 'negative',
      subtitle: 'from previous period',
      icon: <WarningOutlined style={{ color: '#faad14' }} />,
      details: [
        { label: 'Awaiting Manager', value: 18 },
        { label: 'Awaiting Finance', value: 9 },
        { label: 'Average Wait Time', value: '2.3 days' }
      ]
    },
    {
      title: 'Policy Savings',
      value: '$87,450',
      change: '+16.2%',
      changeType: 'positive',
      subtitle: 'from previous period',
      icon: <InfoCircleOutlined style={{ color: '#1890ff' }} />,
      details: [
        { label: 'Estimated Annual Savings', value: '$349,800' }
      ]
    }
  ];

  // Policy compliance data
  const policyComplianceData = [
    { category: 'Advance Booking', percentage: 92, status: 'Excellent', change: '+4.5%', color: '#52c41a' },
    { category: 'Preferred Vendors', percentage: 88, status: 'Good', change: '+2.1%', color: '#1890ff' },
    { category: 'Expense Documentation', percentage: 85, status: 'Good', change: '+5.3%', color: '#1890ff' },
    { category: 'Approval Workflow', percentage: 95, status: 'Excellent', change: '+1.2%', color: '#52c41a' },
    { category: 'Lodging Limits', percentage: 76, status: 'Needs Improvement', change: '-2.8%', color: '#faad14' },
    { category: 'Class of Service', percentage: 82, status: 'Good', change: '+3.7%', color: '#1890ff' }
  ];

  // Employee data
  const topCompliantEmployees = [
    { name: 'Emily Wilson', department: 'Marketing', compliance: 100 },
    { name: 'Robert Chen', department: 'Finance', compliance: 100 },
    { name: 'Sarah Johnson', department: 'Sales', compliance: 98 },
    { name: 'Thomas Garcia', department: 'Engineering', compliance: 97 },
    { name: 'Lisa Wong', department: 'HR', compliance: 96 }
  ];

  const needsImprovementEmployees = [
    { 
      name: 'David Rodriguez', 
      department: 'Sales', 
      compliance: 68,
      details: {
        total_bookings: 9,
        policy_violations: 9,
        employee_name: "David Rodriguez",
        department: "Sales",
        designation: "Sales Manager",
        employee_band: "B2",
        compliance_rate: 68.0,
        total_amount: "29,342.00",
        violation_amount: "29,342.00",
        violated_policies: ["Distance Policy"],
        status: "Critical",
        status_color: "red"
      }
    },
    { 
      name: 'Jennifer Smith', 
      department: 'Marketing', 
      compliance: 72,
      details: {
        total_bookings: 12,
        policy_violations: 7,
        employee_name: "Jennifer Smith",
        department: "Marketing",
        designation: "Marketing Specialist",
        employee_band: "B1",
        compliance_rate: 72.0,
        total_amount: "24,580.00",
        violation_amount: "18,920.00",
        violated_policies: ["Advance Booking Policy", "Preferred Vendor Policy"],
        status: "High Risk",
        status_color: "orange"
      }
    },
    { 
      name: 'Michael Brown', 
      department: 'Engineering', 
      compliance: 75,
      details: {
        total_bookings: 8,
        policy_violations: 5,
        employee_name: "Michael Brown",
        department: "Engineering",
        designation: "Senior Developer",
        employee_band: "B3",
        compliance_rate: 75.0,
        total_amount: "18,750.00",
        violation_amount: "12,500.00",
        violated_policies: ["Class of Service Policy"],
        status: "Medium Risk",
        status_color: "orange"
      }
    },
    { 
      name: 'Amanda Lee', 
      department: 'Sales', 
      compliance: 76,
      details: {
        total_bookings: 15,
        policy_violations: 6,
        employee_name: "Amanda Lee",
        department: "Sales",
        designation: "Account Executive",
        employee_band: "B2",
        compliance_rate: 76.0,
        total_amount: "35,200.00",
        violation_amount: "15,800.00",
        violated_policies: ["Lodging Limits Policy", "Distance Policy"],
        status: "Medium Risk",
        status_color: "orange"
      }
    },
    { 
      name: 'Kevin Patel', 
      department: 'Product', 
      compliance: 78,
      details: {
        total_bookings: 6,
        policy_violations: 3,
        employee_name: "Kevin Patel",
        department: "Product",
        designation: "Product Manager",
        employee_band: "B3",
        compliance_rate: 78.0,
        total_amount: "16,890.00",
        violation_amount: "8,430.00",
        violated_policies: ["Expense Documentation Policy"],
        status: "Low Risk",
        status_color: "yellow"
      }
    }
  ];

  const getComplianceColor = (compliance: number) => {
    if (compliance >= 95) return '#52c41a';
    if (compliance >= 80) return '#faad14';
    return '#ff4d4f';
  };

  const getTooltipContent = (details: any) => (
    <div style={{ maxWidth: 300 }}>
      <div style={{ marginBottom: 8, fontWeight: 'bold', color: '#fff' }}>
        Employee Details
      </div>
      <div style={{ fontSize: 12, lineHeight: 1.6 }}>
        <div><strong>Name:</strong> {details.employee_name}</div>
        <div><strong>Department:</strong> {details.department}</div>
        <div><strong>Designation:</strong> {details.designation}</div>
        <div><strong>Employee Band:</strong> {details.employee_band}</div>
        <div style={{ margin: '8px 0', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 8 }}>
          <div><strong>Total Bookings:</strong> {details.total_bookings}</div>
          <div><strong>Policy Violations:</strong> {details.policy_violations}</div>
          <div><strong>Compliance Rate:</strong> {details.compliance_rate}%</div>
        </div>
        <div style={{ margin: '8px 0', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 8 }}>
          <div><strong>Total Amount:</strong> ${details.total_amount}</div>
          <div><strong>Violation Amount:</strong> ${details.violation_amount}</div>
        </div>
        <div style={{ margin: '8px 0', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 8 }}>
          <div><strong>Violated Policies:</strong></div>
          <div style={{ marginLeft: 8 }}>
            {details.violated_policies.map((policy: string, idx: number) => (
              <div key={idx}>• {policy}</div>
            ))}
          </div>
        </div>
        <div style={{ margin: '8px 0', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: 8 }}>
          <div><strong>Status:</strong> <span style={{ color: details.status_color }}>{details.status}</span></div>
        </div>
      </div>
    </div>
  );

  const tabItems = [
    {
      key: 'overview',
      label: 'Compliance Overview',
      children: (
        <div>
          {/* Compliance by Policy Category */}
          <div style={{ marginBottom: 32 }}>
            <Title level={3} style={{ marginBottom: 8 }}>
              Compliance by Policy Category
            </Title>
            <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
              Breakdown of compliance across different policy areas
            </Text>

            <div style={{ maxWidth: 800 }}>
              {policyComplianceData.map((policy, index) => (
                <div key={index} style={{ marginBottom: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <Text style={{ fontWeight: 500, minWidth: 150 }}>{policy.category}</Text>
                      <Tag color={policy.status === 'Excellent' ? 'green' : policy.status === 'Good' ? 'blue' : 'orange'}>
                        {policy.status}
                      </Tag>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <Text style={{ fontWeight: 'bold' }}>{policy.percentage}%</Text>
                      <Text style={{ 
                        color: policy.change.startsWith('+') ? '#52c41a' : '#ff4d4f',
                        fontWeight: 500,
                        minWidth: 50,
                        textAlign: 'right'
                      }}>
                        {policy.change}
                      </Text>
                    </div>
                  </div>
                  <Progress 
                    percent={policy.percentage} 
                    strokeColor={policy.color}
                    showInfo={false}
                    strokeWidth={8}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Employee Lists Section */}
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <Card style={{ height: 400 }}>
                <Title level={4} style={{ marginBottom: 8 }}>
                  Top Compliant Employees
                </Title>
                <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                  Employees with highest policy adherence
                </Text>
                
                <div style={{ maxHeight: 280, overflowY: 'auto' }}>
                  {topCompliantEmployees.map((employee, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: index < topCompliantEmployees.length - 1 ? '1px solid #f0f0f0' : 'none'
                    }}>
                      <div>
                        <Text style={{ fontWeight: 500, display: 'block' }}>{employee.name}</Text>
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>{employee.department}</Text>
                      </div>
                      <Tag color={getComplianceColor(employee.compliance)} style={{ fontWeight: 'bold' }}>
                        {employee.compliance}%
                      </Tag>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <Card style={{ height: 400 }}>
                <Title level={4} style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                  Needs Improvement
                  <InfoCircleOutlined style={{ color: '#8c8c8c', fontSize: 16 }} />
                </Title>
                <Text style={{ color: '#8c8c8c', display: 'block', marginBottom: 24 }}>
                  Employees with lowest policy adherence
                </Text>
                
                <div style={{ maxHeight: 280, overflowY: 'auto' }}>
                  {needsImprovementEmployees.map((employee, index) => (
                    <div key={index} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: index < needsImprovementEmployees.length - 1 ? '1px solid #f0f0f0' : 'none'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div>
                          <Text style={{ fontWeight: 500, display: 'block' }}>{employee.name}</Text>
                          <Text style={{ color: '#8c8c8c', fontSize: 12 }}>{employee.department}</Text>
                        </div>
                        <InfoCircleOutlined 
                          style={{ color: '#8c8c8c', fontSize: 14, cursor: 'pointer' }} 
                          onClick={() => showEmployeeModal(employee)}
                        />
                      </div>
                      <Tag color={getComplianceColor(employee.compliance)} style={{ fontWeight: 'bold' }}>
                        {employee.compliance}%
                      </Tag>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      )
    },
    {
      key: 'violations',
      label: 'Policy Violations',
      children: <PolicyViolations />
    },
    {
      key: 'department',
      label: 'By Department',
      children: <DepartmentCompliance />
    },
    {
      key: 'trends',
      label: 'Trends & Analysis',
      children: <div style={{ padding: 24 }}>Trends and analysis content</div>
    }
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
              Compliance Metrics
            </Title>
            <Text style={{ color: '#8c8c8c' }}>
              Monitor and improve travel policy compliance across your organization
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

        <Content style={{ padding: '32px' }}>
          {/* Top Metrics Cards */}
          <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
            {metricsData.map((metric, index) => (
              <Col xs={24} lg={6} key={index}>
                <Card style={{ height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <Title level={4} style={{ margin: 0, fontSize: 16 }}>
                      {metric.title}
                    </Title>
                    {metric.icon}
                  </div>
                  
                  <Title level={1} style={{ margin: 0, marginBottom: 8, fontSize: 32 }}>
                    {metric.value}
                  </Title>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                    <Text style={{ 
                      color: metric.changeType === 'positive' ? '#52c41a' : '#ff4d4f',
                      fontWeight: 500
                    }}>
                      {metric.change}
                    </Text>
                    <Text style={{ color: '#8c8c8c', fontSize: 12 }}>
                      {metric.subtitle}
                    </Text>
                  </div>

                  {metric.details && (
                    <div style={{ fontSize: 12, color: '#8c8c8c' }}>
                      {metric.details.map((detail, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                          <span>{detail.label}</span>
                          <span style={{ fontWeight: 500 }}>{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </Col>
            ))}
          </Row>

          {/* Tabs Section */}
          <Card style={{ marginBottom: 32 }}>
            <Tabs 
              defaultActiveKey="overview" 
              items={tabItems}
            />
          </Card>

          
        </Content>
      </Layout>

      {/* Employee Details Modal */}
      <Modal
        title={null}
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={600}
        style={{ top: 20 }}
        bodyStyle={{ padding: 0 }}
      >
        {selectedEmployee && (
          <div>
            {/* Header Section with Gradient Background */}
            <div style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '24px',
              borderRadius: '8px 8px 0 0',
              color: 'white',
              position: 'relative'
            }}>
              <Button
                type="text"
                icon={<span style={{ color: 'white', fontSize: '18px' }}>×</span>}
                onClick={handleModalClose}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  border: 'none',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  {selectedEmployee.details.employee_name.split(' ').map((n: string) => n[0]).join('')}
                </div>
                
                <div>
                  <Title level={3} style={{ margin: 0, color: 'white', marginBottom: 4 }}>
                    {selectedEmployee.details.employee_name}
                  </Title>
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16 }}>
                    {selectedEmployee.details.designation}
                  </Text>
                  <div style={{ marginTop: 4 }}>
                    <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>
                      {selectedEmployee.details.department} • Band {selectedEmployee.details.employee_band}
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div style={{ padding: '24px' }}>
              {/* Status and Compliance Rate */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: 24,
                padding: '16px',
                background: '#f8f9fa',
                borderRadius: 8,
                border: '1px solid #e9ecef'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <Text style={{ color: '#6c757d', fontSize: 12, display: 'block', marginBottom: 4 }}>
                    Compliance Rate
                  </Text>
                  <Title level={2} style={{ 
                    margin: 0, 
                    color: getComplianceColor(selectedEmployee.details.compliance_rate),
                    fontSize: 28
                  }}>
                    {selectedEmployee.details.compliance_rate}%
                  </Title>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Text style={{ color: '#6c757d', fontSize: 12, display: 'block', marginBottom: 4 }}>
                    Current Status
                  </Text>
                  <Tag 
                    color={selectedEmployee.details.status_color} 
                    style={{ 
                      fontSize: 14, 
                      fontWeight: 'bold',
                      padding: '6px 12px',
                      borderRadius: 16
                    }}
                  >
                    {selectedEmployee.details.status}
                  </Tag>
                </div>
              </div>

              {/* Stats Grid */}
              <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
                <Col span={12}>
                  <div style={{ 
                    textAlign: 'center', 
                    padding: 20,
                    background: '#fff',
                    borderRadius: 8,
                    border: '1px solid #e9ecef',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ 
                      width: 40, 
                      height: 40, 
                      background: '#e3f2fd', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 8px'
                    }}>
                      <span style={{ color: '#1976d2', fontSize: 18 }}>📊</span>
                    </div>
                    <Title level={3} style={{ margin: 0, marginBottom: 4 }}>
                      {selectedEmployee.details.total_bookings}
                    </Title>
                    <Text style={{ color: '#6c757d', fontSize: 12 }}>Total Bookings</Text>
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{ 
                    textAlign: 'center', 
                    padding: 20,
                    background: '#fff',
                    borderRadius: 8,
                    border: '1px solid #e9ecef',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ 
                      width: 40, 
                      height: 40, 
                      background: '#ffebee', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 8px'
                    }}>
                      <span style={{ color: '#d32f2f', fontSize: 18 }}>⚠️</span>
                    </div>
                    <Title level={3} style={{ margin: 0, marginBottom: 4, color: '#ff4d4f' }}>
                      {selectedEmployee.details.policy_violations}
                    </Title>
                    <Text style={{ color: '#6c757d', fontSize: 12 }}>Policy Violations</Text>
                  </div>
                </Col>
              </Row>

              {/* Financial Summary */}
              <div style={{ marginBottom: 24 }}>
                <Title level={5} style={{ marginBottom: 16, color: '#495057' }}>
                  💰 Financial Summary
                </Title>
                <div style={{ 
                  background: '#f8f9fa',
                  padding: 16,
                  borderRadius: 8,
                  border: '1px solid #e9ecef'
                }}>
                  <Row gutter={[16, 12]}>
                    <Col span={12}>
                      <Text style={{ color: '#6c757d', fontSize: 13, display: 'block' }}>Total Amount</Text>
                      <Text style={{ fontWeight: 600, fontSize: 16, color: '#495057' }}>
                        ${selectedEmployee.details.total_amount}
                      </Text>
                    </Col>
                    <Col span={12}>
                      <Text style={{ color: '#6c757d', fontSize: 13, display: 'block' }}>Violation Amount</Text>
                      <Text style={{ fontWeight: 600, fontSize: 16, color: '#dc3545' }}>
                        ${selectedEmployee.details.violation_amount}
                      </Text>
                    </Col>
                  </Row>
                </div>
              </div>

              {/* Violated Policies */}
              <div>
                <Title level={5} style={{ marginBottom: 16, color: '#495057' }}>
                  📋 Violated Policies
                </Title>
                <div style={{ 
                  background: '#fff3cd',
                  border: '1px solid #ffeaa7',
                  borderRadius: 8,
                  padding: 16
                }}>
                  {selectedEmployee.details.violated_policies.map((policy: string, idx: number) => (
                    <div key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 12,
                      padding: '8px 0',
                      marginBottom: idx < selectedEmployee.details.violated_policies.length - 1 ? 8 : 0,
                      borderBottom: idx < selectedEmployee.details.violated_policies.length - 1 ? '1px solid #f1c40f' : 'none'
                    }}>
                      <div style={{ 
                        width: 8, 
                        height: 8, 
                        backgroundColor: '#e17055', 
                        borderRadius: '50%',
                        flexShrink: 0
                      }}></div>
                      <Text style={{ fontSize: 14, color: '#856404', fontWeight: 500 }}>
                        {policy}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div style={{ textAlign: 'center', marginTop: 24, paddingTop: 16, borderTop: '1px solid #e9ecef' }}>
                <Button 
                  type="primary" 
                  size="large"
                  onClick={handleModalClose}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: 20,
                    paddingLeft: 32,
                    paddingRight: 32
                  }}
                >
                  Close Details
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  );
}

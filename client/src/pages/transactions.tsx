import React, { useState } from "react";
import {
  Layout,
  Card,
  Table,
  Button,
  Input,
  Select,
  Space,
  Typography,
  Tag,
  Statistic,
  Row,
  Col,
  Tabs,
} from "antd";
import {
  FilterOutlined,
  DownloadOutlined,
  CalendarOutlined,
  SearchOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Sidebar } from "@/components/dashboard/sidebar";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;
const { Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

interface Transaction {
  key: string;
  id: string;
  date: string;
  employee: string;
  category: string;
  description: string;
  amount: number;
  status: "Approved" | "Pending" | "Rejected";
}

const mockTransactions: Transaction[] = [
  {
    key: "1",
    id: "TRX-1248",
    date: "2023-11-15",
    employee: "Sarah Johnson",
    category: "Air Travel",
    description: "Flight to New York - Client...",
    amount: 450.75,
    status: "Approved",
  },
  {
    key: "2",
    id: "TRX-1247",
    date: "2023-11-14",
    employee: "Michael Chen",
    category: "Hotel",
    description: "Marriott - 3 nights - Chi...",
    amount: 825.5,
    status: "Approved",
  },
  {
    key: "3",
    id: "TRX-1246",
    date: "2023-11-14",
    employee: "David Rodriguez",
    category: "Ground Transport",
    description: "Taxi from Airport to Hotel",
    amount: 65.25,
    status: "Pending",
  },
  {
    key: "4",
    id: "TRX-1245",
    date: "2023-11-13",
    employee: "Emily Wilson",
    category: "Meals",
    description: "Dinner with Client - Bos...",
    amount: 128.4,
    status: "Approved",
  },
  {
    key: "5",
    id: "TRX-1244",
    date: "2023-11-13",
    employee: "James Taylor",
    category: "Air Travel",
    description: "Flight to San Francisco -...",
    amount: 685.3,
    status: "Rejected",
  },
  {
    key: "6",
    id: "TRX-1243",
    date: "2023-11-12",
    employee: "Lisa Wang",
    category: "Hotel",
    description: "Hilton - 2 nights - Dalla...",
    amount: 425.0,
    status: "Approved",
  },
  {
    key: "7",
    id: "TRX-1242",
    date: "2023-11-12",
    employee: "Robert Chen",
    category: "Meals",
    description: "Breakfast Meeting - Chi...",
    amount: 48.75,
    status: "Pending",
  },
  {
    key: "8",
    id: "TRX-1241",
    date: "2023-11-11",
    employee: "Jennifer Smith",
    category: "Ground Transport",
    description: "Rental Car - Los Angeles",
    amount: 275.8,
    status: "Approved",
  },
  {
    key: "9",
    id: "TRX-1240",
    date: "2023-11-10",
    employee: "Thomas Garcia",
    category: "Air Travel",
    description: "Flight to Miami - Sales...",
    amount: 520.45,
    status: "Approved",
  },
  {
    key: "10",
    id: "TRX-1239",
    date: "2023-11-10",
    employee: "Amanda Lee",
    category: "Hotel",
    description: "Westin - 4 nights - Seat...",
    amount: 1250.0,
    status: "Pending",
  },
];

const topSpendersData = [
  {
    key: "1",
    employee: "Sarah Johnson",
    department: "Sales",
    transactions: 48,
    totalAmount: 24689.75,
    average: 512,
    status: "Within Budget",
  },
  {
    key: "2",
    employee: "Michael Chen",
    department: "Executive",
    transactions: 32,
    totalAmount: 18750.5,
    average: 586,
    status: "Within Budget",
  },
  {
    key: "3",
    employee: "David Rodriguez",
    department: "Sales",
    transactions: 45,
    totalAmount: 15430.25,
    average: 343,
    status: "Near Limit",
  },
  {
    key: "4",
    employee: "Emily Wilson",
    department: "Marketing",
    transactions: 28,
    totalAmount: 12150.8,
    average: 434,
    status: "Within Budget",
  },
  {
    key: "5",
    employee: "James Taylor",
    department: "Engineering",
    transactions: 22,
    totalAmount: 9670.3,
    average: 440,
    status: "Near Limit",
  },
];

export default function Transactions() {
  const [activeTab, setActiveTab] = useState("transaction-summary");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const transactionVolumeData = [
    { month: "Jan", count: 245, amount: 45000 },
    { month: "Feb", count: 189, amount: 38500 },
    { month: "Mar", count: 298, amount: 52000 },
    { month: "Apr", count: 267, amount: 48000 },
    { month: "May", count: 314, amount: 58000 },
  ];

  const categoryData = [
    { category: "Air Travel", amount: 567890, percentage: 42, transactions: 234 },
    { category: "Hotel", amount: 324560, percentage: 24, transactions: 189 },
    { category: "Ground Transport", amount: 185430, percentage: 14, transactions: 456 },
    { category: "Meals", amount: 267890, percentage: 20, transactions: 678 },
  ];

  const paymentMethodData = [
    { method: "Corporate Card", amount: 890450, percentage: 65, transactions: 834 },
    { method: "Expense Claims", amount: 267890, percentage: 20, transactions: 245 },
    { method: "Direct Bill", amount: 189340, percentage: 15, transactions: 123 },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 110,
    },
    {
      title: "Employee",
      dataIndex: "employee",
      key: "employee",
      width: 140,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 130,
      render: (category: string) => {
        const color =
          category === "Air Travel"
            ? "blue"
            : category === "Hotel"
              ? "green"
              : category === "Ground Transport"
                ? "orange"
                : "purple";
        return <Tag color={color}>{category}</Tag>;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 200,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 100,
      render: (amount: number) => `$${amount.toFixed(2)}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (status: string) => {
        const color =
          status === "Approved"
            ? "green"
            : status === "Pending"
              ? "orange"
              : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      width: 80,
      render: () => <Button type="text" icon={<MoreOutlined />} />,
    },
  ];

  // Filter transactions based on search and filters
  const filteredTransactions = mockTransactions.filter((transaction) => {
    const matchesSearch = 
      transaction.id.toLowerCase().includes(searchText.toLowerCase()) ||
      transaction.employee.toLowerCase().includes(searchText.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchText.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchText.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || 
      transaction.status.toLowerCase() === statusFilter.toLowerCase();
    
    const matchesCategory = categoryFilter === "all" || 
      (categoryFilter === "air" && transaction.category === "Air Travel") ||
      (categoryFilter === "hotel" && transaction.category === "Hotel") ||
      (categoryFilter === "transport" && transaction.category === "Ground Transport") ||
      (categoryFilter === "meals" && transaction.category === "Meals");
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Calculate paginated data from filtered results
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);

  const handlePageChange = (page: number, size?: number) => {
    setCurrentPage(page);
    if (size && size !== pageSize) {
      setPageSize(size);
      setCurrentPage(1); // Reset to first page when page size changes
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleCategoryFilterChange = (value: string) => {
    setCategoryFilter(value);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const topSpendersColumns = [
    {
      title: "Employee",
      dataIndex: "employee",
      key: "employee",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Transactions",
      dataIndex: "transactions",
      key: "transactions",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount: number) => `$${amount.toLocaleString()}`,
    },
    {
      title: "Average",
      dataIndex: "average",
      key: "average",
      render: (avg: number) => `$${avg}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const color =
          status === "Within Budget"
            ? "green"
            : status === "Near Limit"
              ? "orange"
              : "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Sidebar />

      <Layout style={{ marginLeft: 256 }}>
        {/* Header */}
        <div
          style={{
            background: "#fff",
            borderBottom: "1px solid #f0f0f0",
            padding: "16px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Title level={2} style={{ margin: 0, marginBottom: 4 }}>
              Transactions
            </Title>
            <Text style={{ color: "#8c8c8c" }}>
              View and manage all travel expense transactions
            </Text>
          </div>

          <Space>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#8c8c8c",
              }}
            >
              <RangePicker />
            </div>
            <Button icon={<FilterOutlined />}>Filters</Button>
            <Button icon={<DownloadOutlined />}>Export</Button>
          </Space>
        </div>

        <Content style={{ padding: "32px" }}>
          {/* Metrics Cards */}
          <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Total Transactions"
                  value={1248}
                  suffix="in current period"
                  valueStyle={{ color: "#1890ff" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Approved"
                  value={1052}
                  suffix="in this period"
                  valueStyle={{ color: "#52c41a" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Pending"
                  value={156}
                  suffix="pending transactions"
                  valueStyle={{ color: "#faad14" }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card>
                <Statistic
                  title="Rejected"
                  value={40}
                  suffix="rejected transactions"
                  valueStyle={{ color: "#ff4d4f" }}
                />
              </Card>
            </Col>
          </Row>

          {/* Recent Transactions */}
          <Card style={{ marginBottom: 32 }}>
            <div
              style={{
                marginBottom: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Title level={4} style={{ margin: 0 }}>
                Recent Transactions
              </Title>
              <Space>
                <Input
                  placeholder="Search transactions..."
                  prefix={<SearchOutlined />}
                  style={{ width: 200 }}
                  value={searchText}
                  onChange={handleSearchChange}
                />
                <Select 
                  value={statusFilter} 
                  style={{ width: 120 }}
                  onChange={handleStatusFilterChange}
                >
                  <Option value="all">All Statuses</Option>
                  <Option value="approved">Approved</Option>
                  <Option value="pending">Pending</Option>
                  <Option value="rejected">Rejected</Option>
                </Select>
                <Select 
                  value={categoryFilter} 
                  style={{ width: 140 }}
                  onChange={handleCategoryFilterChange}
                >
                  <Option value="all">All Categories</Option>
                  <Option value="air">Air Travel</Option>
                  <Option value="hotel">Hotel</Option>
                  <Option value="transport">Ground Transport</Option>
                  <Option value="meals">Meals</Option>
                </Select>
              </Space>
            </div>

            <Table
              columns={columns}
              dataSource={paginatedTransactions}
              pagination={{
                current: currentPage,
                pageSize: pageSize,
                total: filteredTransactions.length,
                showSizeChanger: true,
                showQuickJumper: true,
                onChange: handlePageChange,
                onShowSizeChange: handlePageChange,
                showTotal: (total, range) =>
                  `Showing ${range[0]}-${range[1]} of ${total} transactions`,
                pageSizeOptions: ['5', '10', '20', '50'],
              }}
            />
          </Card>

          {/* Tab Section */}
          <div style={{ marginBottom: 32 }}>
            <Tabs
              activeKey={activeTab}
              onChange={setActiveTab}
              items={[
                {
                  key: "transaction-summary",
                  label: "Transaction Summary",
                  children: (
                    <>
                      <Row gutter={[24, 24]}>
                        {/* Transaction Volume Chart */}
                        <Col xs={24} lg={12}>
                          <Card style={{ height: 400 }}>
                            <Title level={4} style={{ marginBottom: 8 }}>
                              Transaction Volume
                            </Title>
                            <Text
                              style={{
                                color: "#8c8c8c",
                                display: "block",
                                marginBottom: 24,
                              }}
                            >
                              Monthly transaction count and amount
                            </Text>
                            <div
                              style={{
                                height: 280,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#fafafa",
                                borderRadius: 6,
                                color: "#8c8c8c",
                              }}
                            >
                              Transaction volume chart would appear here
                            </div>
                          </Card>
                        </Col>

                        {/* Transaction Status Chart */}
                        <Col xs={24} lg={12}>
                          <Card style={{ height: 400 }}>
                            <Title level={4} style={{ marginBottom: 8 }}>
                              Transaction Status
                            </Title>
                            <Text
                              style={{
                                color: "#8c8c8c",
                                display: "block",
                                marginBottom: 24,
                              }}
                            >
                              Breakdown by approval status
                            </Text>
                            <div
                              style={{
                                height: 280,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#fafafa",
                                borderRadius: 6,
                                color: "#8c8c8c",
                              }}
                            >
                              Transaction status chart would appear here
                            </div>
                          </Card>
                        </Col>
                      </Row>

                      {/* Top Spenders */}
                      <Card style={{ height: 400, marginTop: 24 }}>
                        <Title level={4} style={{ marginBottom: 8 }}>
                          Top Spenders
                        </Title>
                        <Text
                          style={{
                            color: "#8c8c8c",
                            display: "block",
                            marginBottom: 16,
                          }}
                        >
                          Employees with highest transaction volume
                        </Text>
                        <Table
                          columns={topSpendersColumns}
                          dataSource={topSpendersData}
                          pagination={false}
                          size="small"
                          scroll={{ y: 240 }}
                        />
                      </Card>
                    </>
                  ),
                },
                {
                  key: "by-category",
                  label: "By Category",
                  children: (
                    <div>
                      {/* Category Summary Cards */}
                      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
                        <Col xs={24} sm={12} lg={6}>
                          <Card style={{ height: "100%" }}>
                            <Title
                              level={4}
                              style={{ marginBottom: 8, fontSize: 16, fontWeight: 600 }}
                            >
                              Air Travel
                            </Title>
                            <Title
                              level={2}
                              style={{
                                margin: 0,
                                marginBottom: 8,
                                color: "#1f2937",
                                fontSize: 32,
                              }}
                            >
                              $567,890
                            </Title>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 16,
                              }}
                            >
                              <Text
                                style={{
                                  color: "#52c41a",
                                  fontWeight: 500,
                                  fontSize: 14,
                                }}
                              >
                                +8% of total
                              </Text>
                            </div>
                            <Text style={{ color: "#8c8c8c", fontSize: 14 }}>
                              21 transactions
                            </Text>
                          </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                          <Card style={{ height: "100%" }}>
                            <Title
                              level={4}
                              style={{ marginBottom: 8, fontSize: 16, fontWeight: 600 }}
                            >
                              Hotels
                            </Title>
                            <Title
                              level={2}
                              style={{
                                margin: 0,
                                marginBottom: 8,
                                color: "#1f2937",
                                fontSize: 32,
                              }}
                            >
                              $432,156
                            </Title>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 16,
                              }}
                            >
                              <Text
                                style={{
                                  color: "#52c41a",
                                  fontWeight: 500,
                                  fontSize: 14,
                                }}
                              >
                                +5% of total
                              </Text>
                            </div>
                            <Text style={{ color: "#8c8c8c", fontSize: 14 }}>
                              8 transactions
                            </Text>
                          </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                          <Card style={{ height: "100%" }}>
                            <Title
                              level={4}
                              style={{ marginBottom: 8, fontSize: 16, fontWeight: 600 }}
                            >
                              Ground Transport
                            </Title>
                            <Title
                              level={2}
                              style={{
                                margin: 0,
                                marginBottom: 8,
                                color: "#1f2937",
                                fontSize: 32,
                              }}
                            >
                              $148,521
                            </Title>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 16,
                              }}
                            >
                              <Text
                                style={{
                                  color: "#52c41a",
                                  fontWeight: 500,
                                  fontSize: 14,
                                }}
                              >
                                +3% of total
                              </Text>
                            </div>
                            <Text style={{ color: "#8c8c8c", fontSize: 14 }}>
                              30 transactions
                            </Text>
                          </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                          <Card style={{ height: "100%" }}>
                            <Title
                              level={4}
                              style={{ marginBottom: 8, fontSize: 16, fontWeight: 600 }}
                            >
                              Meals & Entertainment
                            </Title>
                            <Title
                              level={2}
                              style={{
                                margin: 0,
                                marginBottom: 8,
                                color: "#1f2937",
                                fontSize: 32,
                              }}
                            >
                              $100,000
                            </Title>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 16,
                              }}
                            >
                              <Text
                                style={{
                                  color: "#52c41a",
                                  fontWeight: 500,
                                  fontSize: 14,
                                }}
                              >
                                +2% of total
                              </Text>
                            </div>
                            <Text style={{ color: "#8c8c8c", fontSize: 14 }}>
                              71 transactions
                            </Text>
                          </Card>
                        </Col>
                      </Row>

                      {/* Category Breakdown */}
                      <Card style={{ marginBottom: 32 }}>
                        <Title level={4} style={{ marginBottom: 8 }}>
                          Category Breakdown
                        </Title>
                        <Text
                          style={{
                            color: "#8c8c8c",
                            display: "block",
                            marginBottom: 24,
                          }}
                        >
                          Detailed analysis of spending by category
                        </Text>
                        <div
                          style={{
                            height: 280,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#fafafa",
                            borderRadius: 6,
                            color: "#8c8c8c",
                          }}
                        >
                          Category breakdown chart would appear here
                        </div>
                      </Card>

                      <Row gutter={[24, 24]}>
                        {/* Top Vendors */}
                        <Col xs={24} lg={12}>
                          <Card style={{ height: 400 }}>
                            <Title level={4} style={{ marginBottom: 8 }}>
                              Top Vendors
                            </Title>
                            <Text
                              style={{
                                color: "#8c8c8c",
                                display: "block",
                                marginBottom: 16,
                              }}
                            >
                              Most frequently used service providers
                            </Text>
                            <Table
                              columns={[
                                {
                                  title: "Vendor",
                                  dataIndex: "vendor",
                                  key: "vendor",
                                },
                                {
                                  title: "Category",
                                  dataIndex: "category",
                                  key: "category",
                                },
                                {
                                  title: "Transactions",
                                  dataIndex: "transactions",
                                  key: "transactions",
                                },
                                {
                                  title: "Amount",
                                  dataIndex: "amount",
                                  key: "amount",
                                  render: (amount: number) => `$${amount.toLocaleString()}`,
                                },
                              ]}
                              dataSource={[
                                {
                                  key: "1",
                                  vendor: "AirCorp",
                                  category: "Air Travel",
                                  transactions: 165,
                                  amount: 245670,
                                },
                                {
                                  key: "2",
                                  vendor: "GlobalStay Hotels",
                                  category: "Hotels",
                                  transactions: 142,
                                  amount: 198450,
                                },
                                {
                                  key: "3",
                                  vendor: "RideShare",
                                  category: "Ground Transport",
                                  transactions: 156,
                                  amount: 76520,
                                },
                                {
                                  key: "4",
                                  vendor: "FlyJet Airways",
                                  category: "Air Travel",
                                  transactions: 124,
                                  amount: 185200,
                                },
                                {
                                  key: "5",
                                  vendor: "LuxStay Hotels",
                                  category: "Hotels",
                                  transactions: 98,
                                  amount: 145780,
                                },
                              ]}
                              pagination={false}
                              size="small"
                              scroll={{ y: 240 }}
                            />
                          </Card>
                        </Col>

                        {/* Category Trends */}
                        <Col xs={24} lg={12}>
                          <Card style={{ height: 400 }}>
                            <Title level={4} style={{ marginBottom: 8 }}>
                              Category Trends
                            </Title>
                            <Text
                              style={{
                                color: "#8c8c8c",
                                display: "block",
                                marginBottom: 24,
                              }}
                            >
                              Monthly spending trends by category
                            </Text>
                            <div
                              style={{
                                height: 280,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#fafafa",
                                borderRadius: 6,
                                color: "#8c8c8c",
                              }}
                            >
                              Category trends chart would appear here
                            </div>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  ),
                },
                {
                  key: "payment-methods",
                  label: "Payment Methods",
                  children: (
                    <div>
                      {/* Payment Method Summary Cards */}
                      <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
                        <Col xs={24} sm={12} lg={6}>
                          <Card style={{ height: "100%" }}>
                            <Title
                              level={4}
                              style={{ marginBottom: 8, fontSize: 16, fontWeight: 600 }}
                            >
                              Corporate Card
                            </Title>
                            <Title
                              level={2}
                              style={{
                                margin: 0,
                                marginBottom: 8,
                                color: "#1f2937",
                                fontSize: 32,
                              }}
                            >
                              $875,420
                            </Title>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 16,
                              }}
                            >
                              <Text
                                style={{
                                  color: "#52c41a",
                                  fontWeight: 500,
                                  fontSize: 14,
                                }}
                              >
                                65%
                              </Text>
                              <Text style={{ color: "#8c8c8c", fontSize: 12 }}>
                                of total
                              </Text>
                            </div>
                            <Text style={{ color: "#8c8c8c", fontSize: 14 }}>
                              834 transactions
                            </Text>
                          </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                          <Card style={{ height: "100%" }}>
                            <Title
                              level={4}
                              style={{ marginBottom: 8, fontSize: 16, fontWeight: 600 }}
                            >
                              Personal Reimbursements
                            </Title>
                            <Title
                              level={2}
                              style={{
                                margin: 0,
                                marginBottom: 8,
                                color: "#1f2937",
                                fontSize: 32,
                              }}
                            >
                              $248,567
                            </Title>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 16,
                              }}
                            >
                              <Text
                                style={{
                                  color: "#52c41a",
                                  fontWeight: 500,
                                  fontSize: 14,
                                }}
                              >
                                20%
                              </Text>
                              <Text style={{ color: "#8c8c8c", fontSize: 12 }}>
                                of total
                              </Text>
                            </div>
                            <Text style={{ color: "#8c8c8c", fontSize: 14 }}>
                              5 transactions
                            </Text>
                          </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                          <Card style={{ height: "100%" }}>
                            <Title
                              level={4}
                              style={{ marginBottom: 8, fontSize: 16, fontWeight: 600 }}
                            >
                              Direct Billing
                            </Title>
                            <Title
                              level={2}
                              style={{
                                margin: 0,
                                marginBottom: 8,
                                color: "#1f2937",
                                fontSize: 32,
                              }}
                            >
                              $124,580
                            </Title>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 16,
                              }}
                            >
                              <Text
                                style={{
                                  color: "#52c41a",
                                  fontWeight: 500,
                                  fontSize: 14,
                                }}
                              >
                                15%
                              </Text>
                              <Text style={{ color: "#8c8c8c", fontSize: 12 }}>
                                of total
                              </Text>
                            </div>
                            <Text style={{ color: "#8c8c8c", fontSize: 14 }}>
                              0 transactions
                            </Text>
                          </Card>
                        </Col>
                        <Col xs={24} sm={12} lg={6}>
                          <Card style={{ height: "100%" }}>
                            <Title
                              level={4}
                              style={{ marginBottom: 8, fontSize: 16, fontWeight: 600 }}
                            >
                              Virtual Payment
                            </Title>
                            <Title
                              level={2}
                              style={{
                                margin: 0,
                                marginBottom: 8,
                                color: "#1f2937",
                                fontSize: 32,
                              }}
                            >
                              $0
                            </Title>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 16,
                              }}
                            >
                              <Text
                                style={{
                                  color: "#52c41a",
                                  fontWeight: 500,
                                  fontSize: 14,
                                }}
                              >
                                0%
                              </Text>
                              <Text style={{ color: "#8c8c8c", fontSize: 12 }}>
                                of total
                              </Text>
                            </div>
                            <Text style={{ color: "#1890ff", fontSize: 14 }}>
                              Coming Soon
                            </Text>
                          </Card>
                        </Col>
                      </Row>

                      {/* Payment Method Analysis */}
                      <Card style={{ marginBottom: 32 }}>
                        <Title level={4} style={{ marginBottom: 8 }}>
                          Payment Method Analysis
                        </Title>
                        <Text
                          style={{
                            color: "#8c8c8c",
                            display: "block",
                            marginBottom: 24,
                          }}
                        >
                          Comparison analysis over time by type
                        </Text>
                        <div
                          style={{
                            height: 280,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#fafafa",
                            borderRadius: 6,
                            color: "#8c8c8c",
                          }}
                        >
                          Payment method analysis chart would appear here
                        </div>
                      </Card>

                      {/* Corporate Card Usage */}
                      <Card>
                        <Title level={4} style={{ marginBottom: 8 }}>
                          Corporate Card Usage
                        </Title>
                        <Text
                          style={{
                            color: "#8c8c8c",
                            display: "block",
                            marginBottom: 24,
                          }}
                        >
                          Summary of corporate card transactions
                        </Text>

                        {/* Corporate Card Statistics */}
                        <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
                          <Col xs={24} sm={8}>
                            <div style={{ textAlign: "center" }}>
                              <Text style={{ color: "#8c8c8c", fontSize: 14, display: "block" }}>
                                Total Avg Transaction
                              </Text>
                              <Title level={2} style={{ margin: 0, color: "#1f2937" }}>
                                $1,115
                              </Title>
                              <Text style={{ color: "#52c41a", fontSize: 14 }}>
                                +8% from last month
                              </Text>
                            </div>
                          </Col>
                          <Col xs={24} sm={8}>
                            <div style={{ textAlign: "center" }}>
                              <Text style={{ color: "#8c8c8c", fontSize: 14, display: "block" }}>
                                First Time Rate
                              </Text>
                              <Title level={2} style={{ margin: 0, color: "#1f2937" }}>
                                78%
                              </Title>
                              <Text style={{ color: "#52c41a", fontSize: 14 }}>
                                +2% from last filing
                              </Text>
                            </div>
                          </Col>
                          <Col xs={24} sm={8}>
                            <div style={{ textAlign: "center" }}>
                              <Text style={{ color: "#8c8c8c", fontSize: 14, display: "block" }}>
                                Policy Compliance
                              </Text>
                              <Title level={2} style={{ margin: 0, color: "#1f2937" }}>
                                92%
                              </Title>
                              <Text style={{ color: "#52c41a", fontSize: 14 }}>
                                +5% from last review period
                              </Text>
                            </div>
                          </Col>
                        </Row>

                        {/* Top Corporate Card Users Table */}
                        <div style={{ marginBottom: 16 }}>
                          <Title level={5} style={{ margin: 0, marginBottom: 16 }}>
                            Top Corporate Card Users
                          </Title>
                        </div>
                        <Table
                          columns={[
                            {
                              title: "Employee",
                              dataIndex: "employee",
                              key: "employee",
                            },
                            {
                              title: "Department",
                              dataIndex: "department",
                              key: "department",
                            },
                            {
                              title: "Transactions",
                              dataIndex: "transactions",
                              key: "transactions",
                            },
                            {
                              title: "Amount",
                              dataIndex: "amount",
                              key: "amount",
                              render: (amount: number) => `$${amount.toLocaleString()}`,
                            },
                            {
                              title: "Card Type",
                              dataIndex: "cardType",
                              key: "cardType",
                              render: (type: string) => {
                                const color = type === "Standard" ? "blue" : type === "Gold" ? "orange" : "purple";
                                return <Tag color={color}>{type}</Tag>;
                              },
                            },
                          ]}
                          dataSource={[
                            {
                              key: "1",
                              employee: "Sarah Johnson",
                              department: "Sales",
                              transactions: 42,
                              amount: 52580,
                              cardType: "Standard",
                            },
                            {
                              key: "2",
                              employee: "Michael Chen",
                              department: "Executive",
                              transactions: 28,
                              amount: 39795,
                              cardType: "Standard",
                            },
                            {
                              key: "3",
                              employee: "Emily Wilson",
                              department: "Marketing",
                              transactions: 35,
                              amount: 30250,
                              cardType: "Gold",
                            },
                            {
                              key: "4",
                              employee: "James Taylor",
                              department: "Engineering",
                              transactions: 19,
                              amount: 27850,
                              cardType: "Gold",
                            },
                            {
                              key: "5",
                              employee: "Lisa Wang",
                              department: "HR",
                              transactions: 16,
                              amount: 6540,
                              cardType: "Standard",
                            },
                          ]}
                          pagination={false}
                          size="small"
                        />
                      </Card>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
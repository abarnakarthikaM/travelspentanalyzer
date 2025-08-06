import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import VendorComparison from "./pages/vendor-comparison";
import SpendingTrends from "./pages/spending-trends";
import TopSpenders from "./pages/top-spenders";
import ComplianceMetrics from "./pages/compliance-metrics";
import AIInsights from "./pages/ai-insights";
import Transactions from "./pages/transactions";
import Settings from "./pages/settings";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import VendorDashboard from "./pages/vendor-dashboard";
import Booking from "./pages/booking";
import Payments from "./pages/payments";
import Communications from "./pages/communications";
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './stores/Store';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
            <Route path="/top-spenders" element={<ProtectedRoute><TopSpenders /></ProtectedRoute>} />
            <Route path="/spending-trends" element={<ProtectedRoute><SpendingTrends /></ProtectedRoute>} />
            <Route path="/vendor-comparison" element={<ProtectedRoute><VendorComparison /></ProtectedRoute>} />
            <Route path="/compliance-metrics" element={<ProtectedRoute><ComplianceMetrics /></ProtectedRoute>} />
            <Route path="/ai-insights" element={<ProtectedRoute><AIInsights /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/vendor-dashboard" element={<ProtectedRoute><VendorDashboard /></ProtectedRoute>} />
            <Route path="/booking" element={<ProtectedRoute><Booking /></ProtectedRoute>} />
            <Route path="/payments" element={<ProtectedRoute><Payments /></ProtectedRoute>} />
            <Route path="/communications" element={<ProtectedRoute><Communications /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
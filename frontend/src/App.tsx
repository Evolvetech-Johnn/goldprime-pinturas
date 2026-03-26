import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from './context/AuthContext';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Login';
import Home from './pages/public/Home';
import Services from './pages/public/Services';
import Portfolio from './pages/public/Portfolio';
import About from './pages/public/About';
import Contact from './pages/public/Contact';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/admin/login" element={<Login />} />

            {/* Protected Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              {/* Future Admin Routes */}
              <Route path="portfolio" element={<div>Portfolio Management</div>} />
              <Route path="blog" element={<div>Blog Management</div>} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

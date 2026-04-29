import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Index from './pages/index';
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import RegistrationAndMarketing from './pages/products/registrationAndMarketing';
import VenueSourcing from './pages/products/venueSourcing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/registrationAndMarketing" element={<RegistrationAndMarketing />} />  
          <Route path="/venueSourcing" element={<VenueSourcing />} />  
        
          <Route path="/ticketing" element={<div>Ticketing</div>} />  
          <Route path="/analytics" element={<div>Analytics</div>} />  
          <Route path="/crm" element={<div>CRM</div>} />  
          <Route path="/payments" element={<div>Payments</div>} />  
          <Route path="/inventory" element={<div>Inventory</div>} />  
          <Route path="/staff" element={<div>Staff</div>} />  
          <Route path="/vendors" element={<div>Vendors</div>} />  
          <Route path="/reports" element={<div>Reports</div>} />  
          <Route path="/settings" element={<div>Settings</div>} />  
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App

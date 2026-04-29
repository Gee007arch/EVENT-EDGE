import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Index from './pages/index'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App

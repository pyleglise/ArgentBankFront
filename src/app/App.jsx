import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RequireAuth from '../features/auth/RequireAuth'
import Unauthorized from '../components/Unauthorized'
import Error from '../components/Error'
import Home from '../pages/Home'
import Login from '../features/auth/Login'
import Logout from '../features/auth/Logout'
import Profile from '../features/profile/Profile'

/**
 * App's component to manage various routes
 * and display corresponding pages components
 *
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @name App
 * @returns {JSX}
 */

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Forbiden Routes */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* All other url : Error Route */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  )
}
export default App

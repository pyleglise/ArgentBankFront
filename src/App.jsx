import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Error from './components/error'
import Layout from './components/layout'
import Header from './components/header'
import Footer from './components/footer'
import Logout from './features/logout'
import RequireAuth from './features/auth/services/RequireAuth'
import Unauthorized from './components/unauthorized'

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
          {/* <Route
            path="/profile"
            element={
              <RequireAuth redirectTo="/login">
                <Profile />
              </RequireAuth>
            }
          /> */}

          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Fallback routes */}
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

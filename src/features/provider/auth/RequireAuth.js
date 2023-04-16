import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { RefreshAuthState } from './RefreshAuthState'
import { useSelector } from 'react-redux'
// import { selectCurrentToken } from '../slices/auth'

const RequireAuth = () => {
  const location = useLocation()
  RefreshAuthState()
  const isAuth = useSelector((state) => state.auth.isAuth)

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  )
}
export default RequireAuth

import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentIsAuth } from './authSlice'

/**
 * Component that controls the authorization status.\
 * Route to unauthorized page if authentification invalid.\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 *  RequireAuth()
 * @returns {JSX.Element}   A JSX.Element depending on authorization statu
 *
 */
const RequireAuth = () => {
  const location = useLocation()
  const isAuth = useSelector(selectCurrentIsAuth)

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  )
}
export default RequireAuth

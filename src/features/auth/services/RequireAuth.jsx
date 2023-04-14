import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../slices/auth'

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()
  console.log('RequireAuth started')
  console.log(token)

  // if (!token) {
  //   return <Navigate to={redirectTo} state={{ from: location }} replace />
  // }
  // return children ? children : <Outlet />

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  )
}
export default RequireAuth

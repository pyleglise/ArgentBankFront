import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../slices/auth'

const RequireAuth = (redirectTo, children) => {
  const token = useSelector(selectCurrentToken)
  const location = useLocation()
  console.log('RequireAuth started')
  console.log(token)

  // if (!token) {
  //   return <Navigate to={redirectTo} state={{ from: location }} replace />
  // }
  // return children ? children : <Outlet />

  return token ? (
    children ? (
      children
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  )
}
export default RequireAuth

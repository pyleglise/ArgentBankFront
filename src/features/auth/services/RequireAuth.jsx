import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logingSuccess } from '../../auth/services/authSlice'

// import { selectCurrentToken } from '../slices/auth'

const RequireAuth = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  // keeps you logged in while refreshing
  if (token) {
    dispatch(logingSuccess(token))
  }
  const { isAuth } = useSelector((state) => state.login)

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  )
}
export default RequireAuth

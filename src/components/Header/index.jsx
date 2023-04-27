import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserFirstName } from '../../features/profile/userSlice'
import { selectCurrentToken } from '../../features/auth/authSlice'
import logo from '../../assets/argentBankLogo.png'
import '../../utils/style/_header.scss'
// import { useEffect } from 'react'
import { RefreshAuthState } from '../../features/auth/RefreshAuthState'

/**
 * Component that displays the header (logo and main top navbar menu)\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return{
 *  <Header />
 * }
 * @returns {JSX.Element}   A JSX element containing the Header (logo and main top navbar menu)
 */
const Header = () => {
  RefreshAuthState()
  const stateToken = useSelector(selectCurrentToken)
  const stateFirstName = useSelector(selectUserFirstName)

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="ArgentBank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {stateToken ? (
          <div>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {' ' + stateFirstName + ' '}
            </Link>
            <Link className="main-nav-item" to="/logout">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header

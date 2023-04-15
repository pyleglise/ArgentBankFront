import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import { shallowEqual, useSelector } from 'react-redux'
import { RefreshAuthState } from '../../features/auth/RefreshAuthState'
import { RefreshUserState } from '../../features/profile/RefreshUserState'

import logo from '../../assets/argentBankLogo.png'
import '../../utils/style/_header.scss'

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
function Header() {
  RefreshAuthState()
  RefreshUserState()
  const isAuth = useSelector((state) => state.auth.isAuth, shallowEqual)
  const firstName = useSelector((state) => state.user.firstName, shallowEqual)

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="mmain-nav-logo-image"
            src={logo}
            alt="ArgentBank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isAuth ? (
          <div>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {' ' + firstName + ' '}
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

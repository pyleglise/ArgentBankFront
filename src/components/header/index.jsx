import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
  const { isLoggedIn } = useSelector((state) => state.auth)
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
        {isLoggedIn ? (
          <Link className="main-nav-item" to="/logout">
            <i class="fa fa-sign-out"></i>
            Sign Out
          </Link>
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
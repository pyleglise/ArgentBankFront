import { Link } from 'react-router-dom'
import '../../utils/style/_global.scss'

/**
 * Component that displays the "unauthorized" page"\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return{
 *  <Unauthorized />
 * }
 * @returns {JSX.Element}   A JSX.Element that displays the "unauthorized" page
 *
 */
const Unauthorized = () => {
  return (
    <div className="temp-div home-div">
      <p>User unauthorized</p>
      <Link className="main-nav-item" to={-1}>
        <button className="edit-button">
          <i className="fa-solid fa-arrow-left" /> Go back
        </button>
      </Link>
      <Link className="main-nav-item" to="/login">
        <button className="edit-button">
          <i className="fa-solid fa-arrow-right" /> Sign In
        </button>
      </Link>
    </div>
  )
}
export default Unauthorized

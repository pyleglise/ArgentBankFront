import { NavLink } from 'react-router-dom'
import '../../utils/style/_error.scss'

/**
 * Component that displays the 404 Not Found Error\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return (
 *   <Error />
 * )
 * @returns {JSX.Element}   A JSX.Element that contains the 404 error.
 */

const Error = () => {
  return (
    <div className="error">
      <p className="error-num">404</p>
      <p className="error-txt">
        Oups!
        <br /> The requested page does not exist.
      </p>
      <p>
        <NavLink to="/">Back to home page</NavLink>
      </p>
    </div>
  )
}
export default Error

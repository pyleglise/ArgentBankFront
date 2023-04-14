import '../../utils/style/_error.scss'
import { NavLink } from 'react-router-dom'

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
        <br /> La page ou l'utilisateur que vous demandez n'existe pas.
      </p>
      <p>
        <NavLink to="/">Retournez sur la page d'accueil</NavLink>
      </p>
    </div>
  )
}
export default Error

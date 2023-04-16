// import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import '../../utils/style/_global.scss'
const Unauthorized = () => {
  // const { isLoggedIn } = useSelector((state) => state.auth)
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

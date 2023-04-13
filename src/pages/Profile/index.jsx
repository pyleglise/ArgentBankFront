import '../../utils/style/_profile.scss'
/**
 * Component that displays the Profile page\
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return{
 *  <Profile />
 * }
 * @returns {JSX.Element}   A JSX.Element that displays the Profile Page
 *
 */
const Profile = () => {
  let pageName = 'Profile'

  return (
    <div className="temp-div home-div">
      Page {pageName}
      <br />
      En cours de développement
    </div>
  )
}
export default Profile

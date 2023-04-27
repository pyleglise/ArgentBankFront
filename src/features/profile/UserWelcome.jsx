import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userError, userPending, userFullName } from './userSlice'
import { useSetUserMutation } from './userApiSlice'
import '../../utils/style/_userWelcome.scss'

/**
 * Component/page that displays the header of the profile page.\
 * This header contains the functionnality to edit user name.\
 * It is called by the Profile component.
 * No props
 *
 * @namespace
 * @component
 * @author  Pierre-Yves Léglise <pleglise@pm.me>
 * @example
 * return{
 *  <UserWelcome />
 * }
 * @returns {JSX.Element}   A JSX.Element that displays the Home Page
 *
 */
const UserWelcome = () => {
  const dispatch = useDispatch()
  const { isLoading, firstName, lastName } = useSelector((state) => state.user)
  const { token, isRemember } = useSelector((state) => state.auth)
  const [editButton, setEditButton] = useState('')
  const [setUser] = useSetUserMutation()

  const editNameButton = (e) => {
    e.preventDefault()
    setEditButton((current) => !current)
  }

  const [userName, setUserFullName] = useState({
    firstName: '',
    lastName: '',
  })
  const handelChange = ({ currentTarget }) => {
    const { value, name } = currentTarget
    setUserFullName({
      ...userName,
      [name]: value,
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    dispatch(userPending())
    try {
      const userData = await setUser({
        token: token,
        userFullName: userName,
      }).unwrap()
      dispatch(userFullName(userData.body))
      if (isRemember) {
        localStorage.setItem('firstName', userData.body.firstName)
        localStorage.setItem('lastName', userData.body.lastName)
      } else {
        localStorage.removeItem('firstName')
        localStorage.removeItem('lastName')
      }
      setEditButton((current) => !current)
    } catch (error) {
      console.log(error.data.message)
      dispatch(userError(error.data.message))
    }
  }

  return isLoading ? (
    <div className="temp-div ">
      <h1>Loading...</h1>
    </div>
  ) : (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + ' ' + lastName} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="welcome-edit-container" onSubmit={submitHandler}>
            <div className="welcome-user-edit-left">
              <input
                type="text"
                placeholder={firstName}
                name="firstName"
                onChange={handelChange}
                tabIndex="1"
                required
              />
              <button className="edit-button" type="submit" tabIndex="3">
                Save
              </button>
            </div>
            <div className="welcome-user-edit-right">
              <input
                type="text"
                placeholder={lastName}
                name="lastName"
                onChange={handelChange}
                tabIndex="2"
                required
              />
              <button
                onClick={editNameButton}
                className="edit-button"
                tabIndex="4"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
export default UserWelcome

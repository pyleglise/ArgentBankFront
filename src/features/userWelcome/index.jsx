import { useState } from 'react'
import '../../utils/style/_userWelcome.scss'
import { useDispatch, useSelector } from 'react-redux'
import { userError, userPending } from '../provider/profile/userSlice'
import { updateData } from '../apiHandler/internalApiHandler'

const UserWelcome = () => {
  let content = ''
  const dispatch = useDispatch()
  const { isLoading, firstName, lastName } = useSelector((state) => state.user)
  const [editButton, setEditButton] = useState('')
  function editNameButton(e) {
    e.preventDefault()
    setEditButton((current) => !current)
  }

  const [userFullName, setUserFullName] = useState({
    firstName: '',
    lastName: '',
  })
  const handelChange = ({ currentTarget }) => {
    const { value, name } = currentTarget
    setUserFullName({
      ...userFullName,
      [name]: value,
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    dispatch(userPending())
    try {
      const newUser = await updateData(userFullName, '/profile')
      dispatch(userFullName(newUser))
      setEditButton((current) => !current)
    } catch (error) {
      dispatch(userError('Error !'))
    }
  }

  content = isLoading ? (
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
  return content
}
export default UserWelcome

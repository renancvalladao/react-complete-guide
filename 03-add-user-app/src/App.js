import { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (name, age) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { id: Math.random().toString(), name, age }
    ])
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  )
}

export default App

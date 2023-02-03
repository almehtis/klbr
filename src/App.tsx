import { useEffect, useState } from 'react'
import { Card } from './common/Card'
import { User } from './common/types/user'
import './App.css'

function App() {
  const [users, setUsers] = useState<{name: string, surname: string}[]>([])

  useEffect(() => {
    fetch('https://api.json-generator.com/templates/8QBvRSsQuyLn/data?access_token=f36pphzkqs7tjpt08asn0tlv36xmbzzaae88fa94')
    .then(response => response.json())
    .then(usersList => {setUsers(usersList)})

  }, [])

  return (
    <div className="App">
      <ul className="users-list">
        {users.slice(0, 101).map((user: User, index: number) =>
          <Card cardKey={index} userName={user.name} userSurname={user.surname} />
        )}
      </ul>
    </div>
  )
}

export default App

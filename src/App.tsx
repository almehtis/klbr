import { useEffect, useState } from 'react'
import { Card } from './common/Card'
import { User } from './common/types/user'
import './App.css'

function App() {
  const [users, setUsers] = useState<{name: string, surname: string}[]>([])
  const [visibleItems, setVisibleItems] = useState(20)
  const [fetchUsers, setFetchUsers] = useState(true)

  useEffect(() => {
    if(fetchUsers) {
      fetch('https://api.json-generator.com/templates/8QBvRSsQuyLn/data?access_token=f36pphzkqs7tjpt08asn0tlv36xmbzzaae88fa94')
      .then(response => response.json())
      .then(usersList => {setUsers(usersList)})
      .finally(() => setFetchUsers(false))
    }

  }, [fetchUsers])

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return () => {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  const scrollHandler = () => {
    if(document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetchUsers(true)
      setVisibleItems(prevState => prevState + 20)
    }

    return
  }

  return (
    <div className="App">
      <div className="users-block">
        {users.slice(0, visibleItems).map((user: User, index: number) =>
          <Card className="users-block__card" key={index} userName={user.name} userSurname={user.surname} />
        )}
      </div>
    </div>
  )
}

export default App

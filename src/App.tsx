import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Card } from './common/Card'
import { User } from './common/types/user'
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [visibleItems, setVisibleItems] = useState(21)

  const {ref, inView} = useInView({
    threshold: 0,
    triggerOnce: true
  })

  useEffect(() => {
      fetch('https://api.json-generator.com/templates/8QBvRSsQuyLn/data?access_token=f36pphzkqs7tjpt08asn0tlv36xmbzzaae88fa94')
      .then(response => response.json())
      .then(usersList => {setUsers(usersList)})
  }, [])

  useEffect(() => {
    if(inView) {
      setVisibleItems(visibleItems + 20)
    }

    return
  }, [inView])


  return (
    <div className="App">
      <ul className="users-list">
        {users.slice(0, visibleItems).map((user: User, index: number) =>
          <Card
            cardRef={ref}
            cardKey={index}
            userName={user.name}
            userSurname={user.surname}
          />
        )}
      </ul>
    </div>
  )
}

export default App

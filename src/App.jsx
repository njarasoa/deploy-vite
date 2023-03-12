import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { fetchAll } from './userSlice'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.counter.value)
  const users = useSelector((state) => state.users.entities)

  const dispatch = useDispatch()

  useEffect(()=>{
    async function getAllUser(){
      await dispatch(fetchAll(5));
    }
    getAllUser();
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <div>
          {
            users.map(user => <div key={user.id}>{user.name}</div>)
          }
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

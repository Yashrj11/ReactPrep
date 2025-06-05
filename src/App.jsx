import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/ContextProvider'

function App() {

  return (
    <UserContextProvider>
      {/* <UserContext.Provider></UserContext.Provider value={}> */}


      <h2 className='text-3xl text-blue-700 bg-sky-100'>

        Context Api
      </h2>

      <Login />
      <Profile />

    </UserContextProvider>
  )
}

export default App

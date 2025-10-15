import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import appWriteAuth from './appWrite/auth'
import {login, logout} from './feactres/authSlice'
import { Header, Footer } from './components'
import {Outlet} from 'react-router-dom'

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    appWriteAuth.getCurrentUser()
      .then((userData)=>{
        if(userData) {
          login({userData})
        }else{
          logout()
        }
      })
      .finally(()=>{setLoading(false)})
  },[])
  
  return loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
          <Outlet/>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App

import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import appWriteAuth from './appWrite/auth'
import {login, logout} from './feactres/authSlice'
import { Flag } from 'appwrite'

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
  return (
    <div>
      
    </div>
  )
}

export default App

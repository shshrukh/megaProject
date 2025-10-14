import  { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authServise from './appWrite/auth';
import {login, logout} from './feactres/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
 
function App() {
 const [loading, setLoading] = useState(true);
 const dispatch = useDispatch();

 useEffect(() => {
  authServise.getCurruntAccout()
    .then((data)=>{
      if(!data) return dispatch(logout());
      dispatch(login({data}))
    })
    .finally(()=> setLoading(false))
 },[])
  
 return !loading ? (
  <div className='min-h-screen flex flex-wrap'>
    <div className='w-full block'>
      <Header/>
      <main>
        {/* Outlet  */}
      </main>
      <Footer/>
    </div>
  </div>
 ):(null)
}

export default App

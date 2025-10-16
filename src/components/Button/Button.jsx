import appWriteAuth from '../../appWrite/auth';
import { logout } from '../../feactres/authSlice';
import {useDispatch} from 'react-redux';

const Button = () => {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        appWriteAuth.logout()
            .then(()=>{
                dispatch(logout())
            })
    }
  return (
    <button 
        className='inline-block px-6 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
    >{text}</button>
  )
}

export default Button

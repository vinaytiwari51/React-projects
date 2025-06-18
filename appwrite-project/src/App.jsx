import {useDispatch} from 'react-redux'
import { useState, useEffect } from 'react'
import { Header, Footer } from './container'

import {login, logout} from './store/authSlice'
import { Outlet } from 'react-router-dom'
import authentiService from './authServices/auth_services'

import './App.css'

function App() {
  
 const [loading, setLoading] = useState(true);
 const dispatch = useDispatch();

  useEffect(() => {
        authentiService.getCurrentAccount()
        .then((userData) =>{
          if (userData) {
            dispatch(login({userData}))
          } else {
            dispatch(logout())
          }
        })
        .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
       
        <main>
        TODO:  <Outlet />
        </main>
        
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

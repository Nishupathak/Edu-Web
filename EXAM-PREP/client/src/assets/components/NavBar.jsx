// eslint-disable-next-line no-unused-vars
import React from 'react'
import '/src/css/component/navbar.css'
import { Link } from 'react-router-dom'
import pageChangeEffect from '../sounds/pageChange.mp3'
import { useAuth } from '../../contexts/AuthContext';


export default function NavBar() {
  
  const {isAuthentic, userData} = useAuth();
  const handleClick = ()=>{
    new Audio(pageChangeEffect).play()
  }
  
  return (
    <header className="navbar-container" >
        
        
        <div className='nav-container'>
          <ul>
            <Link onClick={handleClick} className='list-items active' to='/bookfinder'>Find Book</Link>
            <Link onClick={handleClick} className='list-items' to='/writeus'>Write Us</Link>
            <Link onClick={handleClick} className='list-items' to='/allSubjects'>Subjects</Link>
            <Link onClick={handleClick} className={isAuthentic? 'list-items logedIn' : 'list-items' } to={isAuthentic? '/profile':'/signIn'}>{
              isAuthentic? userData.username.toUpperCase()[0] : 'Login'
            }</Link>  
          </ul>
        </div>
    </header>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../components/vegetable.jpg'
import './frount.css'

const FrontPage = () => {
  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/home')
  }

  return (
    <section className='landing-img'>
              <h1 className='test1'>Your Go To Online <strong>Grocery</strong> Store</h1>
              <h2 className='test1'>Delivering Your Needs in 10 Minutes or Less</h2>
              <div className='click'>                
               <button type='button' class="btn btn-primary mb1 bg-green" onClick={navigateHome}>Get Started</button>
              </div></section>
         );
}
export default FrontPage

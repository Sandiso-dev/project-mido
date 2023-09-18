import React from 'react'
import { useState } from 'react'
import hero from '../assets/images/landing2.png'
import { Slide } from 'react-reveal'
import Flip from 'react-reveal/Flip';

const Landing = () =>{

const [nav, setNav] = useState(false);

//FUNCTION FOR SENDING AN EMAIL 
const sendEmail = async () =>{
    const email = document.getElementById('emailInput').value;

    try {
    //FETCHING DATA FROM MY EXPRESS SERVER 
    const res = await fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',

        },
        body: JSON.stringify({ email }),
    });

    if (res.ok){
        alert('Email sent successfully.')
    }else('Email sending failed');

        
    } catch (error) {
        console.log(error);
        alert('AN ERROR OCCUREED.')
    }
}

    return(
        <>
    <section>
        <div className="nav-container">

            <div className="logo">
                <Slide right>
                    <h3>EMI-DEISGNS</h3>
                </Slide>
            
                
            </div>

            <div className="nav">
            <ul>
                <li>
                    <a href="/About">About</a>
                </li>

                <li>
                    <a href="/About">Gallery</a>
                </li>

                <li>
                    <a href="/About">Contact</a>
                </li>
            </ul>
            </div>

            <div onClick={()=> setNav(!nav)} className="menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
        </div>

        <div className="hero-section">
                 
                 <div>
                 <Flip left>
                <h3>Get <span style={{color:'gold'}}>Ready</span></h3>
                </Flip>
                 </div>

                <Flip right>
                <div>  <h1 className='H2'>We're Finishing! <span style={{color:'gold'}}>.</span></h1></div>
                </Flip>
                <p>There's art in ideas</p>

                <input type="text" placeholder='yourName@gmail.com' className='input' id='emailInput'/>
                <button onClick={()=> sendEmail()}>Get Quote</button>

         </div>

      
       {nav ?  <div className="overlay"></div> : ''}
        <div className={nav ? 'sidebar' : 'active'}>

        <div className="nav2">

        <div className="logo2">
        <h3>EMI-DESIGNS </h3>

       <div onClick={()=> setNav(!nav)} className='close'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor" class="bi bi-x-diamond-fill" viewBox="0 0 16 16">
        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/>
        </svg>
        </div>
            </div>
        

        <div className="sideTwo">
            <ul >
                <li >
                    <a  href="/About">About</a>
                </li>

                <li>
                    <a href="/About">Gallery</a>
                </li>

                <li>
                    <a href="/About">Contact</a>
                </li>
            </ul>
        </div>
            
        </div> 
        </div>
    </section>
    </>

    )
     
}

export default Landing
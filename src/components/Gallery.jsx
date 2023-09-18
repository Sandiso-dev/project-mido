import React from 'react'
import SlideShow from '../animations/SlideShow'
import { Slide } from 'react-reveal'
import Flip from 'react-reveal/Flip';


const Gallery = () =>{
    return (
        <>
        <section className='gg'>
            <div className='gallery'>
            <h3>EMI- <span className='s1'>DESIGNS</span><span style={{color:'gold'}}>.</span></h3>
            <Flip right>
            <h2 className='s2'>Gallery</h2>
            </Flip>
            </div>
            <SlideShow/>
         
        </section>
        </>
    )
}

export default Gallery
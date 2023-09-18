import React from 'react'
import { useState } from 'react'
import profile from '../assets/images/profile.jpg'

const About = () =>{

    const [more, setMore] = useState(true);
    return (
        <>
        <section className='about'>
            <div className="pic">
                <img src={profile} alt="" srcset="" />
            </div>
           <div className="text">
           <p>Welcome to Emi-designs, where we take pride in transforming houses into homes with over a decade of expertise in skim finishing plaster and painting interior house designs. With a rich history spanning more than 10 years, we've honed our skills to perfection, making us your trusted partner
              in enhancing the aesthetics and functionality of your living spaces. <span style={{color:'gold', cursor:'pointer'}} onClick={()=> setMore(!more)}>Read More... 
              </span> <span className={more ? 'readMore' : ''}><p>Our dedicated team of artisans and craftsmen is committed to delivering impeccable finishes that not only beautify but also protect your walls, ceilings, and interiors. We understand that your home
              is a reflection of your personality, and that's why we go above and beyond to create bespoke designs tailored to your unique style and preferences. From classic elegance to contemporary chic, our experienced professionals can bring any vision to life. Let us transform your house into 
            the dream home you've always envisioned, one brushstroke at a time.</p></span></p>
           </div>

        </section>
        </> 
    )
}

export default About
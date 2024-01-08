import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Saikat</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>
                <li>
                    <a href='#portfolio' className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href='#testimonial' className='footer__link'>Testimonial</a>
                </li>
            </ul>

            <div className='footer__social'>
            <a href='https://www.instagram.com/' className='footer__social-link' target='__blank'>
            <i class='uil uil-instagram'></i>
            </a>
            <a href='https://www.facebook.com/' className='footer__social-link' target='__blank'>
            <i class='uil uil-facebook'></i>
            </a>
            <a href='https://twitter.com/' className='footer__social-link' target='__blank'>
            <i class='uil uil-twitter'></i>
            </a>
            </div>

            <span className='footer__copy'>&#169; Aditta_Saikat. All rigths reserved
</span>
        </div>
    </footer>
  )
}

export default Footer
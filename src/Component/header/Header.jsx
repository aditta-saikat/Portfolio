import React, { useState } from 'react';
import "./header.css";


const Header = () => {
  const [Toggle , showMenu]  = useState(false);
  const [Active , linkActive] = useState('#home');
  return (
    <header className="header">
      <nav className="nav container">
         <a href='index.html' className='nav__logo'>Aditta</a>

         <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
            <ul className='nav__list grid'>
               <li className='nav__item'>
                   <a href='#home' onClick={()=> linkActive('#home')} className={Active === '#home' ? 'nav__link active-link' : 'nav__link'  }>
                      <i className='uil uil-estate nav__icon'></i>
                      Home
                   </a>
               </li>

               <li className='nav__item'>
                   <a href='#about'onClick={()=> linkActive('#about')} className={Active === '#about' ? 'nav__link active-link' : 'nav__link'  }>
                      <i className='uil uil-user nav__icon'></i>
                      About
                   </a>
               </li>

               <li className='nav__item'>
                   <a href='#skills' onClick={()=> linkActive('#skills')} className={Active === '#skills' ? 'nav__link active-link' : 'nav__link'  }>
                      <i className='uil uil-file-alt nav__icon'></i>
                      Skills
                   </a>
               </li>
               <li className='nav__item'>
                   <a href='#services' onClick={()=> linkActive('#services')} className={Active === '#services' ? 'nav__link active-link' : 'nav__link'  }>
                      <i className='uil uil-briefcase nav__icon'></i>
                      Services
                   </a>
               </li>
               <li className='nav__item'>
                   <a href='#portfolio' onClick={()=> linkActive('#portfolio')} className={Active === '#portfolio' ? 'nav__link active-link' : 'nav__link'  }>
                      <i className='uil uil-scenery nav__icon'></i>
                      Portfolio
                   </a>
               </li>
               <li className='nav__item'>
                   <a href='#contact' onClick={()=> linkActive('#contact')} className={Active === '#contact' ? 'nav__link active-link' : 'nav__link'  }>
                      <i className='uil uil-message nav__icon'></i>
                      Contact
                   </a>
               </li>
            </ul>

            <i class='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
         </div>

         <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
           <i class='uil uil-apps'></i>
         </div>
      </nav>

    </header>
  )
}

export default Header
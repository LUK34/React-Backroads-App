import React from 'react'
import {pageLinks,socialLinks} from '../data';

const Footer = () => {
  return (
    <footer class='section footer'>
      
      <ul class='footer-links'>
        {
          pageLinks.map((link)=>
          {
            const {id, href, text} = link
            return (
              <li key={id}>
                <a href={href} className='footer-link'>{text}</a>
              </li>
            )
          })
        }
      </ul>

      <ul class='footer-icons'>
        {
          socialLinks.map((link)=>
          {
            const {id, href, icon} = link
            return(
              <li key={id}>
              <a href={href} target='_blank' className='footer-icon' rel='noreferrer'>
                <i class={icon}></i>
              </a>
            </li>
            )

          })
        }
      </ul>


      <p className='copyright'>
        copyright &copy; Luke Rajan Mathew Backroads Application
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer

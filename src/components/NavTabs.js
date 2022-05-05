import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about-me"
          onClick={() => handlePageChange('About-Me')}

          className={currentPage === 'About-Me' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#my-portfolio"
          onClick={() => handlePageChange('My-Portfolio')}

          className={currentPage === 'My-Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          My Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#my-resume"
          onClick={() => handlePageChange('My-Resume')}


          className={currentPage === 'My-Resume' ? 'nav-link active' : 'nav-link'}
        >
          My Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;

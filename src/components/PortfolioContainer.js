import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/About-Me';
import MyPortfolio from './pages/My-Portfolio';
import MyResume from './pages/MyResume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'My-Portfolio') {
      return <MyPortfolio />;
    }
    if (currentPage === 'My-Resume') {
      return <MyResume />;
    }
     {
      return <AboutMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

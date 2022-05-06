import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/About-Me';
import MyPortfolio from './pages/My-Portfolio';
import MyResume from './pages/MyResume';
import ContactMe from './pages/ContactMe';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'ContactMe') {
      return <ContactMe />;
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
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

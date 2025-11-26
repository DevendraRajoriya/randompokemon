import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link to="/" className="nav-logo">
              <span className="slasher-accent">RANDOM</span>POKEMON
            </Link>
            <div className="nav-links">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Team Generator
              </Link>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            <span className="slasher-accent">CYPHERPUNK</span> EDITION
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
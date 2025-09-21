'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <header>
      {/* Start Navigation */}
      <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs white navbar-fixed no-background">
        <div className="container-full d-flex justify-content-between align-items-center">
          {/* Start Header Navigation */}
          <div className="navbar-header">
            <button 
              type="button" 
              className="navbar-toggle" 
              data-toggle="collapse" 
              data-target="#navbar-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <Link className="navbar-brand" href="/">
              <Image 
                src="/assets/img/logo-light.png" 
                className="logo logo-display" 
                alt="Logo"
                width={120}
                height={40}
              />
              <Image 
                src="/assets/img/logo-light.png" 
                className="logo logo-scrolled" 
                alt="Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>
          {/* End Header Navigation */}

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbar-menu">
            <Image src="/assets/img/logo-light.png" alt="Logo" width={120} height={40} />
            <button 
              type="button" 
              className="navbar-toggle" 
              data-toggle="collapse" 
              data-target="#navbar-menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fa fa-times"></i>
            </button>
            
            <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
              <li className="dropdown megamenu-fw megamenu-style-two column-two">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Demos</a>
                <ul className="dropdown-menu megamenu-content" role="menu">
                  <li>
                    <div className="col-menu-wrap">
                      <div className="menu-cal-items">
                        <div className="col-menu">
                          <h4>Homepage Dark</h4>
                          <ul className="menu-col">
                            <li><Link href="/">Home Ai Agency</Link></li>
                            <li><Link href="/ai-solution-dark">Home Ai Solution</Link></li>
                            <li><Link href="/image-generator-dark">Image Generator</Link></li>
                            <li><Link href="/ai-startup-dark">Ai Startup</Link></li>
                            <li><Link href="/artificial-intelligence-dark">Artificial intelligence</Link></li>
                            <li><Link href="/text-generator-dark">Text Generator</Link></li>
                            <li><Link href="/chatbot-dark">Home Chatbot</Link></li>
                          </ul>
                        </div>
                        <div className="col-menu">
                          <h4>Homepage Light</h4>
                          <ul className="menu-col">
                            <li><Link href="/ai-agency">Home Ai Agency</Link></li>
                            <li><Link href="/ai-solution">Home Ai Solution</Link></li>
                            <li><Link href="/image-generator">Image Generator</Link></li>
                            <li><Link href="/ai-startup">Ai Startup</Link></li>
                            <li><Link href="/artificial-intelligence">Artificial intelligence</Link></li>
                            <li><Link href="/text-generator">Text Generator</Link></li>
                            <li><Link href="/chatbot">Home Chatbot</Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="megamenu-banner">
                        <div className="thumb">
                          <Image src="/assets/img/thumb/6.jpg" alt="Image Not Found" width={200} height={120} />
                          <a href="https://www.youtube.com/watch?v=iyARCQ7Ohd4" className="popup-youtube video-button">
                            <i className="fas fa-play"></i>
                          </a>
                        </div>
                        <h4>Intro Video</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu">
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/about-us-2">About Us Two</Link></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Team</a>
                    <ul className="dropdown-menu">
                      <li><Link href="/team">Team Style One</Link></li>
                      <li><Link href="/team-2">Team Style Two</Link></li>
                      <li><Link href="/team-details">Team Details</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/pricing">Pricing</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                  <li><Link href="/404">Error Page</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="/project" className="dropdown-toggle" data-toggle="dropdown">Projects</Link>
                <ul className="dropdown-menu">
                  <li><Link href="/project">Project Style One</Link></li>
                  <li><Link href="/project-two">Project Style Two</Link></li>
                  <li><Link href="/project-details">Project Details</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Services</a>
                <ul className="dropdown-menu">
                  <li><Link href="/services">Services Version One</Link></li>
                  <li><Link href="/services-2">Services Version Two</Link></li>
                  <li><Link href="/services-3">Services Version Three</Link></li>
                  <li><Link href="/services-4">Services Version Four</Link></li>
                  <li><Link href="/services-5">Services Version Five</Link></li>
                  <li><Link href="/services-details">Services Details</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog</a>
                <ul className="dropdown-menu">
                  <li><Link href="/blog-standard">Blog Standard</Link></li>
                  <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                  <li><Link href="/blog-2-colum">Blog Grid Two Colum</Link></li>
                  <li><Link href="/blog-3-colum">Blog Grid Three Colum</Link></li>
                  <li><Link href="/blog-single">Blog Single</Link></li>
                  <li><Link href="/blog-single-with-sidebar">Blog Single With Sidebar</Link></li>
                </ul>
              </li>
              <li><Link href="/contact-us">contact</Link></li>
            </ul>
          </div>

          <div className="attr-right">
            {/* Start Atribute Navigation */}
            <div className="attr-nav">
              <ul>
                <li className="side-menu">
                  <a href="#" onClick={() => setIsSideMenuOpen(true)}>
                    <span className="bar-1"></span>
                    <span className="bar-2"></span>
                    <span className="bar-3"></span>
                  </a>
                </li>
                <li className="button">
                  <Link className="btn btn-style-one btn-border-light" href="/contact-us">
                    Get Started <i className="fas fa-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
            {/* End Atribute Navigation */}
          </div>
        </div>

        {/* Overlay screen for menu */}
        <div className="overlay-screen"></div>
        {/* End Overlay screen for menu */}
      </nav>
      {/* End Navigation */}

      {/* Start Side Menu */}
      <div className={`side ${isSideMenuOpen ? 'active' : ''}`}>
        <a href="#" className="close-side" onClick={() => setIsSideMenuOpen(false)}>
          <i className="fas fa-times"></i>
        </a>
        <div className="widget">
          <div className="logo">
            <Image src="/assets/img/logo-light-solid.png" alt="Logo" width={120} height={40} />
          </div>
          <p>
            Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means.
          </p>
        </div>
        <div className="widget address">
          <div>
            <ul>
              <li>
                <div className="content">
                  <p>Address</p> 
                  <strong>California, TX 70240</strong>
                </div>
              </li>
              <li>
                <div className="content">
                  <p>Email</p> 
                  <strong>support@validtheme.com</strong>
                </div>
              </li>
              <li>
                <div className="content">
                  <p>Contact</p> 
                  <strong>+44-20-7328-4499</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget newsletter">
          <h4>Get Subscribed!</h4>
          <form action="#">
            <div className="input-group stylish-input-group">
              <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" />
              <span className="input-group-addon">
                <button type="submit">
                  <i className="fas fa-long-arrow-right"></i>
                </button>  
              </span>
            </div>
          </form>
        </div>
        <div className="widget social">
          <ul className="link">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fab fa-behance"></i></a></li>
          </ul>
        </div>
      </div>
      {/* End Side Menu */}
    </header>
  );
};

export default Header;
import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import { NavbarBrand } from 'react-bootstrap';

import Footer from './components/Footer';
import AboutMePage from './components/AboutMePage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';

class App extends React.Component() {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Marissa Flynn',
      headerLinks: [
        { title: 'About Me', path:'/' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' },
        { title: 'Resume', path: '/resume' },
      ],
      aboutMe: {
        title: 'About Me',
        textContent: 'about me text content here'

      },
      portfolio: {
        title: 'portfolio title',
        subTitle: 'portfolio subtitle here',
        textContent: 'Take a look at my projects'
      },
      contact: {
        title: 'Contact Me',

      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}> 
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand> Marissa Flynn </Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">About Me</Link>
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/resume">Resume</Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
              <Route path='/' exact render={() => <AboutMePage title={this.state.aboutMe.title} textContent={this.state.aboutMe.textContent}/> } />
              <Route path='/portfolio' render={() => <PortfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} textContent={this.state.portfolio.textContent}/>} />
              <Route path='/contact' render={() => <ContactPage title={this.state.contact.title}/> } />
        <Footer />

        </Container>
      </Router>
    );
  };
  
}

export default App;

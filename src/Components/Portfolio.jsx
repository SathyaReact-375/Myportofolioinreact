import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Form, Button, Row, Col } from 'react-bootstrap';
import '../App.css'
function Portfolio() {
  return (
    <>
     
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-4">
        <Container fluid>
          <Navbar.Brand href="#home" className="fs-1 text-warning">Sathya</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skill">Skill</Nav.Link>
              <Nav.Link href="#project">Project</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Button variant="outline-warning" className="ms-3">Contact Me</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

   
      <section id="home" className="pt-5 mt-5 bg-light">
        <Container className="d-flex flex-column flex-md-row align-items-center py-5">
          <div className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-4">Hi, I'm <span className="text-warning">Sathya</span><br /> a Frontend Developer</h1>
            <p className="lead">This is my responsive page created with HTML5, CSS, and React.</p>
            <Button variant="dark">Hire Me</Button>
          </div>
          <div className="text-center ms-5">
            <img src="../src/assets/images/20220501_083642-ai-brush-removebg-asqg9mdd.png" alt="Sathya" className="img-fluid" style={{ maxHeight: '500px' }} />
          </div>
        </Container>
      </section>

    
      <section id="about" className="bg-dark text-white py-5">
        <Container>
          <h1 className="text-center mb-4">About Me <br /> Developer <span className="text-warning">& Designer</span></h1>
          <p className="lead text-center mx-auto" style={{ maxWidth: "800px" }}>
            I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more interactive with web animations. Responsive design makes your website accessible to all users, regardless of their device.
          </p>
        </Container>
      </section>

    
      <section id="contact" className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-dark mb-4">Contact <span className="text-warning">Me</span></h2>
          <Form className="mx-auto" style={{ maxWidth: '600px' }}>
            <Form.Control type="text" placeholder="Full Name" className="mb-3" required />
            <Form.Control type="email" placeholder="Email" className="mb-3" required />
            <Form.Control type="text" placeholder="Phone Number" className="mb-3" />
            <Form.Control type="text" placeholder="Subject" className="mb-3" />
            <Form.Control as="textarea" rows={4} placeholder="Your Message" className="mb-3" required />
            <Button variant="warning" type="submit">Send Message</Button>
          </Form>
        </Container>
      </section>

   
      <footer className="bg-dark text-white py-4">
        <Container className="text-center">
          <p>Connect with me on social media</p>
          <div className="d-flex justify-content-center gap-3 fs-4 text-warning">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Portfolio;

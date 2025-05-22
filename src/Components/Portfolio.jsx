import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Form, Button, Row, Col } from "react-bootstrap";
import "../App.css";
import img from "../assets/images/portfolio_profile.png";

function Portfolio() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-4">
        <Container fluid>
          <Navbar.Brand href="#home">
            <div className="logo d-flex align-items-center">
              <span className="animated-s">Sathya</span>
            </div>
          </Navbar.Brand>
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
            <img src={img} alt="Sathya" className="img-fluid" style={{ maxHeight: "500px" }} />
          </div>
        </Container>
      </section>

      <section id="about" className="bg-dark text-white py-5">
        <Container>
          <h1 className="text-center mb-4">About Me <br /> Developer <span className="text-warning">& Designer</span></h1>
          <p className="lead text-center mx-auto" style={{ maxWidth: "800px" }}>
            I am a front-end web developer. I can provide clean code and pixel-perfect design. I also make the website more interactive with web animations. Responsive design makes your website accessible to all users, regardless of their device.
          </p>
        </Container>
      </section>

      <section id="skill" className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-dark mb-4">My <span className="text-warning">Skills</span></h2>
          <Row className="justify-content-center">
            {[
              { title: "React & JavaScript", desc: "Building interactive UI components." },
              { title: "HTML & CSS", desc: "Creating clean, structured layouts." },
              { title: "Bootstrap", desc: "Leveraging the grid system for styling." },
              { title: "Python", desc: "Handling backend logic efficiently." },
              { title: "SQL", desc: "Managing databases with optimized queries." }
            ].map((skill, index) => (
              <Col md={4} sm={6} key={index} className="mb-4 d-flex">
                <div className="p-4 border rounded shadow-lg bg-dark text-white text-center flex-grow-1 d-flex flex-column">
                  <h4 className="text-warning">{skill.title}</h4>
                  <p className="flex-grow-1">{skill.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section id="project" className="py-5 bg-dark text-white">
  <Container>
    <h2 className="text-center mb-5">My <span className="text-warning">Projects</span></h2>
    <Row className="gy-4">
      <Col md={4}>
        <div className="p-4 border rounded bg-light text-dark h-100 shadow text-center">
          <h5 className="text-warning">CozyHome - Interior Design</h5>
          <p>A simple and elegant interior design landing page using HTML, CSS, and JavaScript.</p>
          <a
            href="https://sathya-735.github.io/cozyhome/index.html"
            className="btn btn-dark mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </Col>

      <Col md={4}>
        <div className="p-4 border rounded bg-light text-dark h-100 shadow text-center">
          <h5 className="text-warning">Zara Cars</h5>
          <p>A car rental website built using React, Bootstrap, and routing with responsive design.</p>
          <a
            href="https://zara-theta-ten.vercel.app/"
            className="btn btn-dark mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </Col>

      <Col md={4}>
        <div className="p-4 border rounded bg-light text-dark h-100 shadow text-center">
          <h5 className="text-warning">Fertix - Agri Ecommerce</h5>
          <p>A complete frontend e-commerce app for agriculture products with cart, wishlist, and checkout functionality.</p>
          <a
            href="https://fertix-git-main-sathyas-projects-9d486476.vercel.app/"
            className="btn btn-dark mt-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </Col>
    </Row>
  </Container>
</section>
      <section id="contact" className="py-5 bg-light">
  <Container>
    <h2 className="text-center text-dark mb-4">Contact <span className="text-warning">Me</span></h2>
    
    <div className="mx-auto mb-4 p-4 border rounded bg-white shadow" style={{ maxWidth: "600px" }}>
      <h5 className="text-warning mb-3">My Contact Details</h5>
      <p><strong>Email:</strong> sathyasiva735@gmail.com</p>
      <p><strong>Phone:</strong> +91 88383 09023</p>
      <p><strong>Address:</strong> 43/3C Mettu Street, Tirunelveli Town, Tirunelveli, Pincode: 627006</p>
    </div>

    
  </Container>
</section>


      <section id="contact" className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-dark mb-4">Contact <span className="text-warning">Me</span></h2>
          <Form className="mx-auto" style={{ maxWidth: "600px" }}>
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
      <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-warning">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-warning">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/SathyaReact-375" target="_blank" rel="noopener noreferrer" className="text-warning">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.instagram.com/her_king_sathya?igsh=MTZnamV1c20wNnAyeQ==" target="_blank" rel="noopener noreferrer" className="text-warning">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-warning">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </Container>
</footer>
    </>
  );
}

export default Portfolio;

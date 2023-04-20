import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () =>  {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Homework</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Light</Nav.Link>
            <Nav.Link>Dark</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Header;
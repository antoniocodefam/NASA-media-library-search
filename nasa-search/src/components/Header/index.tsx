import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function AppHeader() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            NASAS Media
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

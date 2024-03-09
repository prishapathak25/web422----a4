import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';

const MainNav = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchField = event.target.elements.searchField.value;
    router.push(`/artwork?title=true&q=${searchField}`);
  };
  return (
    <>

    <Navbar expand="lg" className="fixed-top navbar-dark bg-dark">
      <Container>
        <Navbar.Brand>Student Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" passHref legacyBehavior>Home</Nav.Link>
            <Nav.Link href="/search" passHref legacyBehavior>Advanced Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form onSubmit={handleSubmit} inline>
            <Row>
              <Col xs="auto">
                <Form.Control name="searchField" type="text" placeholder="Search" className="mr-sm-2" />
              </Col>
              <Col xs="auto">
                <Button type="submit">Search</Button>
              </Col>
            </Row>
          </Form>
      </Container>
    </Navbar>

    <br />
    <br />

    </>
  );
}

export default MainNav;
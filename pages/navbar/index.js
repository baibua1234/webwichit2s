import Head from 'next/head'
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';

export default function TodoNavbar() {
  //const [blog, setBlog] = useState()
  return (
    <Container fluid>
    <Head>
      <title>This is Blog Page</title>
    </Head>
    <Navbar bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/blog">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/blogs">Write</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="Light link">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
  </Navbar>

    <footer></footer>
  </Container>
  )
}

import { Navbar, Container, Nav } from 'react-bootstrap';
 
const MainNavbar = () => {
  return (
<>
  <Navbar fixed="top" bg="dark" variant="dark">
    <Container>
    	<Navbar.Brand href="">Handyman</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="/home">Home</Nav.Link>
				<Nav.Link href="/workers">Workers</Nav.Link>
				<Nav.Link href="/services">Services</Nav.Link>
			</Nav>
    </Container>
  </Navbar>
</>
  )
}

export default MainNavbar;
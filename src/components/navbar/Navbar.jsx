import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logonavbar from '../../assets/logonavbar.png';
import { BsSearch } from 'react-icons/bs';
//import { NavLink } from 'react-router-dom';

function HeaderNavBar() {
    return (
        <>
            {['xl'].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className=" mb-3 color-light"
                    data-bs-theme="dark"
                    style={{
                        background: '#000000'
                    }}
                >
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img
                                src={logonavbar}
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none',
                                color: '#fff'
                            }}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            data-bs-theme="dark"
                            style={{
                                background:
                                    '#000000',
                                opacity: 0.9
                            }}
                        >
                            <Offcanvas.Header
                                closeButton
                            >
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    <img
                                        src={
                                            logonavbar
                                        }
                                        alt="logo"
                                    />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav
                                    className="justify-content-end flex-grow-1 pe-3 gap-5"
                                    style={{
                                        color: '#fff'
                                    }}
                                >
                                    <Form className="d-flex flex-grow-1">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search..."
                                            className="me-2 search-style"
                                            aria-label="Search"
                                        />
                                        <Button variant="warning">
                                            <BsSearch />
                                        </Button>
                                    </Form>
                                    <Nav.Link
                                        href="#action1"
                                        className="nav-Link"
                                        title="login"
                                    >
                                        Login
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#action2"
                                        className="nav-Link"
                                        title="shop"
                                    >
                                        Shop
                                    </Nav.Link>
                                    <Nav.Link
                                        href="#action3"
                                        className="nav-Link"
                                        title="cart"
                                    >
                                        Cart
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default HeaderNavBar;

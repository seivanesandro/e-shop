import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logonavbar from '../../assets/logonavbar.png';
import { BsSearch } from 'react-icons/bs';
import { BsBasket2Fill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import { useStateValue } from '../../hooks/StateProvider';

function HeaderNavBar() {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] =
        useStateValue();
    return (
        <>
            {['xl'].map(expand => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className="color-light"
                    data-bs-theme="dark"
                    style={{
                        background: '#000000'
                    }}
                >
                    <Container fluid>
                        <Navbar.Brand>
                            <NavLink to="/">
                                <img
                                    src={
                                        logonavbar
                                    }
                                    alt="logo"
                                />
                            </NavLink>
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
                                    <NavLink to="/">
                                        <img
                                            src={
                                                logonavbar
                                            }
                                            alt="logo"
                                        />
                                    </NavLink>
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
                                    <NavLink
                                        to="/login"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-Link'
                                                : 'nav-Link'
                                        }
                                        title="login"
                                    >
                                        Login
                                    </NavLink>
                                    {/*TODO: so vai estar activo se o auth for verdadeiro*/}
                                    {/* <NavLink
                                        to="/logout"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-Link'
                                                : 'nav-Link'
                                        }
                                        title="logout"
                                    >
                                        Logout
                                    </NavLink> */}
                                    <NavLink
                                        to="/shop"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-Link'
                                                : 'nav-Link'
                                        }
                                        title="shop"
                                    >
                                        Shop
                                    </NavLink>
                                    <NavLink
                                        to="/checkout"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-Link'
                                                : 'nav-Link'
                                        }
                                        title="cart"
                                    >
                                        <BsBasket2Fill
                                            size={
                                                30
                                            }
                                        />
                                        <span>
                                            {
                                                basket.length
                                            }
                                        </span>
                                    </NavLink>
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

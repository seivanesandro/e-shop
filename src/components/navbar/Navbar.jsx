import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logonavbar from '../../assets/logonavbar.png';
import { BsSearch } from 'react-icons/bs';
import { BsBasket2Fill } from 'react-icons/bs';
import { IoHome } from 'react-icons/io5';

import {
    NavLink,
    useNavigate
} from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/Firebase';
import { signOut } from 'firebase/auth';
import { useStateValue } from '../../hooks/StateProvider';

function HeaderNavBar() {
    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] =
        useStateValue();
    const [user] = useAuthState(auth);

    const navigatelougout = useNavigate();
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Log de sucesso ou redirecionamento para a página de login
                navigatelougout('/login');
                //FIXME: erase for deploy
                alert(
                    `Até breve, ${
                        user.displayName ||
                        user.email
                    }`
                );
                console.log(
                    'Logout realizado com sucesso'
                );
            })
            .catch(error => {
                // Lidar com erros de logout
                console.error(
                    'Erro ao realizar logout:',
                    error
                );
            });
    };

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
                                        to="/"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-Link'
                                                : 'nav-Link'
                                        }
                                        title="Home"
                                    >
                                        <IoHome
                                            size={
                                                23
                                            }
                                        />
                                    </NavLink>
                                    {user ? (
                                        <NavLink
                                            to="/login"
                                            className={({
                                                isActive
                                            }) =>
                                                isActive
                                                    ? 'active nav-Link'
                                                    : 'nav-Link'
                                            }
                                            title="logout"
                                            onClick={
                                                handleLogout
                                            }
                                        >
                                            Logout
                                        </NavLink>
                                    ) : (
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
                                    )}
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
                                    {/*FIXME: to erase after implement modal to components 
                                    <NavLink
                                        to="/modalpopup"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-Link'
                                                : 'nav-Link'
                                        }
                                        title="modal-popup"
                                    >
                                        modal
                                    </NavLink>*/}
                                    <NavLink
                                        to="/checkout"
                                        className={({
                                            isActive
                                        }) =>
                                            isActive
                                                ? 'active nav-Link ckeckout-link'
                                                : 'nav-Link ckeckout-link'
                                        }
                                        title="cart"
                                    >
                                        <BsBasket2Fill
                                            size={
                                                27
                                            }
                                        />
                                        {basket.length ===
                                        0 ? (
                                            <span
                                                style={{
                                                    visibility:
                                                        'hidden'
                                                }}
                                            >
                                                0
                                            </span>
                                        ) : (
                                            <span className="total-products-style">
                                                {
                                                    basket.length
                                                }
                                            </span>
                                        )}
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

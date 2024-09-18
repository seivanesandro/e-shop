import HeaderNavBar from './components/navbar/Navbar';
import Checkout from './pages/checkout/Checkout';
import ConstructorPage from './pages/constructorPage/ConstructorPage';
import Home from './pages/home/Home';
import {
    HashRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/Firebase';
import PageShop from './pages/shop/PageShop';
import RecoveryPasswordPage from './pages/auth/RecoveryPasswordPage';

function App() {
    const [user] = useAuthState(auth);
    return (
        <div className="App">
            <HashRouter>
                <HeaderNavBar />
                <Routes>
                    <Route
                        path="/"
                        and
                        element={<Home />}
                    />
                    <Route
                        path="/login"
                        and
                        element={<Login />}
                    />
                    <Route
                        path="/register"
                        and
                        element={<Register />}
                    />
                    <Route
                        path="/recoverypassword"
                        and
                        element={
                            <RecoveryPasswordPage />
                        }
                    />
                    <Route
                        path="/shop"
                        and
                        element={
                            user ? (
                                <PageShop />
                            ) : (
                                /*<ConstructorPage info='onn connstructor'/>*/
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/pay"
                        and
                        element={
                            user ? (
                                <ConstructorPage info="This Page is Under Construction we will be brief " />
                            ) : (
                                /**/
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/checkout"
                        and
                        element={
                            user ? (
                                <Checkout />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;

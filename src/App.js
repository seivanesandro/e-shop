import HeaderNavBar from './components/navbar/Navbar';
import Checkout from './pages/checkout/Checkout';
import ConstructorPage from './pages/constructorPage/ConstructorPage';
import Home from './pages/home/Home';
import {
    HashRouter,
    Routes,
    Route
} from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
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
                        path="/shop"
                        and
                        element={
                            <ConstructorPage info="This Page is under maintenance, we will be brief" />
                        }
                    />
                    <Route
                        path="/checkout"
                        and
                        element={<Checkout />}
                    />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;

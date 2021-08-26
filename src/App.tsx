import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Products from './features/products/Products';
import Home from './features/home/home';
import { Button } from 'reactstrap';
import { CartLink } from './features/cart/CartLink';
import Cart from './features/cart/Cart';
import Login from './features/login';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './slices/userSlice';
import { auth } from './app/firebase';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    console.log(user);

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        photo: authUser.photoURL,
                        email: authUser.email,
                        displayName: authUser.displayName
                    })
                );
            } else {
                dispatch(logout());
            }
        });
    }, [dispatch]);

    return (
        <Router>
            <div className={styles.app}>
                <header className={styles.header}>
                    <nav>
                        <Link className={styles.navLink} to="/">
                            Home
                        </Link>
                        <Link className={styles.navLink} to="/products">
                            Products
                        </Link>

                        {user.user?.uid !== null ? (
                            <>
                                <Link className={styles.navLink} to="/dashboard">
                                    Dashboad
                                </Link>
                                <Button className={styles.navLink} onClick={() => dispatch(logout())}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <Link className={styles.navLink} to="/login">
                                Login
                            </Link>
                        )}
                        <CartLink />
                    </nav>
                </header>
            </div>
            <Switch>
                <>
                    <Route exact component={Home} path="/" />
                    <Route exact component={Products} path="/products" />
                    <Route exact component={Cart} path="/cart" />
                    <Route exact component={Login} path="/login" />
                </>
            </Switch>
        </Router>
    );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./features/products/Products";
import Home from "./features/home/home";

import { CartLink } from "./features/cart/CartLink";
import Cart from "./features/cart/Cart";
import styles from "./App.module.css";

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
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
            <CartLink />
          </nav>
        </header>
      </div>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Products} path="/products" />
        <Route exact component={Cart} path="/cart" />
      </Switch>
    </Router>
  );
};

export default App;

import React from "react";
import { RouteComponentProps } from "react-router-dom";
import IPageProps from "../../types";

const Home: React.FunctionComponent<IPageProps & RouteComponentProps<any>> = (
  props
) => {
  return (
    <main className="page">
      <h1>Welcome to the Store</h1>
      <figure>
        <img src="/store.jpg" alt="A large old storefront" width="800" />
        <figcaption>Gary Houston, CC0, via Wikimedia Commons</figcaption>
      </figure>
    </main>
  );
};
export default Home;

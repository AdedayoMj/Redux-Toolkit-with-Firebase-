import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getProducts } from "../../app/api";
import { addToCart } from "../../slices/cartSlice";
import styles from "./Products.module.css";
import { receivedProducts } from "../../slices/productSlice";
import { RootState } from "../../app/rootReducer";
import { RouteComponentProps } from "react-router-dom";
import IPageProps from "../../types";

const Products: React.FunctionComponent<IPageProps & RouteComponentProps<any>> =
  (props) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(
      (state: RootState) => state.products.products
    );
    // const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
      getProducts().then((products) => {
        dispatch(receivedProducts(products));
      });
    }, []);
    return (
      <main className="page">
        <ul className={styles.products}>
          {Object.values(products).map((product) => (
            <li key={product.id}>
              <article className={styles.product}>
                <figure>
                  <img src={product.imageURL} alt={product.imageAlt} />
                  <figcaption className={styles.caption}>
                    {product.imageCredit}
                  </figcaption>
                </figure>
                <div>
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <button onClick={() => dispatch(addToCart(product.id))}>
                    Add to Cart 🛒
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </main>
    );
  };
export default Products;

import "./index.css";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
// import ProductList from "./Components/ProductList";

function App() {
  const [productList, setProductList] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // handle success
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error, "===response");
      });
    setTimeout(() => setLoader(false), 2000);
  }, []);
  console.log(productList, "===products");
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <header>
          <img className="logo" src="../images/logo.png" alt="logo" />
          <nav>
            <ul className="nav_links">
              <li>
                <Link to="/" className="navbtn">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="navbtn">
                  Add Products
                </Link>
              </li>
              <li>
                <Link to="/" className="navbtn">
                  Delete Products
                </Link>
              </li>
            </ul>
          </nav>
          <button>Signup</button>
        </header>
      )}
    </>
  );
}

export default App;

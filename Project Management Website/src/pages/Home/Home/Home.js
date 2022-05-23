import { useEffect, useState } from "react";

import NavBar from "../../Shared/NavBar/NavBar";

import Footer from "../Footer/Footer";

import "./Home.css";

const Home = () => {
  //Title Change
  useEffect(() => {
    document.title = "G.Chairs";
  }, []);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  //getting products from db
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  let popularProducts = [];
  popularProducts = products.slice(products.length - 6);
  console.log(popularProducts);

  return (
    <div>
      {/* First Part Navbar  */}
      <NavBar></NavBar>
      {/* Second Part Slider */}

      {/* Bonus (fifth) Contact Form */}

      <Footer></Footer>
    </div>
  );
};

export default Home;

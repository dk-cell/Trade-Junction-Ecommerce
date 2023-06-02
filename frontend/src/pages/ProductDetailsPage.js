import React, { useEffect, useState } from "react";
import ProductDetails from "../components/Product/ProductDetails";
import Header from "../components/Layout/Header.js";
import Footer from "../components/Layout/Footer.js";
import ShowRelatedProduct from "../components/ShowRelatedProduct";
import { useParams, useSearchParams } from "react-router-dom";
import { product } from "../static/data.js";
import { useSelector } from "react-redux";
const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.products);
  const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

 

  // const productName = name.replace(/-/g, " ");
console.log(id)
  useEffect(() => {
    if (eventData) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allProducts && allProducts.find((i) => i._id === id);
      setData(data);
    }
  }, [allProducts]);
  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <ShowRelatedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;

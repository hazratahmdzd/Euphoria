import pdBotStyle from "./PdBottomContainer.module.scss";
import ProductCard from "../../ProductCard/ProductCard";
import { useState,useEffect } from "react";
import { axiosFunction } from "../../../api";
import { Link } from "react-router-dom";

const PdBottomContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function getProductData(){
    setLoading(true);
    try {
      const response = await axiosFunction("GET", '/product');
      console.log(response);
      setProducts(response);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally{
      setLoading(false);
    }
    }
    getProductData();
  }, [])
  console.log(products);

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>
  
  return (
    <div className={pdBotStyle.pdBottomContainer}>
      <Link to="/product-post">Product Post</Link>  <br /><br /><br />
      <div className={pdBotStyle.pdh2holder}>
        <div className={pdBotStyle.pdSimilarProddiv}></div>
        <h2>Similar Products</h2>
      </div>
      <div className={pdBotStyle.pdproductscontainer}>
        {products.map((p) => (
          <ProductCard key={p.id} imgurl={p.imgurl} productName={p.productName}
          brandName={p.brandName} amount={p.price.amount} currency={p.price.currency} />
        ))}
      </div>
    </div>
  );
};

export default PdBottomContainer;

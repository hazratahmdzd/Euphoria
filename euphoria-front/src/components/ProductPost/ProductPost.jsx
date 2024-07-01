import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { axiosFunction } from "../../api";

const ProductImgPost = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [productData, setProductData] = useState({
    productName: "",
    size: "",
    color: "",
    category: "T_SHIRT",
    price: [
      {
        id: 0,
        currency: "",
        amount: 0,
      }
    ],
    picture: "",
  });


  const handleInputChange = (event) => {
    const {name,value} = event.target;
    setProductData((prevData)=> ({
      ...prevData,
      [name]: value,
      price:[
        {
          ...prevData.price,
          [name]: value,
        }
      ]
    }));
  };

  const handlePriceChange = (event) => {
    const {name,value} = event.target;
    setProductData((prevData)=> ({
      ...prevData,
      price: [{
        ...prevData.price,
        [name]: value
      }]
    }));
  };

  const handleFileChange = (event) => {
    setProductData((prevData)=> ({
     ...prevData,
     picture: event.target.files[0]
    }));
  };

  const postProduct = async (event) => {
    event.preventDefault();
  
    setLoading(true);
    const formData = new FormData();
    formData.append('id', 0);
    formData.append('productName', productData.productName);
    formData.append('size', productData.size);
    formData.append('color', productData.color);
    formData.append('category', productData.category);
    formData.append('price', JSON.stringify([productData.price]));
    formData.append('picture', productData.picture);

    try {
      const response = await axiosFunction("POST", "/product", formData);
      response && console.log(response.data);
      response && setProducts([...products, response.data]);
      setProductData({
        productName: '',
        size: '',
        color: '',
        category: 'T_SHIRT',
        price: {
          id: 0,
          currency: '',
          amount: 0
        },
        picture: ''
      });
    } catch (err) {
      console.log(err);
      setError(err);
    } finally{
      setLoading(false);
    }
  }
   
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  return (
    <div>
      <form onSubmit={postProduct}>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              name="productName"
              value={productData.productName}
              onChange={handleInputChange}
              required
            />
          </label>
          </div>
          <div>
          <label>
            Size:
            <input
              type="text"
              name="size"
              value={productData.size}
              onChange={handleInputChange}
              required
            />
          </label>
          </div>
          <div>
          <label>
            Color:
            <input
              type="text"
              name="color"
              value={productData.color}
              onChange={handleInputChange}
              required
            />
          </label>
          </div>
          <div>
          <label>
            Category:
            <input type="text" name="category" value="T_SHIRT" readOnly/>
          </label>
          </div>
          <div>
          <label>
            Amount:
            <input
              type="number"
              name="amount"
              value={productData.price.amount}
              onChange={handlePriceChange}
              required
            />
          </label>
          </div>
          <div>
            <label>
              Currency:
              <input
                type="text"
                name="currency"
                value={productData.price.currency}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
          <label>
            Picture:
            <input
              type="file"
              name="picture"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
          </label>
        </div>
        <button type="submit" style={{width:"100px",height:"50px",cursor:"pointer"}}>Add Product</button>
      </form> <br />
       <hr />
      <div style={{height: "400px" , marginTop:"10px"}}>
        {products.map((p) => (
        <ProductCard key={p.id} picture={p.picture} productName={p.productName}
         amount={p.price.amount} currency={p.price.currency} />
        ))}
      </div>
    </div>
  );
};

export default ProductImgPost;

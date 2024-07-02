import { useState } from "react";
import { axiosFunction } from "../../api";

const ProductPost = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productData, setProductData] = useState({
    id: 0,
    productName: "",
    size: "",
    color: "",
    gender: "MEN",
    category: {
      id: 0,
      name: "",
      product: "",
    },
    price: [{
      id: 0,
      currency: "",
      amount: 0,
    }],
    picture: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
      category: {
        ...prevData.category,
        [name]: value,
      },
    }));
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      price: [{
        ...prevData.price[0],
        [name]: value,
      }],
    }));
  };

  const handleFileChange = (event) => {
    setProductData((prevData) => ({
      ...prevData,
      picture: event.target.files[0],
    }));
  };

  const postProduct = async (event) => {
    event.preventDefault();

    setLoading(true);
    const formData = new FormData();
    formData.append("id", productData.id);
    formData.append("productName", productData.productName);
    formData.append("size", productData.size);
    formData.append("color", productData.color);
    formData.append("gender", productData.gender);
    formData.append("category", JSON.stringify(productData.category));
    formData.append("price", JSON.stringify([productData.price]));
    formData.append("picture", productData.picture);

    try {
      const response = await axiosFunction("POST", "/product", formData);
      setProducts([...products, response]);
      setProductData({
        id: 0,
        productName: "",
        size: "",
        color: "",
        gender: "MEN",
        category: {
          id: 0,
          name: "",
          product: "",
        },
        price: {
          id: 0,
          currency: "",
          amount: 0,
        },
        picture: "",
      });
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
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
            Gender:
            <input
              type="text"
              name="gender"
              value={productData.gender}
              readOnly
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input
              type="text"
              name="category"
              value={productData.category.name}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  category: { ...productData.category, name: e.target.value },
                })
              }
              required
            />
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
        <button
          type="submit"
          style={{ width: "100px", height: "50px", cursor: "pointer" }}
        >
          Add Product
        </button>
      </form>
      <br />
    </div>
  );
};

export default ProductPost;

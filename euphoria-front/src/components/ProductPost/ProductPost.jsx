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
    price: [
      {
        id: 0,
        currency: "AZN",
        amount: 0,
      },
    ],
    picture: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setProductData(() => ({
      ...productData,
      picture: URL.createObjectURL(event.target.files[0]),
    }));
  };

  const postProduct = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await axiosFunction("POST", "/product", productData);
      setProducts([...products, response]);
      setProductData({
        id: 0,
        productName: "",
        size: "",
        color: "",
        gender: "MEN",
        price: [
          {
            id: 0,
            currency: "",
            amount: 0,
          },
        ],
        picture: "",
      });
      console.log(response);
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
            Amount:
            <input
              type="number"
              name="amount"
              value={productData.price.amount}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  price: [
                    {
                      ...productData.price,
                      amount: e.target.value,
                      currency: "AZN",
                    },
                  ],
                })
              }
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

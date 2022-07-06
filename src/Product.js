import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ title, id, image, rating, price }) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              // eslint-disable-next-line react/jsx-key
              <img
                className="stars"
                src="https://icon-library.com/images/favorite-icon/favorite-icon-14.jpg"
                alt=""
              />
            ))}
        </div>
        <img className="product_image" src={image} alt="" />
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </div>
  );
};

export default Product;

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/Slices/cart/slice';
import { Link } from 'react-router-dom';
import { selectCartItem } from '../../redux/Slices/cart/selectors';
import { CartItem } from '../../redux/Slices/cart/types';

const typeName: string[] = ['Thin', 'Traditional'];
type ProductProps = {
  id: string;
  price: number;
  types: number[];
  sizes: number[];
  imageUrl: string;
  title: string;
};

const Product: React.FC<ProductProps> = ({
  id,
  price,
  types,
  sizes,
  imageUrl,
  title,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem(id));
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: typeName[activeType],
      sizes: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  const typeActive = types.map((type, i) => {
    return (
      <li
        key={i}
        onClick={() => setActiveType(i)}
        className={activeType === i ? 'active' : ''}
      >
        {typeName[type]}
      </li>
    );
  });

  const sizeActive = sizes.map((size, i) => {
    return (
      <li
        onClick={() => setActiveSize(i)}
        className={activeSize === i ? 'active' : ''}
        key={i}
      >
        {size} cm.
      </li>
    );
  });

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </Link>
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>{typeActive}</ul>
          <ul>{sizeActive}</ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price} EUR</div>
          <div
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

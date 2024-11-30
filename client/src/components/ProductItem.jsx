import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer flex flex-col items-start w-[15rem]"
      to={`/product/${id}`}
    >
      {/* Fixed dimensions for image box */}
      <div className="w-full h-[15rem] overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt=""
        />
      </div>

      {/* Product name and price section */}
      <div className="flex justify-between items-center w-full pt-3 pb-1">
        {/* Truncated product name */}
        <p className="truncate text-sm flex-grow">
          {name.split(' ').slice(0, 4).join(' ')}
        </p>
        {/* Currency and price */}
        <p className="text-sm font-medium flex-shrink-0">
          <span>{currency}</span> {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;

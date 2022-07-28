import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React from "react";

function Product({
  product: { title, price, retailPrice, qty, isSet, setQty, imagePath, region },
}) {
  return (
    <div className="flex flex-col justify-self-start w-full md:w-1/5 m-4">
      <div className="flex bg-card-background p-12 mb-4 relative h-72 justify-center">
        <FontAwesomeIcon
          icon={faHeart}
          className="text-2xl text-icon absolute top-2 right-2"
        />
        <img className="object-scale-down" src={imagePath} alt="new" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-icon" />
          <p className="flex ml-2">{region}</p>
        </div>

        <p className="text-lg font-bold mb-2">{title}</p>
        <ul className="text-sm mb-2">
          <li className="list-child">${price}</li>
          <li className="list-child">Qty: {qty}</li>
          {isSet && <li className="list-child">Set of {setQty}</li>}
        </ul>
        {retailPrice && (
          <p className="text-sm text-gray-400">Est retail: ${retailPrice}</p>
        )}
      </div>
    </div>
  );
}

export default Product;

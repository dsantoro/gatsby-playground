import React from "react";
import { Link } from "gatsby";

function Cards({ link, image, title, icon }) {
  return (
    <Link
      className="flex flex-col items-center p-4 transition-all duration-500 ease-in-out transform hover:-translate-y-2"
      to={link}
    >
      <img src={image} alt="Product" />
      <p className="text-center text-lg text-yellow-400 mb-4">{title}</p>
      <span className="text-yellow-400">{icon}</span>
    </Link>
  );
}

export default Cards;

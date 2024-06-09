import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import GetBase64 from "./GetBase64";

const ProductCard = async ({ product }: any) => {
  const blurData = await GetBase64(product.image);
  return (
    <div className="w-full mx-auto my-8">
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <div className="w-full h-84 overflow-hidden">
          <Image
            width={300}
            height={500}
            src={product.image}
            alt={product.name}
            placeholder="blur"
            blurDataURL={blurData}
            className="w-full h-full object-cover transition-transform duration-100 ease-in-out group-hover:opacity-0"
          />
          <Image
            width={300}
            height={500}
            src={product.hoverImage}
            alt={product.name}
            placeholder="blur"
            blurDataURL={blurData}
            className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-100 ease-in-out opacity-0 group-hover:opacity-100"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out sm:opacity-100">
          <h2 className="text-white text-xl font-semibold">{product.name}</h2>
          <p className="text-white text-lg">₹{product.price}</p>
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
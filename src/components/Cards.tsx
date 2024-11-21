import Image from 'next/image';
import React from 'react';

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {/* Card 1 */}
      <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
        <div className="flex justify-center items-center">
          <Image
            src={"/Product1.png"}
            alt="product1"
            width={250}
            height={200}
            className="rounded-sm"
          />
        </div>
        <h2 className="font-semibold text-gray-700 pt-6 text-center">Ice Cream</h2>
        <div className="flex justify-center mt-3">
          <button className="px-8 py-3 bg-primary rounded-full text-white font-medium hover:bg-sky-600">
            Buy Now
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
        <div className="flex justify-center items-center">
          <Image
            src={"/Product1.png"}
            alt="product2"
            width={250}
            height={200}
            className="rounded-sm"
          />
        </div>
        <h2 className="font-semibold text-gray-700 pt-6 text-center">Ice Cream</h2>
        <div className="flex justify-center mt-3">
          <button className="px-8 py-3 bg-primary rounded-full text-white font-medium hover:bg-sky-600">
            Buy Now
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
        <div className="flex justify-center items-center">
          <Image
            src={"/Product1.png"}
            alt="product3"
            width={250}
            height={200}
            className="rounded-sm"
          />
        </div>
        <h2 className="font-semibold text-gray-700 pt-6 text-center">Ice Cream</h2>
        <div className="flex justify-center mt-3">
          <button className="px-8 py-3 bg-primary rounded-full text-white font-medium hover:bg-sky-600">
            Buy Now
          </button>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
        <div className="flex justify-center items-center">
          <Image
            src={"/Product3.png"}
            alt="product4"
            width={250}
            height={200}
            className="rounded-sm"
          />
        </div>
        <h2 className="font-semibold text-gray-700 pt-6 text-center">Ice Cream</h2>
        <div className="flex justify-center mt-3">
          <button className="px-8 py-3 bg-primary rounded-full text-white font-medium hover:bg-sky-600">
            Buy Now
          </button>
        </div>
      </div>
      {/* Card 5 */}
      <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
        <div className="flex justify-center items-center">
          <Image
            src={"/Product3.png"}
            alt="product4"
            width={250}
            height={200}
            className="rounded-sm"
          />
        </div>
        <h2 className="font-semibold text-gray-700 pt-6 text-center">Ice Cream</h2>
        <div className="flex justify-center mt-3">
          <button className="px-8 py-3 bg-primary rounded-full text-white font-medium hover:bg-sky-600">
            Buy Now
          </button>
        </div>
      </div>
      {/* Card 6 */}  
      <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
        <div className="flex justify-center items-center">
          <Image
            src={"/Product3.png"}
            alt="product4"
            width={250}
            height={200}
            className="rounded-sm"
          />
        </div>
        <h2 className="font-semibold text-gray-700 pt-6 text-center">Ice Cream</h2>
        <div className="flex justify-center mt-3">
          <button className="px-8 py-3 bg-primary rounded-full text-white font-medium hover:bg-sky-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

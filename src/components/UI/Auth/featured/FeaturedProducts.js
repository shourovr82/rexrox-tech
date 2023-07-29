import Image from "next/image";
import Link from "next/link";

import { AiFillStar } from 'react-icons/ai'

const FeaturedProducts = ({ products }) => {
  return (

    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl font-poppins lg:text-5xl">Featured Products
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 font-Bungee-Shade">Check & Get Your Desired Product!</p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-3 sm:grid-cols-2">
          {
            products?.length && products?.map(product =>
              <div key={Math.random()} className=" bg-white rounded-2xl  space-y-4">
                <Link href={`/details/${product?._id}`}>
                  <div className="flex justify-center ">
                    <Image className="w-full rounded-t-2xl h-[300px]" src={product?.image} width={300} height={200} alt="" />
                  </div>
                  <div className="px-5 space-y-2">
                    <div>
                      <h4 className="font-Bungee-Shade font-semibold">{product?.productName}</h4>
                    </div>
                    <div className="flex justify-between items-center">
                      <h4 className="font-Bungee-Shade font-semibold text-[#9118da]">${product?.price}</h4>
                      <p className="font-Bungee-Shade font-semibold text-[#9118da] ">{product?.category}</p>
                    </div>
                    <div className="flex py-5 items-center justify-between" >
                      <p className="text-xs font-semibold py-0.5 border-[#9118da] border rounded-lg px-2">
                        {product?.status}
                      </p>
                      <p className="text-xs flex items-center gap-1 font-semibold border border-[#9118da] py-0.5 rounded-lg px-2">
                        {product?.averageRating} <AiFillStar className="text-[#f7963c]" />
                      </p>
                    </div>
                  </div>

                </Link>

              </div>)
          }



        </div>
      </div>
    </section>

  );
};

export default FeaturedProducts;
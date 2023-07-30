import MainLayout from "@/components/Layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";

const CategoriesProducts = ({ products, categoryName }) => {
  console.log(products);
  return (
    <div className="mt-5">
      <div className="flex font-Bungee-Shade   gap-3 items-center">
        <Link href="/">
          <h5>Categories</h5>
        </Link>
        <span><FaAngleRight /></span>
        <h5>{categoryName}</h5>

      </div>


      <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
        {
          products?.length && products?.map(product =>
            <div key={Math.random()} className=" bg-white shadow-lg rounded-2xl  space-y-4">
              <Link href={`/details/${product?._id}`}>
                <div className="flex justify-center ">
                  <Image className="w-full rounded-t-2xl h-[280px]" src={product?.image} width={300} height={200} alt="" />
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

  );
};

export default CategoriesProducts;



CategoriesProducts.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}


export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.BACKEND_LINK}/categories`);


  const categories = await res.json();
  const paths = categories?.data?.map((category) => ({
    params: { categoryName: category?.category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`${process.env.BACKEND_LINK}/category?categoryname=${params.categoryName}`

  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
      categoryName: params?.categoryName
    },
  };
};
import MainLayout from "@/components/Layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";

const ChooseProducts = ({ products, categoryName }) => {
  return (
    <div className="mt-5 max-w-[1280px] mx-auto pb-20">
      <div className="flex font-Bungee-Shade   gap-3 items-center">
        <Link href="/pcbuilder">
          <h5>Pc Builder</h5>
        </Link>
        <span><FaAngleRight /></span>
        <h5>Choose Product</h5>
        <span><FaAngleRight /></span>
        <h5>{categoryName}</h5>

      </div>


      <div className="space-y-5 mt-10 max-w-[1000px] mx-auto">
        {
          products?.length && products?.map(product =>
            <div key={Math.random()} className="grid items-center  grid-cols-10 bg-white shadow-lg rounded-2xl  space-y-4 justify-between">

              <div className="col-span-8 flex  w-full items-center ">
                <div className="flex justify-start">
                  <Image className="w-[250px] rounded-t-2xl h-[200px]" src={product?.image} width={300} height={200} alt="" />
                </div>
                <div className="px-5 space-y-2">
                  <div>
                    <h4 className="font-Bungee-Shade  font-semibold">{product?.productName}</h4>
                  </div>
                  <div className="">

                    <p className="font-Bungee-Shade font-semibold text-[#9118da] ">Category : {product?.category}</p>
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
              </div>

              <div className="w-full col-span-2 flex flex-col items-center gap-y-3 ">
                <h4 className="font-Bungee-Shade text-lg font-semibold text-[#9118da]">${product?.price}</h4>
                <button className="border border-[#8c18d6] hover:bg-[#8c18d6] hover:text-white duration-300 ease-in-out transition-all font-Bungee-Shade font-semibold px-3 py-2 rounded-md " type="button">Add to Builder</button>
              </div>


            </div>)
        }
      </div>
    </div>

  );
};

export default ChooseProducts;



ChooseProducts.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}


export const getServerSideProps = async (context) => {
  const { params } = context;

  try {
    // Fetch categories on the server side
    const resCategories = await fetch(`${process.env.BACKEND_LINK}/categories`);
    const categories = await resCategories.json();

    // Map category names to create paths
    const paths = categories?.data?.map((category) => ({
      params: { categoryName: category?.category },
    }));

    // Fetch products for the specific category on the server side
    const resProducts = await fetch(`${process.env.BACKEND_LINK}/category?categoryname=${params.categoryName}`);
    const data = await resProducts.json();

    return {
      props: {
        products: data.data,
        categoryName: params?.categoryName
      },
    };
  } catch (error) {
    // Handle any errors during data fetching
    console.error(error);
    return {
      notFound: true, // or any other error handling like redirect to an error page
    };
  }
};




import MainLayout from "@/components/Layouts/MainLayout";
import { addToBuilder } from "@/redux/pcbuilder/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const ChooseProducts = ({ products, categoryName }) => {
  const dispatch = useDispatch()
  const router = useRouter();

  const handleAddToBuilder = (product) => {
    dispatch(addToBuilder({ category: product?.category, product }));

    // Redirect to a specific page using the useRouter hook
    router.push('/pcbuilder');
  }


  return (
    <div className="mt-5 max-w-[1280px] mx-auto pb-20">
      <div className="flex font-Bungee-Shade   gap-1 pl-2 md:gap-3 items-center">
        <Link href="/pcbuilder">
          <h5>Pc Builder</h5>
        </Link>
        <span><FaAngleRight /></span>
        <h5>Choose Product</h5>
        <span><FaAngleRight /></span>
        <h5>{categoryName}</h5>

      </div>


      <div className="space-y-5 mt-10 w-full max-md:px-5 lg:max-w-[1000px] mx-auto">
        {
          products?.length && products?.map(product =>
            <div key={Math.random()} className="lg:grid items-center  grid-cols-10 bg-white shadow-lg rounded-2xl  space-y-4 justify-between">

              <div className="col-span-8 flex  w-full max-md:flex-col items-center ">
                <div className="flex justify-start">
                  <Image className="rounded-t-2xl " src={product?.image} width={250} height={200} alt="" />
                </div>
                <div className="px-5 max-md:w-full space-y-2">
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

              <div className="w-full max-md:pb-8 col-span-2 flex flex-col items-center gap-y-3 ">
                <h4 className="font-Bungee-Shade text-lg font-semibold text-[#9118da]">${product?.price}</h4>
                <button onClick={() => handleAddToBuilder(product)} className="border border-[#8c18d6] hover:bg-[#8c18d6] hover:text-white duration-300 ease-in-out transition-all font-Bungee-Shade font-semibold px-3 py-2 rounded-md " type="button">Add to Builder</button>
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

  const resProducts = await fetch(`${process.env.BACKEND_URL}/category?categoryname=${params.categoryName}`);
  const data = await resProducts.json();

  return {
    props: {
      products: data.data,
      categoryName: params?.categoryName
    },
  };
}





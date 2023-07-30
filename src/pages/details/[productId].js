import MainLayout from "@/components/Layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa6";

const ProductDetails = ({ product }) => {

  const getTimeFormat = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formatter = new Intl.DateTimeFormat(undefined, options);
    const bestFormatOption3 = formatter.format(date);

    return bestFormatOption3

  }


  return (
    <div className="mt-10">
      <div className="flex  items-center gap-2 pl-1 md:gap-5 text-[#afb8c4] font-medium text-sm">
        <Link href="/">
          <p>Products</p>
        </Link>
        <span><FaChevronRight /></span>
        <p>Details</p>
        <span><FaChevronRight /></span>
        <p>{product?.productName}</p>
      </div>
      {/* details */}


      <div className="mt-10 w-full  lg:grid  lg:grid-cols-7">

        <div className="col-span-3 w-full">
          <Image className="w-[500px] rounded-2xl" src={product?.image} alt="" width={300} height={200} />
        </div>

        <div className="col-span-4 max-md:mt-10 max-md:px-5">
          <div>
            <h1 className="font-Bungee-Shade font-semibold text-3xl">{product?.productName}</h1>
          </div>
          {/* rating */}
          <div className="flex  gap-10 lg:gap-20  items-center">
            <div className="flex flex-col  items-start ">
              <p className="mt-4 text-sm text-start font-Bungee-Shade">Average Rating
              </p>
              <div className="flex font-Bungee-Shade font-semibold  items-center gap-1 ">
                <AiFillStar className="text-[#ffc107]" />
                <AiFillStar className="text-[#ffc107]" />
                <AiFillStar className="text-[#ffc107]" />
                <AiFillStar className="text-[#ffc107]" />
                <BiSolidStarHalf className="text-[#ffc107]" />
                <span className="text-2xl"> {product?.averageRating}</span>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p className="mt-4 text-sm  font-Bungee-Shade ">Individual  Rating
              </p>
              <div className="flex font-Bungee-Shade font-semibold  items-center gap-1 ">
                <AiFillStar className="text-[#ffc107]" />
                <AiFillStar className="text-[#ffc107]" />
                <AiFillStar className="text-[#ffc107]" />
                <AiFillStar className="text-[#ffc107]" />
                <BiSolidStarHalf className="text-[#ffc107]" />
                <span className="text-2xl"> {product?.averageRating}</span>
              </div>
            </div>

          </div>
          {/* price */}

          <div className="mt-10 border-b flex gap-10 lg:gap-40 items-center pb-10">
            <h2 className="text-3xl font-semibold font-Bungee-Shade">
              ${product?.price}
            </h2>
            <p title="Status" className="font-Bungee-Shade border px-2 py-1  rounded-md  text-sm bg-[#aa16ff10] font-semibold">
              {product?.status}
            </p>
          </div>
          {/* key features */}
          <div className="mt-5">

            <h5 className="underline-offset-4 underline font-Bungee-Shade text-lg font-semibold">Key Features : </h5>
            <div className="mt-3 flex flex-wrap gap-5 ">
              {product?.keyFeatures?.map(feature =>
                <p key={Math.random()}
                  className="border px-2 rounded-md text-sm font-semibold border-[#880ecf]"
                >{feature}</p>)
              }
            </div>
          </div>


          {/* description */}
          <div className="mt-5">
            <p className="underline-offset-4 underline font-Bungee-Shade text-lg font-semibold">
              Description :
            </p>
            <p className="font-Bungee-Shade ">
              {product?.description}
            </p>
          </div>

        </div>
      </div>

      {/* reviews */}
      <div className="mt-10 max-md:px-5 border-t pt-5 ">
        <h4 className="underline-offset-4 underline font-Bungee-Shade text-lg font-semibold">Reviews : </h4>
        <div className="mt-2 w-full  space-y-3">
          {
            product?.reviews?.map(review =>
              <div className="w-full border p-5 rounded-2xl shadow-md" key={Math.random()}>
                <div>
                  <p className="font-Bungee-Shade">{review?.message}</p>
                </div>
                <div className="grid  lg:grid-cols-6 gap-2 mt-3">
                  <p className="text-xs font-medium col-span-2">Author : {review?.reviewer}</p>
                  <p className="text-xs font-medium col-span-2">Reviewed Time : {getTimeFormat(review?.time)}</p>
                </div>
              </div>
            )

          }
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const res = await fetch(`https://rexrox-tech-server.vercel.app/products`)
  const products = await res.json()

  const paths = products?.data?.map((product) => ({
    params: { productId: product._id }
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {

  const { params } = context
  const res = await fetch(`https://rexrox-tech-server.vercel.app/product/${params.productId}`)
  const data = await res.json()


  return {
    props: {
      product: data
    }
  }
}




ProductDetails.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
import MainLayout from "@/components/Layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const PcBuilderPage = ({ categories }) => {
  // const srv = useSelector(state => state.products)
  const { products } = useSelector(state => state.products);
  console.log(products);

  return (
    <div className="py-5">
      <div className="flex justify-center border-b pb-10">
        <h2 className="text-2xl font-Bungee-Shade font-semibold border px-10 py-3 rounded-xl">PC Builder - Build Your Own Computer - REXROX TECH</h2>
      </div>

      {/* all */}
      <div className="w-[58%] mx-auto py-5">
        <div>
          <p className="border px-2 rounded-md text-sm text-white py-0.5 bg-[#808996] w-full">Core Components</p>
        </div>

        {/* categories */}
        <div className="space-y-10 mt-10">
          {
            products?.map(category =>
              <div key={Math.random()}>
                <div className="flex border p-5 justify-between gap-5">
                  <div className="flex gap-5">

                    <div>
                      <Image src={category?.Image} alt="" height={80} width={80} />
                    </div>
                    <div >
                      <p className="font-Bungee-Shade  font-semibold text-lg">{category?.category} <span className="text-xs bg-[#808996] text-white px-2 py-0.5 rounded font-poppins font-normal">Required</span> </p>
                      <div>
                        {category?.products?.map(singleProduct => <p key={Math.random()}>{singleProduct.productName}</p>)}
                      </div>

                    </div>
                  </div>
                  <div>
                    <Link href={`/pcbuilder/choose/${category?.category}`}>
                      <button className="border px-5 py-1 font-Bungee-Shade hover:shadow-md  rounded-lg" type="button">Select</button>
                    </Link>
                  </div>

                </div>

              </div>
            )
          }
        </div>


      </div>




    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.BACKEND_LINK}/categories`);
  const data = await res.json();


  return {
    props: {
      categories: data?.data,
    },
  };
};


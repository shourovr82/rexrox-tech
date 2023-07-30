import MainLayout from "@/components/Layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const PcBuilderPage = () => {
  const { products, totalProduct } = useSelector(state => state.products);

  const handleComplete = () => {
    toast.success("Successfully Build")
  }

  return (
    <div className="py-5">
      <div className="flex   md:justify-center border-b pb-10">
        <h2 className="text-base md:text-2xl font-Bungee-Shade font-semibold border md:px-10 max-md:pl-5 max-md:mx-5 py-3 rounded-xl">PC Builder - Build Your Own Computer - REXROX TECH</h2>
      </div>

      {/* all */}
      <div className="max-md:px-5 lg:w-[58%] mx-auto py-5">
        <div>
          <p className="border px-2 rounded-md text-sm text-white py-0.5 bg-[#808996] w-full">Core Components</p>
        </div>

        {/* categories */}
        <div className="space-y-10 mt-10">
          {
            products?.map(category =>
              <div key={Math.random()}>
                <div className="flex border border-[#8c18d6] rounded-lg shadow-lg p-5 justify-between gap-5">
                  <div className="flex gap-5">

                    <div>
                      <Image src={category?.Image} alt="" height={80} width={80} />
                    </div>
                    <div className="space-y-2 md:space-y-4" >
                      <p className="font-Bungee-Shade">{category?.category} {
                        category?.category !== "Others" && <span className="text-xs bg-[#808996] text-white px-2 py-0.5 rounded font-poppins font-normal max-md:hidden">Required</span>
                      } </p>
                      <div>
                        {category?.products?.map(singleProduct => <p className="text-sm lg:text-lg font-Bungee-Shade font-semibold" key={Math.random()}>{singleProduct.productName}</p>)}
                      </div>

                    </div>
                  </div>
                  <div>
                    <Link href={`/pcbuilder/choose/${category?.category}`}>
                      <button className="border bg-[#961be21e] px-5 py-1 font-Bungee-Shade hover:shadow-md  rounded-lg" type="button">Select</button>
                    </Link>
                  </div>

                </div>

              </div>
            )
          }
        </div>
        <div className="flex justify-end mt-10">
          <button onClick={() => handleComplete()} className="disabled:border-[#8c18d6] disabled:text-black font-Bungee-Shade font-semibold duration-300 hover:scale-95 disabled:hover:scale-100 text-white disabled:bg-[#fff] disabled:cursor-not-allowed bg-[#8c18d6] border rounded-md  px-3 py-2"
            disabled={totalProduct < 5}
          >Complete Build</button>
        </div>

      </div>



    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};


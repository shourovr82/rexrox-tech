import Image from "next/image";
import heroImage from '@/Assets/build-from-scratch.png'

const HeroSection = () => {
  return (
    <div className="w-full ">
      <div className="relative bg-gradient-to-b from-white h-[100vh] to-purple-50">


        <section className="overflow-hidden">
          <div className="grid grid-cols-7 items-center justify-between">
            <div className=" col-span-3">
              <div className=" lg:bottom-0 lg:left-0">
                <Image className="w-full" src={heroImage} alt="" />
              </div>
            </div>
            <div className="col-span-4 flex items-center justify-center w-full ">
              <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                <div className="flex flex-col justify-between flex-1 h-full">
                  <div>
                    <h1 className="text-4xl font-bold text-black  lg:text-5xl">Build Your Dream PC <br /> Discover High-Quality Components at RexRox Tech!</h1>
                    <p className="mt-6 text-base text-black sm:text-xl">REXROX TECH - Where PC Enthusiasts Find Premium Components for Ultimate Performance!</p>
                    <button title="" className="inline-flex items-center px-6 py-5 text-base font-semibold text-white transition-all duration-200 bg-[#8c18d6] mt-9 hover:bg-[#6a03aa] rounded-md" role="button"> Get started for free </button>
                  </div>


                </div>
              </div>
            </div>


          </div>
        </section>
      </div>


    </div>
  );
};

export default HeroSection;
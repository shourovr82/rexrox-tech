import MainLayout from "@/components/Layouts/MainLayout";
import FeaturedCategories from "@/components/UI/Auth/featured/FeaturedCategories";
import FeaturedProducts from "@/components/UI/Auth/featured/FeaturedProducts";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>REXROX TECH</title>
        <meta
          name="description"
          content="This is a Tech Web Application for Pc components also for Pc Builder. Developed by @shourovr82 | rexrox"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* featured Products */}
      <div className="max-w-[1280px] mx-auto">
        <FeaturedProducts />
      </div>
      {/* Featured Categories */}
      <div className="max-w-[1280px] mx-auto">
        <FeaturedCategories />
      </div>




    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
import MainLayout from "@/components/Layouts/MainLayout";
import FeaturedCategories from "@/components/UI/Auth/featured/FeaturedCategories";
import FeaturedProducts from "@/components/UI/Auth/featured/FeaturedProducts";
import Head from "next/head";

const HomePage = ({ products }) => {
  console.log(products);
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
        <FeaturedProducts products={products} />
      </div>
      {/* Featured Categories */}
      <div className="max-w-[1280px] mx-auto">
        <FeaturedCategories />
      </div>




    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BACKEND_LINK}/random-product`)
  const data = await res.json()
  console.log(data);
  return {
    props: {
      products: data?.data
    }
  }
}


HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
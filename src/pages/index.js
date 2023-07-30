import MainLayout from "@/components/Layouts/MainLayout";
import FeaturedCategories from "@/components/UI/featured/FeaturedCategories";
import FeaturedProducts from "@/components/UI/featured/FeaturedProducts";
import HeroSection from "@/components/UI/hero/HeroSection";
import HeroSection2 from "@/components/UI/hero/HeroSection2";
import Head from "next/head";

const HomePage = ({ products, categories }) => {

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

      {/* hero section */}
      <div className="w-full">
        <HeroSection />
      </div>

      {/* featured Products */}
      <div className="max-w-[1280px] mx-auto">
        <FeaturedProducts products={products} />
      </div>
      {/* Featured Categories */}
      <div className="max-w-[1280px] mx-auto">
        <FeaturedCategories categories={categories} />
      </div>
      <div className="max-w-[1280px] mx-auto">
        <HeroSection2 />
      </div>

    </>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.BACKEND_LINK}/random-product`)
  const response = await fetch(`${process.env.BACKEND_LINK}/categories`)

  const data = await res.json()
  const categories = await response.json()

  return {
    props: {
      products: data?.data,
      categories: categories?.data
    }
  }
}


HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
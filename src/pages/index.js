import MainLayout from "@/components/Layouts/MainLayout";
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


      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae dolore aspernatur suscipit officiis voluptate, molestiae a eius enim necessitatibus veritatis accusamus magni doloribus aliquid delectus provident sint quo dolores consequuntur.
      </div>




    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
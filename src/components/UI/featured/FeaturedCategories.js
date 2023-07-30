
import Image from 'next/image';
import Link from 'next/link';

const FeaturedCategories = ({ categories }) => {
  return (
    <div >
      <div className="flex max-md:mt-10 justify-center flex-col items-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl font-poppins  lg:text-5xl">Featured Categories</h2>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>

      {/* categories */}
      <div className="grid grid-cols-2 max-md:px-3 lg:grid-cols-3 mt-10 gap-3 lg:gap-10">
        {
          categories?.map(category =>
            <div key={Math.random()}>
              <Link href={`/category/${category?.category}`} className='flex justify-center flex-col items-center border py-10 lg:py-20 rounded-lg shadow-lg hover:shadow-2xl gap-5'>
                <Image src={category?.Image} alt='' width={100} height={100} />
                <p className='font-Bungee-Shade font-semibold'>{category?.category}
                </p>
              </Link>
            </div>

          )
        }

      </div>

    </div>
  );
};

export default FeaturedCategories;
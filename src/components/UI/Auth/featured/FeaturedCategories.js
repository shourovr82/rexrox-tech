import { BsMotherboard } from 'react-icons/bs';
import { FaMemory } from 'react-icons/fa6';
import { FiCpu } from 'react-icons/fi'
import { TfiHarddrives } from 'react-icons/tfi'
import { ImHeadphones } from 'react-icons/im'
import { GrMonitor } from 'react-icons/gr'
import powerSupplyImg from '@/Assets/categories/psupply.svg'
import graphicsCardlyImg from '@/Assets/categories/gcard.svg'
import Image from 'next/image';
import Link from 'next/link';

const FeaturedCategories = () => {
  return (
    <div >
      <div className="flex justify-center flex-col items-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl font-poppins lg:text-5xl">Featured Categories</h2>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>

      {/* categories */}
      <div className="grid grid-cols-2 max-md:px-3 lg:grid-cols-4 mt-10 gap-3 lg:gap-10">
        <div>
          <Link href="/category" className='flex justify-center flex-col items-center border py-10 lg:py-20 rounded-lg shadow-lg gap-3'>
            <span><FiCpu size={40} /></span>
            <p className='font-Bungee-Shade font-semibold'>CPU / Processor
            </p>
          </Link>
        </div>
        <div>
          <Link href="/category" className='flex justify-center flex-col items-center border py-10 lg:py-20 rounded-lg shadow-lg gap-3'>
            <span><BsMotherboard size={40} /></span>
            <p className='font-Bungee-Shade font-semibold'>Motherboard
            </p>
          </Link>
        </div>
        <div>
          <Link href="/category" className='flex justify-center flex-col items-center border py-10 lg:py-20 rounded-lg shadow-lg gap-3'>
            <span><FaMemory size={40} /></span>
            <p className='font-Bungee-Shade font-semibold'>RAM
            </p>
          </Link>
        </div>
        <div>
          <Link href="/category" className='flex justify-center flex-col items-center border py-10 lg:py-20 rounded-lg shadow-lg gap-3'>
            <Image src={powerSupplyImg} width={40} height={40} alt="" />
            <p className='font-Bungee-Shade font-semibold'>Power Supply Unit
            </p>
          </Link>
        </div>
        <div>
          <Link href="/category" className='flex justify-center flex-col items-center border py-10 lg:py-20 rounded-lg shadow-lg gap-3'>
            <span><TfiHarddrives size={40} /></span>
            <p className='font-Bungee-Shade font-semibold'>Storage Device
            </p>
          </Link>
        </div>
        <div>
          <Link href="/category" className='flex justify-center flex-col items-center border py-10 lg:py-20 rounded-lg shadow-lg gap-3'>
            <span><GrMonitor size={40} /></span>
            <p className='font-Bungee-Shade font-semibold'>Monitor
            </p>
          </Link>
        </div>
        <div>
          <Link href="/category" className='flex justify-center flex-col items-center border py-10 lg:py-20 rounded-lg shadow-lg gap-3'>
            <Image src={graphicsCardlyImg} width={40} height={40} alt="" />
            <p className='font-Bungee-Shade font-semibold'>Graphics Card
            </p>
          </Link>
        </div>
        <div>
          <Link href="/category" className='flex justify-center flex-col items-center border py-10 lg:py-20 rounded-lg shadow-lg gap-3'>
            <span><ImHeadphones size={40} /></span>
            <p className='font-Bungee-Shade font-semibold'>Headphone
            </p>
          </Link>

        </div>
      </div>

    </div>
  );
};

export default FeaturedCategories;
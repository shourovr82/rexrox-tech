import backgroundPhoto from '@/Assets/AuthPhotos/backgroundAuth.jpg'
import AuthInformationUi from '@/components/UI/Auth/AuthInformationUi';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { FaCloudsmith } from 'react-icons/fa6'

const Login = () => {
  return (
    <div className='relative  bg-[#F2F1FA]'>
      <div>
        <Image src={backgroundPhoto} alt='' className='h-[100vh] w-[35%]' width={500} height={900} />
      </div>
      <div className='border absolute  top-[10%] left-[10%] shadow-xl !rounded-[30px] p-10 w-[80%] h-[80vh] background-gradient-color  '>
        <div className='grid grid-cols-10'>
          <div className='col-span-3'>
            <AuthInformationUi />
          </div>
          <div className='col-span-7 flex justify-center'>
            <div className='w-full'>
              <div className='flex  justify-end items-center w-full  gap-3'>
                <h4 className='text-sm font-Bungee-Shade  font-semibold text-[#3b2250]'>New to this Website?</h4>
                <Link href="/auth/registration">
                  <button className='border rounded-xl py-1.5 px-4 bg-[#951edf10] hover:bg-[#951edf21] duration-300 transition-all ease-in-out focus:scale-90
                  text-[#941edf] text-sm  font-Bungee-Shade font-semibold' type='button'>Register</button>
                </Link>
              </div>
              <div className='mt-5 flex flex-col items-center'>
                <div>
                  <h1 className='text-3xl font-Bungee-Shade text-[#3b2250] font-semibold'>Login to Your Account </h1>
                </div>

                <div className='mt-5 flex justify-center flex-col items-center gap-5 w-[40%] '>
                  <button className='border  flex items-center gap-12 font-Bungee-Shade font-semibold text-sm  px-4 bg-[#871ae00e] rounded-xl py-2 w-full focus:scale-95 duration-300 ease-in-out transition-all hover:bg-[#871ae02d]' type='button'><span ><FcGoogle /></span> Sign in with Google</button>
                  <button className='border  flex items-center gap-12 font-Bungee-Shade font-semibold text-sm  px-4 bg-[#871ae00e] rounded-xl py-2 w-full focus:scale-95 duration-300 ease-in-out transition-all hover:bg-[#871ae02d]' type='button'><span><BsGithub /></span> Sign in with GitHub</button>
                </div>

                {/* or */}
                <div className='flex mt-5 items-center gap-5' >
                  <span className='border-b-2 mt-1 w-[120px]' />
                  <p className='font-Ubuntu font-semibold'>or</p>
                  <span className='border-b-2 mt-1 w-[120px]' />
                </div>

                {/* email and password */}
                <form className='w-[50%] mx-auto '>
                  <div className=' flex flex-col space-y-2'>
                    <label htmlFor="email" className='text-sm font-Bungee-Shade  font-semibold'>Email</label>
                    <input id="email" type="text" className='border-[2px] px-2  text-sm font-semibold focus:outline-none  font-Bungee-Shade py-2.5 shadow-inner shadow-[#27014d75] rounded-xl border-[#27014d]' />
                    <label htmlFor="password" className='text-sm font-Bungee-Shade  font-semibold'>Password</label>
                    <input id="password" type="text" className='border-[2px] px-2 text-sm font-semibold focus:outline-none  font-Bungee-Shade py-2.5 rounded-xl border-[#27014d] shadow-inner shadow-[#27014d75]' />
                  </div>
                  <div className='mt-8 '>
                    <button type="button" className='border-[2px] px-2 text-sm font-semibold focus:outline-none   w-full font-Bungee-Shade py-2.5  text-white rounded-xl flex justify-center items-center bg-[#27014d] focus:scale-95 duration-300 ease-in-out transition-all'>Sign in <span className='pl-3'><FaCloudsmith /></span></button>
                  </div>
                </form>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
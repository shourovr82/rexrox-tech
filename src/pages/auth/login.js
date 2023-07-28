import backgroundPhoto from '@/Assets/AuthPhotos/backgroundAuth.jpg'
import AuthInformationUi from '@/components/UI/Auth/AuthInformationUi';
import Image from 'next/image';

const Login = () => {
  return (
    <div className='relative bg-[#F2F1FA]'>
      <div>
        <Image src={backgroundPhoto} alt='' className='h-[100vh] w-[35%]' width={500} height={900} />
      </div>
      <div className='border absolute top-[10%] left-[10%] shadow-xl rounded-3xl p-10 w-[80%] h-[80vh]  bg-white'>
        <div className='grid grid-cols-10'>
          <div className=' col-span-3'>
            <AuthInformationUi />
          </div>
          <div className='col-span-7 border'>
            login form
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
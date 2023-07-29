import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from 'react-icons/gr'
import { RiArrowDownSLine } from 'react-icons/ri'

const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false)
  const { data: session } = useSession()
  const { user } = session || {}

  return (
    <div className="navbar bg-white border-b ">
      <div className="lg:w-[1280px] mx-auto">
        <div className="flex justify-between w-full items-center">
          <div className="">
            <Link href="/" title="Home">
              <h4 className="font-Bungee-Shade font-bold text-xl">REXROX</h4>
            </Link>
          </div>
          <div>
            <div className="dropdown dropdown-hover">

              <label tabIndex={0} className=" px-5 py-1.5 cursor-pointer rounded-lg font-Bungee-Shade font-semibold flex items-center gap-2">Categories <RiArrowDownSLine /> </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2  shadow bg-base-100 rounded-box w-52">
                <li className="rounded-none text-sm font-semibold font-Bungee-Shade"> <Link href="/">Processor</Link> </li>
                <li className="rounded-none text-sm font-semibold font-Bungee-Shade"> <Link href="/">Motherboard</Link> </li>
                <li className="rounded-none text-sm font-semibold font-Bungee-Shade"> <Link href="/">RAM</Link> </li>
                <li className="rounded-none text-sm font-semibold font-Bungee-Shade"> <Link href="/">Power Supply Unit</Link>  </li>
                <li className="rounded-none text-sm font-semibold font-Bungee-Shade"> <Link href="/">Storage Device</Link>  </li>
                <li className="rounded-none text-sm font-semibold font-Bungee-Shade"> <Link href="/">Monitor</Link> </li>
                <li className="rounded-none text-sm font-semibold font-Bungee-Shade"> <Link href="/">Others</Link> </li>




              </ul>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <button className="border px-5 py-1.5 rounded-lg font-Bungee-Shade font-semibold bg-[#490a701a] hover:bg-[#631196]  duration-300 ease-in-out transition-all focus:scale-95  hover:text-white">Pc Builder</button>
            </div>
            <div className="relative">
              <button onClick={() => setMenuActive(!isMenuActive)} className="border p-2 rounded-full bg-[#490a701a] focus:scale-95 scale-105 hover:scale-100 hover:bg-[#984dd638] duration-300 ease-in-out transition-all " type="button">
                <GrMenu size={20} />
              </button>
              <div>
                {
                  isMenuActive && <div>
                    <div className="absolute bg-[#fff] shadow-2xl rounded-lg shadow-black mt-2  w-[150px] top-[100%]  right-0">
                      <div className="flex flex-col justify-start items-start ">
                        {
                          user?.email &&
                          <h2 className="text-sm font-semibold px-3  font-Bungee-Shade bg-[#490a70] text-white w-full text-center rounded-t-lg py-3 ">{user?.name}</h2>
                        }
                        {
                          user?.email &&
                          <button className="hover:bg-[#490a70] hover:text-white duration-300 ease-in w-full text-start text-sm font-semibold font-Bungee-Shade px-3 py-2" onClick={() => signOut()}>
                            Logout
                          </button>
                        }

                        {
                          !user?.email &&
                          <Link href="/auth/login" className="w-full">
                            <button className="hover:bg-[#490a70] hover:text-white duration-300 ease-in w-full text-start text-sm font-semibold rounded-t-lg font-Bungee-Shade px-3 py-2" >
                              Login
                            </button>
                          </Link>

                        }
                        {
                          !user?.email &&
                          <Link href="/auth/registration" className="w-full">
                            <button className="hover:bg-[#490a70] hover:text-white duration-300 ease-in w-full text-start text-sm font-semibold font-Bungee-Shade rounded-b-lg px-3 py-2">
                              Sign Up
                            </button>
                          </Link>
                        }
                        {
                          user?.email &&
                          <Link href="/pc-builder" className="w-full">
                            <button className="hover:bg-[#490a70] hover:text-white duration-300 rounded-b-lg ease-in w-full text-start text-sm font-semibold font-Bungee-Shade px-3 py-2">
                              Pc Builder
                            </button>
                          </Link>

                        }
                      </div>

                    </div>
                  </div>
                }
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Navbar;
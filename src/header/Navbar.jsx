import { Link } from 'react-router-dom';
import '../App.css'
import { FaChevronDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { LuCircleDot } from "react-icons/lu";
import { PiSealPercent } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
      return (
            <div>
                  <div className="bg-[#EC008C] text-white py-1 font-semibold">
                        <marquee direction="left">
                              <div className="space-x-10 marquee">
                                    <span>Free gift with ANY purchase 🎁</span>
                                    <span>Free gift with ANY purchase 🎁</span>
                                    <span>Free gift with ANY purchase 🎁</span>
                                    <span>Free gift with ANY purchase 🎁</span>
                                    <span>Free gift with ANY purchase 🎁</span>
                              </div>
                        </marquee>
                  </div>
                  <div className='bg-[#F2F2F7]'>
                        <div className='flex w-11/12 m-auto justify-between text-[#3c3c40]   py-2 items-center'>
                              <div className='flex gap-1 items-center'>
                                    <LuCircleDot />
                                    International
                                    <FaChevronDown />
                              </div>
                              <div className='flex gap-5'>
                                    <Link className='flex gap-1 items-center'>
                                          <FaRegUser className='text-xl' />
                                          <p className='text-sm'>Log In</p>
                                    </Link>
                                    <Link className='flex gap-1 items-center'>
                                          <CiCircleQuestion className='text-xl' />
                                          <p className='text-sm'>Help Center</p>
                                    </Link>
                              </div>
                        </div>
                  </div>
                  <div className='flex items-center justify-between py-3 w-11/12 m-auto'>
                        <div className='flex items-center gap-10'>
                              <h1 className='text-3xl font-bold'>Hismile</h1>
                              <ul className='flex gap-10 items-center'>
                                    <Link className='flex items-center gap-2'>
                                          SHOPE
                                          <FaChevronDown />
                                    </Link>
                                    <Link className='flex items-center gap-2'>
                                          EXPLORE
                                          <FaChevronDown />
                                    </Link>
                                    <Link className='flex items-center gap-2'>
                                          <PiSealPercent className='text-xl text-[#EC008C]' />
                                          BUNDLE & SAVE
                                    </Link>
                              </ul>
                        </div>
                        <div>
                              <Link><LuShoppingCart className='text-2xl' /></Link>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;
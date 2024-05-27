import { Link } from 'react-router-dom';
import '../App.css'
import { FaChevronDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { LuCircleDot } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";

import navImg from "../assets/Nav_-_Electric_Toothbrush_555x.webp"
import navImg2 from "../assets/Unlock_Flavours_-_Hero_-_M_555x.webp"

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
                  <div className='flex relative items-center justify-between w-11/12 m-auto'>
                        <div className='flex items-center gap-10'>
                              <h1 className='text-3xl font-bold'>Hismile</h1>
                              <ul className='flex gap-10 py-5  items-center'>
                                    <li className='group'>
                                          <Link className='flex  items-center gap-2'>
                                                SHOPE
                                                <FaChevronDown />
                                                <div className='absolute hidden  w-full  border-red-400  gap-10 py-10 top-16 bg-[#F2F2F7]'>
                                                      <ul className='flex flex-col space-y-3'>
                                                            <Link>Shop all</Link>
                                                            <Link>Best sellers</Link>
                                                            <Link>Shop Bundles</Link>
                                                            <Link>V34 Colour Corrector Serum</Link>
                                                      </ul>
                                                      <div>
                                                            <h2>Shop Electric Toothbrush</h2>
                                                            <img className='w-96' src={navImg} alt="" />
                                                      </div>
                                                      <div>
                                                            <h2>Flavoured Toothpaste Bundle</h2>
                                                            <img className='w-96' src={navImg2} alt="" />
                                                      </div>
                                                </div>
                                          </Link>
                                    </li>
                                    <Link className='flex items-center gap-2'>
                                          EXPLORE
                                          <FaChevronDown />
                                    </Link>
                                    <Link className='flex text-[#EC008C] font-semibold items-center gap-2'>
                                          <RiDiscountPercentFill className='text-2xl font-bold text-[#EC008C]' />
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
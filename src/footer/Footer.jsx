import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
      return (
            <div className=" bg-[#FAFAFC]">
                  <div className="flex gap-28 w-11/12 m-auto py-20">
                        <div>
                              <h1 className=" font-semibold pb-5">Shope</h1>
                              <ul className="flex text-[#666668]  flex-col space-y-2">
                                    <Link>View all products</Link>
                                    <Link>Bundles</Link>
                                    <Link>V34 Colour Corrector Serum</Link>
                                    <Link>PAP+ Whitening Strips</Link>
                                    <Link>Hismile Toothpaste</Link>
                              </ul>
                        </div>
                        <div>
                              <h1 className=" font-semibold pb-5" >Support</h1>
                              <ul className="flex text-[#666668]  flex-col space-y-2">
                                    <Link>Help centre</Link>
                                    <Link>Contact us</Link>
                                    <Link>Log in / Sign up</Link>
                              </ul>
                        </div>
                        <div>
                              <h1 className=" font-semibold pb-5">Explore</h1>
                              <ul className="flex text-[#666668]  flex-col space-y-2">
                                    <Link>Our Story</Link>
                                    <Link>Hismile Research</Link>
                                    <Link>Hismile Professional</Link>
                                    <Link>Hismile Careers</Link>
                              </ul>
                        </div>
                        <div>
                              <h1 className=" font-semibold pb-5">Follow</h1>
                              <ul className="flex text-[#666668]  flex-col space-y-3">
                                    <Link className="flex items-center gap-2"><FaInstagram className="text-xl" />Instagram</Link>
                                    <Link className="flex items-center gap-2"><IoLogoFacebook className="text-xl" />Facebook</Link>
                                    <Link className="flex items-center gap-2"><AiFillYoutube className="text-xl" />Youtube</Link>
                                    <Link className="flex items-center gap-2"><IoLogoTiktok className="text-xl" />TikTok</Link>
                                    <Link className="flex items-center gap-2"><FaLinkedinIn className="text-xl" />LinkedIn</Link>
                              </ul>
                        </div>
                  </div>
            </div>
      );
};

export default Footer;
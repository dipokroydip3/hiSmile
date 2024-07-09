import product1 from "../../assets/ETB_Purple_-_Single_-_Cart_645x.webp"
import product2 from "../../assets/ETB_V34Purple-Single-Collections_c18df761-2418-4e33-98c0-9f88570fa9d8.webp"
import product3 from "../../assets/V34Serum-Cart.webp"
import pinkProduct from "../../assets/Pink_Lemonade_Toothpaste_-_Collections_645x.webp"
import greenProduct from "../../assets/ETB_Bright_Green_-_Single_-_Collections_450x.webp"
// import product4 from "../../assets/Pink_Lemonade_Toothpaste_-_Collections_645x.webp"
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react"


const Products = () => {
      const [pink, setPink] = useState(product1)

      const pinkOnclick = () => {
            if (PinkProducts.color == pink) {
                  setPink()
            }
      }

      const PinkProducts = {
            color: "pink",
            title: "Bright Pink Electric Toothbrush",
            img: { pinkProduct }
      }

      // const GreenProduct = {
      //       color: "green", 
      //       title: "Bright Green Electric Toothbrush",
      //       img: greenProduct
      // }

      return (
            <div className=" bg-[#FAFAFC]">
                  <div className="grid w-11/12 m-auto py-20 xl:grid-cols-12">
                        <div className="xl:col-span-3 flex xl:block py-5 xl:pr-10">
                              <div>
                                    <h2 className=" text-xl xl:text-3xl font-semibold">Shope your best sellers</h2>
                                    <p className="text-[#9B9B9D] py-5">Explore your range of fan-favorites</p>
                              </div>
                              <div>
                                    <Link className="hidden  border xl:inline-flex items-center xl:gap-2  rounded-full px-2 xl:px-5 py-2">Shope all<FaAngleRight /></Link>
                                    <Link className="border inline-flex xl:hidden items-center xl:gap-2  rounded-full px-2 xl:px-5 py-2">all<FaAngleRight /></Link>
                              </div>
                        </div>
                        <div className="xl:col-span-9 gap-16 xl:gap-5 grid xl:grid-cols-3 ">
                              <div >
                                    <div className="bg-[#F2F2F7] relative rounded-md">
                                          <img src={pink} alt="" />
                                          <div className="absolute h-full bg-[#E5E5EA] px-2 space-y-2 py-8 rounded top-0">
                                                <div className="w-10 h-10 cursor-pointer  rounded bg-[#CDA9FE]"></div>
                                                <div className="w-10 h-10 cursor-pointer  rounded bg-[#ADECB0]"></div>
                                                <div onClick={pinkOnclick} className="w-10 h-10  cursor-pointer rounded bg-[#FFC2E8]"></div>
                                                <div className="w-10 h-10  cursor-pointer rounded bg-[#A2A2A4]">
                                                      <img className="rounded" src="/src/assets/LIMITED-HOTPink-ETB-Selector_645x.png" alt="" />
                                                </div>
                                                <div className="w-10 text-center cursor-pointer items-center flex justify-center h-10  rounded bg-white">
                                                      +5
                                                </div>
                                          </div>
                                    </div>
                                    <h3 className="text-center text-xl pt-5 ">Purple electric toothbrush</h3>
                                    <h2 className="text-[#EC008C] py-3 text-center">US <span className="text-4xl font-semibold">$79</span></h2>
                                    <button className="bg-black text-white  py-3 font-bold rounded-full w-full">Add to cart</button>
                              </div>
                              <div>
                                    <div className="bg-[#F2F2F7] rounded-md">
                                          <img src={product2} alt="" />
                                    </div>
                                    <h3 className="text-center text-xl pt-5 ">Brighten With Style Bundle</h3>
                                    <h2 className="text-[#EC008C] text-center py-3">US <span className="text-4xl font-semibold">$85</span></h2>
                                    <button className="bg-[#007AFF] text-white  py-3 font-bold rounded-full w-full">Customize bundle</button>
                              </div>
                              <div>

                                    <div>
                                          <div className="bg-[#F2F2F7] relative rounded-md">
                                                <img src={product3} alt="" />
                                                <div className="absolute  -top-3 right-0 text-center  text-white  left-0 ">
                                                      <h2 className="bg-[#EC008C] py-1 px-2 rounded inline">Clinically Proven</h2>
                                                </div>
                                          </div>
                                          <h3 className="text-center text-xl pt-5 ">V34 Colour Corrector Serum</h3>
                                          <h2 className="text-[#EC008C] py-3 text-center">US <span className="text-4xl font-semibold">$35</span></h2>
                                          <button className="bg-black text-white  py-3 font-bold rounded-full w-full ">Add to cart</button>

                                    </div>


                              </div>
                              {/* <div>
                                    <img src={product4} alt="" />
                              </div> */}
                        </div>
                  </div>
            </div>
      );
};

export default Products;
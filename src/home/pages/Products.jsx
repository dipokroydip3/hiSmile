import product1 from "../../assets/ETB_Purple_-_Single_-_Cart_645x.webp"
import product2 from "../../assets/ETB_V34Purple-Single-Collections_c18df761-2418-4e33-98c0-9f88570fa9d8.webp"
import product3 from "../../assets/V34Serum-Cart.webp"
// import product4 from "../../assets/Pink_Lemonade_Toothpaste_-_Collections_645x.webp"
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Products = () => {
      return (
            <div className="py-20 bg-[#FAFAFC]">
                  <div className="grid w-11/12 m-auto grid-cols-12">
                        <div className="col-span-3 pr-10">
                              <h2 className="text-3xl font-semibold">Shope your best sellers</h2>
                              <p className="text-[#9B9B9D] py-5">Explore your range of fan-favorites</p>
                              <Link className="border inline-flex items-center gap-2  rounded-full px-5 py-2">Shope all<FaAngleRight /></Link>
                        </div>
                        <div className="col-span-9 relative gap-5 grid grid-cols-3 overflow-hidden">
                              <div >
                                    <div className="bg-[#F2F2F7] rounded-md">
                                          <img src={product1} alt="" />
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
                              <div className="relative">
                                    <div>
                                          <div className="bg-[#F2F2F7] rounded-md">
                                                <img src={product3} alt="" />
                                          </div>
                                          <h3 className="text-center text-xl pt-5 ">V34 Colour Corrector Serum</h3>
                                          <h2 className="text-[#EC008C] py-3 text-center">US <span className="text-4xl font-semibold">$35</span></h2>
                                          <button className="bg-black text-white  py-3 font-bold rounded-full w-full ">Add to cart</button>

                                    </div>
                                    <div className="absolute  top-0 right-0 text-center  text-white  left-0 ">
                                          <h2 className="bg-[#EC008C] py-1 px-2 rounded inline">Clinically Proven</h2>
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
import product1 from "../../assets/ETB_Purple_-_Single_-_Cart_645x.webp"
import product2 from "../../assets/ETB_V34Purple-Single-Collections_c18df761-2418-4e33-98c0-9f88570fa9d8.webp"
import product3 from "../../assets/V34Serum-Cart.webp"
import product4 from "../../assets/Pink_Lemonade_Toothpaste_-_Collections_645x.webp"
import { Link } from "react-router-dom";


const Products = () => {
      return (
            <div className="my-20">
                  <div className="grid grid-cols-12">
                        <div className="col-span-4">
                              <h2>Shope your best sellers</h2>
                              <p>Explore your range of fan-favorites</p>
                              <Link><button>Shope all</button></Link>
                        </div>
                        <div className="col-span-8 grid grid-cols-3 overflow-hidden">
                              <div >
                                    <div className="bg-[#F2F2F7] rounded-md">
                                          <img src={product1} alt="" />
                                    </div>
                                    <h3 className="text-center text-xl pt-5 ">Purple electric toothbrush</h3>
                                    <h2 className="text-[#EC008C] text-center">US <span className="text-4xl font-semibold">$79</span></h2>
                                    <button className="bg-black text-white">Add to cart</button>
                              </div>
                              <div>
                                    <img src={product2} alt="" />
                              </div>
                              <div>
                                    <img src={product3} alt="" />
                              </div>
                              <div>
                                    <img src={product4} alt="" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Products;
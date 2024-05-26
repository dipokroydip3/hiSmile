import heroImg from "../../assets/2023-05-12_-_V34_Girl_-_D_522x.webp"

const Hero = () => {
      return (
            <div className="bg-[#F2F2F7]">
                  <div className="grid grid-cols-12 justify-between items-center w-11/12 m-auto">
                        <div className="col-span-5 pr-10">
                              <h1 className="text-5xl font-semibold">Subscribe and Save <br /> 50%</h1>
                              <p className="text-xl py-5">Cancel anytime, save a massive 50% on V34 when you subscribe!</p>
                              <button className="bg-black mt-5 text-white px-20 py-3 rounded-full font-semibold">Subscribe & Save</button>
                        </div>
                        <div className="col-span-7">
                              <img className="w-full" src={heroImg} alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Hero;
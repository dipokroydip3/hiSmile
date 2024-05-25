import heroImg from "../../assets/2023-05-12_-_V34_Girl_-_D_522x.webp"

const Hero = () => {
      return (
            <div>
                  <div className="flex justify-between items-center w-11/12 m-auto">
                        <div>
                              <h1 className="text-4xl font-semibold">Subscribe and Save 50%</h1>
                              <p className="text-xl py-5">Cancel anytime, save a massive 50% on V34 when you subscribe!</p>
                              <button className="bg-black mt-5 text-white px-10 py-2 rounded-full font-semibold">Subscribe & Save</button>
                        </div>
                        <div>
                              <img src={heroImg} alt="" />
                        </div>
                  </div>
            </div>
      );
};

export default Hero;
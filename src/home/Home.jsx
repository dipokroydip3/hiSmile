import Bundles from "./pages/Bundles";
import Dream_collection from "./pages/Dream_collection";
import Hero from "./pages/Hero";
import Products from "./pages/Products";
import Smile_Care from "./pages/Smile_Care";
import Trial_Products from "./pages/Trial_Products";


const Home = () => {
      return (
            <div>
                  <Hero></Hero>
                  <Products></Products>
                  <Bundles></Bundles>
                  <Dream_collection></Dream_collection>
                  <Smile_Care></Smile_Care>
                  <Trial_Products></Trial_Products>
            </div>
      );
};

export default Home;
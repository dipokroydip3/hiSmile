import Bundles from "./pages/Bundles";
import Dream_collection from "./pages/Dream_collection";
import Hero from "./pages/Hero";
import Products from "./pages/Products";


const Home = () => {
      return (
            <div>
                  <Hero></Hero>
                  <Products></Products>
                  <Bundles></Bundles>
                  <Dream_collection></Dream_collection>
            </div>
      );
};

export default Home;
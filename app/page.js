import Hero from "@components/main/Hero";
import InfiniteImageCarousel from "@components/animations/InfiniteImageCarousel";
import About from "@components/About";
import Inspiring from "@components/Inspiring";
import Positivity from "@components/Positivity";
import Flavoursome from "@components/Flavoursome";
import FeaturesBenefits from "@components/FeaturesBenefits";
import Products from "@components/Products";
import Farms from "@components/Farms";
import Recipes from "@components/Recipes";
import Intrigued from "@components/Intrigued";
import Footer from "@components/main/Footer";
import DroolingYet from "@components/animations/DroolingYet";

export default function Home() {
  return (
    <main>
      <Hero />
      <InfiniteImageCarousel />
      <About />
      <Inspiring />
      <Positivity />
      <Flavoursome />
      <FeaturesBenefits />
      <DroolingYet />
      <Products />
      <Farms />
      <Recipes />
      <Intrigued />
      <Footer />
    </main>
  );
}

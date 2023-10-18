import Hero from "@components/Hero";
import ImageCarousel from "@components/ImageCarousel";
import About from "@components/About";
import Inspiring from "@components/Inspiring";
import Positivity from "@components/Positivity";
import Flavoursome from "@components/Flavoursome";
import FeaturesBenefits from "@components/FeaturesBenefits";
import Products from "@components/Products";
import Farms from "@components/Farms";

const images = [
  "/bfb.png",
  "/brogs.png",
  "/burgerboi.png",
  "/collins.png",
  "/firstchoice.png",
  "/fripri.png",
  "/hopschops.jpg",
  "/mahirs.png",
  "/peepaluk.png",
  "/sfg.png",
  "/tcb.png",
  "/thehospitality.png",
  "/weetabix.png",
  "/yaus.png",
  "/supertiffin.png",
];

export default function Home() {
  return (
    <main>
      <Hero />
      <ImageCarousel images={images} />
      <About />
      <Inspiring />
      <Positivity />
      <Flavoursome />
      <FeaturesBenefits />
      <Products />
      <Farms />
    </main>
  );
}

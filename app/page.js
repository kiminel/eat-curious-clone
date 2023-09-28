import About from "@components/About";
import Hero from "@components/Hero";
import ImageCarousel from "@components/ImageCarousel";

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
    </main>
  );
}

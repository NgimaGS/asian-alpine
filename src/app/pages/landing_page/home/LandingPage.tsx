import HeroSection from "./parts/HeroSection";
import PopularPackages from "./parts/PopularPackages";
import Activities from "./parts/Activities";
import Featured from "./parts/Featured";

const LandingPage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <HeroSection />
      <PopularPackages />
      <Activities />
      <Featured />
    </div>
  );
};

export default LandingPage;



import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import Trusted from "./components/Trusted";
import FeatureProduct from "./components/FeatureProduct";
import homeimg from "./images/hero1.jpg"
const Home = () => {

  const data={
    name:"Sasto Bazar",
  
  }
  return (
  <> 
  <HeroSection myData={{ ...data, imageSrc: homeimg  }}/>
  <FeatureProduct/>
  <Service/>
  <Trusted/>

  </>
  )

};


export default Home;
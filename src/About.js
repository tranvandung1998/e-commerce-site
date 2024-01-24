
import HeroSection from './components/HeroSection'
import { useProductContext } from "./context/productcontext";
import aboutimg from "./images/about1.png"

const About = () => {
  const { myName } = useProductContext()
  const data ={
    name:" Ecomerce Website",
    additionalText: "Discover a wide variety of products and enjoy a seamless shopping experience with Sasto Bazar. Our commitment to quality and affordability ensures that you find the best deals on the products you love.",
    
  }
  return (
  <>
    {myName}
    <HeroSection myData={{ ...data, imageSrc: aboutimg  }}/>
    </>
    
  )
}

export default About
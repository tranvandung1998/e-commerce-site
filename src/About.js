
import HeroSection from './components/HeroSection'
import { useProductContext } from "./context/productcontext";
import aboutimg from "./images/about1.png"

const About = () => {
  const { myName } = useProductContext()
  const data ={
    name:" Ecomerce Website",
    additionalText: "Khám phá nhiều loại sản phẩm và tận hưởng trải nghiệm mua sắm liền mạch với Hà Nội Shop. Cam kết của chúng tôi về chất lượng và giá cả phải chăng đảm bảo rằng bạn tìm được những ưu đãi tốt nhất cho các sản phẩm bạn yêu thích.",
    
  }
  return (
  <>
    {myName}
    <HeroSection myData={{ ...data, imageSrc: "https://dongphucvina.vn/wp-content/uploads/2023/06/logo-thu-do-ha-noi-dongphucvina.vn_.png"  }}/>
    </>
    
  )
}

export default About
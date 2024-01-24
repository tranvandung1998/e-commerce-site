import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
 const {name,imageSrc,additionalText} = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h1 className="intro-data">WELCOME TO</h1>
            <h2> {name} </h2>
            <p >
            Your one-stop destination for affordable and quality online shopping! At Sasto Bazar, we believe in making e-commerce accessible to everyone by offering a diverse range of products at unbeatable prices.
            </p>
            {additionalText && (
              <p>
                {additionalText}
              </p>
            )}
           <NavLink to="/products">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
        
          <div className="hero-section-image">
            <figure>
            <img
                   src={imageSrc || "images/hero1.jpg"}
                  alt=" Hero Section Image"
                  className="img-style"
                />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
        font-size: 2rem;  // Adjust the font size as needed
        font-weight: 700; // Adjust the font weight as needed
        margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size:4.5rem
    }
    h2{
      font-size: 3rem; // Adjust the font size as needed
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
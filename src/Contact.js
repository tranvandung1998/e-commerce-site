import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {

  const {isAuthenticated,user} = useAuth0();
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
     <h2  className="common-heading">Liên Hệ</h2>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6119982442244!2d105.85444411542914!3d21.0285116359701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7b79c69ad7%3A0x9718dd75d1f855e7!2zSMO6YSBOxrDGoW5nLCBIw6AgTm9uIELGoW5nLCBWaW5oIFRoYWnhu4FuLCBI4buNYyBO4bqtcCwgVmluYW5hLCBRdeG6oW0gxJDDoCBOw6AgTuG7mWk!5e0!3m2!1sen!2snp!4v1702487395939!5m2!1sen!2snp" 
        width="100%" 
        height="400" 
        style={{ border:0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>



      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/moqogokb"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="tên của bạn"
              name="username"
              value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              value={isAuthenticated ? user.email : ""}
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Nhập văn bản"></textarea>

            <input type="submit" value="Gửi" />
          </form>
        </div>
      </div>
  </Wrapper>
  );
};

export default Contact;
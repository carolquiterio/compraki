import styled from "styled-components";
import meiIMG from "../../assets/meiIMG.png";
import { Link } from "react-router-dom";

export const Text = styled.label``;

export const Container = styled.div`
  justify-content: center;
  padding: 0.3rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const TitleView = styled.div`
  background-color: #ee7979;
  height: 5vh;
  width: 100vw;
  margin-top: -10px;
  margin-left: -10px;
  padding: 1rem;
`;

export const AuthorContainer = styled.div`
  align-self: center;
  border-radius: 0.625rem;
  height: 70vw;
  align-items: center;
  background-color: #17298b;
`;

export const ServiceImg = styled.img`
  align-self: center;
  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;
  width: 100%;
  height: 50vw;
`;

export const Title = styled.label`
  color: #f2f2f2;
  font-size: 1.2rem;
  font-family: "Ubuntu", sans-serif;
  margin-left: 2rem;
  margin-top: 5rem;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
  letter-spacing: -0.303916px;
`;

export const SubTitle = styled.label`
  color: #f2f2f2;
  font-size: 0.9rem;
  font-family: "Ubuntu", sans-serif;
  margin-left: 2rem;
  margin-top: 5rem;
  font-weight: 500;
`;

export const SectionText = styled.label`
  align-self: flex-start;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 10px;
  /* identical to box height, or 62% */

  letter-spacing: -0.303916px;

  color: #2d384c;
  margin-top: 1rem;
`;

export const BuyButton = styled.a`
  background: #6fcf97;
  box-shadow: 5.06527px 5.06527px 18.9948px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border-width: 0px;
  height: 2.2rem;
  margin-top: 0.8rem;
  transition: background-color 0.2s;
  :focus-within::after {
    background: #9af3bf;
    color: #fff;
  }
  :focus {
    outline: none;
  }
  align-items: center;
  justify-content: center;
`;

export const BuyButtonText = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 10px;
  /* identical to box height, or 62% */

  text-align: center;
  letter-spacing: -0.303916px;

  color: #ffffff;
  text-decoration: none;
`;

export const Linki = styled(Link)`
  background: #6fcf97;
  box-shadow: 5.06527px 5.06527px 18.9948px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border-width: 0px;
  height: 2.2rem;
  margin-top: 0.8rem;
  transition: background-color 0.2s;
  :hover {
    background: #9af3bf;
    color: #fff;
  }
  :focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

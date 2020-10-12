import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  padding: 0.3rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
`;

export const SectionTitle = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;

  line-height: 10px;
  /* identical to box height, or 50% */

  text-align: center;
  letter-spacing: -0.303916px;

  color: #2d384c;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const InputName = styled.h2`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;

  line-height: 17px;
  /* identical to box height, or 113% */

  letter-spacing: -0.303916px;

  color: rgba(45, 56, 76, 0.67);
  margin-top: 0.5rem;
`;

export const StyledInput = styled.input`
  border: 1px solid rgba(45, 56, 76, 0.4);
  box-sizing: border-box;
  border-radius: 0.4rem;
  background-color: #fff;
  :focus {
    outline: none;
  }
  width: 100%;
  margin-top: 0.3rem;
  padding: 0.5rem;
  font-size: 1rem;
  color: rgba(45, 56, 76, 0.5);
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

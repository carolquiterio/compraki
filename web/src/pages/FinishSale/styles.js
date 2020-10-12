import styled from "styled-components";

export const Container = styled.div``;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
  flex-direction: column;
`;

export const BackLine = styled.div`
  display: flex;
  background: #6fcf97;
  height: 50vh;
  width: 100vw;
  justify-content: center;
  vertical-align: bottom;
`;

export const CongratsImg = styled.img`
  width: 80%;
`;

export const BlueText = styled.h2`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 4.6rem;
  line-height: 32px;
  /* or 100% */

  text-align: center;
  letter-spacing: -0.303916px;

  /* Cor 1 */

  color: #17298b;
  margin-top: 2rem;
`;

export const DetailsText = styled.h4`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2rem;
  /* or 125% */

  text-align: center;
  letter-spacing: -0.303916px;

  /* Gray 3 */

  color: #828282;
  text-align: center;
  margin-top: 2rem;
`;

export const PartnersText = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 2rem;
  /* or 50% */

  letter-spacing: -0.303916px;

  color: #000000;
`;

export const SeeMoreText = styled.h5`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2rem;
  /* identical to box height, or 113% */

  letter-spacing: -0.303916px;

  /* Cor 3 */

  color: #6fcf97;
`;

export const MiddleSecondContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
`;

export const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: row;
`;

export const FooterText = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 2rem;
  /* identical to box height, or 120% */

  letter-spacing: -0.303916px;

  /* Gray 6 */

  color: #f2f2f2;
`;

export const StyledFooter = styled.footer`
  background: #6fcf97;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem;
`;

export const FooterLogo = styled.img`
  width: 16vw;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const PartnerImg = styled.img`
  height: 20vh;

  border-radius: 0.3rem;
`;

export const PartnerName = styled.label`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2rem;
  /* identical to box height, or 142% */

  text-align: center;

  /* Gray 2 */

  color: #4f4f4f;
`;

export const PartnerKM = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 2rem;
  /* identical to box height, or 170% */

  letter-spacing: -0.303916px;

  /* Gray 3 */

  color: #828282;
`;

export const StyledFooter = styled.footer`
  background: #6fcf97;
`;

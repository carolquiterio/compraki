import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid rgba(45, 56, 76, 0.4);
  box-sizing: border-box;
  filter: drop-shadow(5.06527px 5.06527px 18.9948px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  height: 12vh;
  margin-top: 1rem;
  padding: 0.45rem;
  display: flex;
  :hover {
    border: 1.5px solid #6fcf97;
  }
`;

export const ColumnDiv = styled.div`
  display: flex;
`;
export const RowDiv = styled.div`
  flex-direction: row;
`;

export const ServiceImg = styled.img`
  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;
  margin-right: 1rem;
`;

export const VoucherTitle = styled.label`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;

  letter-spacing: -0.303916px;

  color: #828282;
`;

export const VoucherDetails = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 17px;
  /* or 170% */

  letter-spacing: -0.303916px;

  /* Gray 3 */

  color: #828282;
`;
export const VoucherOldPrice = styled.label`
  align-self: flex-end;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 17px;
  /* or 170% */

  letter-spacing: -0.303916px;
  text-decoration-line: line-through;

  color: rgba(45, 56, 76, 0.67);
  :hover {
    color: #6fcf97;
  }
`;

export const VoucherPrice = styled.label`
  align-self: flex-end;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 17px;
  /* or 89% */

  text-align: right;
  letter-spacing: -1px;

  color: rgba(45, 56, 76, 0.67);
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`;
export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

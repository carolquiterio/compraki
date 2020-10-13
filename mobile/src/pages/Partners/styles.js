import styled from 'styled-components';

export const Container = styled.View`
  background: #fff;
  height: 100%;
  display: flex;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  letter-spacing: -0.303916px;

  /* Gray 2 */

  color: #4f4f4f;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border: 1px solid #4f4f4f;

  border-radius: 6px;
  height: 40px;
  padding: 12px;
  margin-top: 12px;
`;

export const SeeMoreText = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 17px;
  /* identical to box height, or 121% */

  letter-spacing: -0.303916px;
  text-decoration-line: underline;

  /* Green 3 */

  color: #6fcf97;
  margin-bottom: 10px;
  margin-top: 15px;
`;

export const SectionTitle = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */

  letter-spacing: -0.303916px;

  /* Gray 1 */

  color: #4f4f4f;
`;

export const SeeMoreTwo = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height, or 113% */

  letter-spacing: -0.303916px;

  /* Cor 3 */

  color: #6fcf97;
`;

export const PartnerContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const PartnerTitle = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  /* identical to box height, or 142% */

  text-align: center;

  /* Gray 2 */

  color: #4f4f4f;
`;

export const RowDiv = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledScrollView = styled.ScrollView`
  height: -10px;
`;

import styled from 'styled-components';

export const Container = styled.View`
  display: flex;
  padding: 20px;
  background: #fff;
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

export const Subtitle = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  /* or 133% */

  letter-spacing: -0.303916px;

  /* Gray 2 */

  color: #4f4f4f;
  margin-top: 6%;
`;

export const OfferContainer = styled.TouchableOpacity`
  width: 100%;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 10px;
  margin-top: 6%;
  height: 220px;
  margin-bottom: 0.1%;
`;

export const RowDiv = styled.View`
  display: flex;
  flex-direction: row;
`;

export const OfferContainerTwo = styled.TouchableOpacity`
  width: 48%;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 10px;
  margin-top: 4%;
  height: 190px;
  margin-bottom: 4%;
  margin-right: 4%;
`;

export const MidleContainer = styled.View`
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const MidleContainerText = styled.View`
  width: 60%;
`;

export const OfferTitle = styled.Text`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  /* or 117% */

  letter-spacing: -0.303916px;

  /* Cor 1 */

  color: #17298b;
  margin-bottom: 10%;
`;

export const LittleText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* or 125% */

  letter-spacing: -0.303916px;

  /* Cor 1 */

  color: #17298b;
  margin-bottom: 15%;
`;

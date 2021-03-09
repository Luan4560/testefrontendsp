import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export const  Container = styled.View`
  width: 100%;
  height: ${hp('100%')}px;
`

export const Content = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
  padding: 15px;
  margin-top: ${hp('-5%')}px;

`

export const Header = styled.View`
  background:#FF8686;
  height: ${hp('7%')}px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`

export const TitleHeader = styled.Text`
  color: #FFF;
  font-size: 16px;
`

export const Title = styled.Text`
  color:#FF8686;
  font-size: 32px;
  width: ${wp('60%')}px;
  text-align: left;

`;

export const NewCard = styled.TouchableOpacity`
  border: 1px solid #0000001A;
  width: ${wp(60)}px;   //237px;
  height: ${hp(48)}px;//352px;
  border-radius: 24px;
  padding: 20px;
  margin-top: ${hp('-5%')}px;

`;

export const TitleCard = styled.Text`
  font-size: 24px;
  color: #707070;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 24px ;
  width: ${wp(40)}px;
`

export const ContentItem = styled.View`
  margin-bottom: 24px ;
`;

export const TextItems = styled.Text`
  font-size: 14px;
  color: #707070;
  line-height: 20px;
`;

export const ContentDuration = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 24px ;

`;

export const TextBold = styled.Text`
  color:#707070;
  font-weight: bold;
  font-size: 14px;
`

export const TextNormal = styled.Text`
  color:#707070;
  font-weight: normal;
  font-size: 14px;
`

export const ContentInvest = styled.View`
  align-items: center;
  margin-bottom: 24px ;

`
export const TextInvest = styled.Text `
 color: #707070;
 font-size: 10px;
 margin-left: ${wp(-17)}px;
`

export const ContentPrice = styled.View`
  flex-direction: row;

`
export const TextRS = styled.Text `
  color: #7BBDF5;
  font-size: 20px;
  font-weight: bold;
  margin-right: ${wp(2)}px;

`
export const TextPrice = styled.Text`
  color: #7BBDF5;
  font-size: 30px;
  font-weight: bold;
`

export const ContentButton = styled.View `
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Button = styled.TouchableOpacity`
  border-radius: 8px;
  background: #FF8686;
  padding: 12px 45px;
`

export const TextButton = styled.Text`
  color: #FFFFFF;
  font-size: 14px;
`

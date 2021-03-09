import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import {
  Container,
  Header,
  TitleHeader,
  Content,
  Title,
  NewCard,
  TitleCard,
  TextItems,
  ContentItem,
  ContentDuration,
  TextBold,
  TextNormal,
  ContentInvest,
  TextInvest,
  ContentPrice,
  TextRS,
  TextPrice,
  ContentButton,
  Button,
  TextButton
} from './styles'

interface Props {
  title: string;
  items: object[];
  duration: string;
  price: number;
}

const data = {
    title: 'Curso básico de agilidade 1',
    items: ['Introdução 1', 'Metodologias 1', 'PSF 1'],
    duration: '45 horas',
    price: '799.90'


}

const LENGTH = 3;
const Main: React.FC<Props> = () => {
  const [index, setIndex] = React.useState<number>(0);

  const increaseIndex = () => {
    setIndex(Math.min(index + LENGTH - 1));
  }

  const decreaseIndex = () => {
    setIndex(Math.max(index -1, 0))
  }

  return (
    <Container>
      <Header>
        <Text>{' '}</Text>
        <TitleHeader>Loja Virtual</TitleHeader>
        <TitleHeader>X</TitleHeader>
      </Header>
    <Content>



      <View style={{width: '100%'}}>
        <Title>Conheça nossos cursos:</Title>
      </View>

      <NewCard >
        <ContentItem>
          <TitleCard>{data.title}</TitleCard>
          {data.items.map((item, index) => (
            <TextItems key={index}>°{item}</TextItems>
          ))}
        </ContentItem>

        <ContentDuration>
          <TextBold>Duração:</TextBold>
          <TextNormal>{data.duration}</TextNormal>
        </ContentDuration>

        <ContentInvest>
          <TextInvest> Investimento:</TextInvest>
          <ContentPrice>
            <TextRS>R$</TextRS>
            <TextPrice>{data.price}</TextPrice>
          </ContentPrice>
        </ContentInvest>

        <ContentButton>
            <Button onPress={() => console.log('Opa')}>
              <TextButton>Comprar</TextButton>
            </Button>
        </ContentButton>
      </NewCard>



      <View style={{height: 30}}>

      <TouchableOpacity
        style={{ borderWidth: 1, marginTop: 20, backgroundColor: 'white' }}
        onPress={increaseIndex}
      >
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ borderWidth: 1, marginTop: 20, backgroundColor: 'white' }}
        onPress={decreaseIndex}
      >
        <Text>Decrease</Text>
      </TouchableOpacity>
        <AnimatedDotsCarousel
        length={LENGTH}
        currentIndex={index}
        maxIndicators={3}
        interpolateOpacityAndColor={true}
        activeIndicatorConfig={{
          color: '#FF8686',
          margin: 3,
          opacity: 1,
          size: 15,
          borderColor: '#FF8686',
          borderWidth: 1,

        }}
        inactiveIndicatorConfig={{
          color: 'white',
          margin: 3,
          opacity: 0.5,
          size: 15,
          borderColor: '#FF8686',
          borderWidth: 1,

        }}
        decreasingDots={[
          {
            config: {color: 'white', margin: 3, opacity: 0.5,  size: 10},
            quantity: 1,
          },
          {
            config: {color: 'white', margin: 3, opacity: 0.5 ,size: 4},
            quantity: 1,
          },
        ]}

        />
      </View>
      <View/>
    </Content>

    </Container>
  )
}

export default Main;

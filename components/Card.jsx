import Image from 'next/image';
import styled from 'styled-components';
import Button from './Button';

const Img = styled(Image)`
  object-fit: cover;
`;

const Container = styled.div`
  height: 450px;
  margin: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: rgb(92 84 122 / 14%) 0px 4px 18px;
    transition: all 0.3s ease-in 0s;
  }
`;

const Body = styled.div`
  padding: 16px;
  height: 150px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
`;

const Price = styled.span`
  line-height: 22px;
  color: #e6215d;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.4px;
`;

const Discount = styled.span`
  color: #8d8d9d;
  font-size: 14px;
  line-height: 20px;
  text-decoration: line-through;
  margin-left: 8px;
`;

function Card() {
  return (
    <Container>
      <Img
        alt='Hey Arnold Porcelana'
        src='https://scontent.fuaq1-1.fna.fbcdn.net/v/t39.30808-6/p526x296/242601084_3727037654187547_3130453637740674599_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4wnU5vp6bYkAX_5dI0x&_nc_ht=scontent.fuaq1-1.fna&oh=c6083967f024f8f6e9c5228f30471146&oe=616552C6'
        width={250}
        height={300}
      />
      <Body>
        <Title>Hey Arnold</Title>
        <Price>
          AR$900 <Discount>AR$1500</Discount>
        </Price>
        <Button content='Comprar ahora' />
      </Body>
    </Container>
  );
}

export default Card;

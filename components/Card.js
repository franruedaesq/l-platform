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

function Card({ name, price, imageURL, discount }) {
  console.log({ name, price, imageURL, discount });
  return (
    <Container>
      <Img alt='Hey Arnold Porcelana' src={imageURL} width={250} height={300} />
      <Body>
        <Title>{name}</Title>
        <Price>
          AR${price} <Discount>AR${discount}</Discount>
        </Price>
        <Button content='Comprar ahora' />
      </Body>
    </Container>
  );
}

export default Card;

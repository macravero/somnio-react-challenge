import styled from 'styled-components';
import { useCart } from '@/app/context/CartContext';

interface ProductCardProps {
    product: {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
    };
    index: number
  }

const ProductCard = ({ product, index }:ProductCardProps) => {
  const { addToCart } = useCart();
  const colors: string[] = ['plum', 'cadetblue', 'rosybrown']
  const color = colors[index % colors.length]
  return (
    <Card>
      <Image src={product.image}/>
      <Title>{product.title}</Title>
      <Description>{product.description}</Description>
      <Price color={color}>USD {product.price}</Price>
      <Button onClick={() => addToCart(product)}>+</Button>
    </Card>
  );
};
export default ProductCard;

const Card = styled.div`
  background: white;
  margin: 1rem;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  position: relative;
  border: 2px solid lightgray;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
const Title = styled.h2`
  padding: 0 1rem;
  font-size: 1.2rem;
  font-family: Montserrat, sans-serif;
  margin-bottom: 1rem;
  height: 48px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Description = styled.p`
  padding: 0 1rem;
  font-size: 1rem;
  color: #666;
  font-family: Montserrat,sans-serif;
  height: 92px;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1rem;
  
`;
const Price = styled.p`
  position: absolute;
  right: 0%;
  bottom: 47%;
  padding: .2rem .5rem;
  font-size: 26px;
  font-weight: bold;
  color: #333;
  font-family: 'Arial', 'Helvetica', sans-serif;
  background-color: ${props => props.color}
`;
const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 35px;
  position: absolute;
  left: 2rem;
  top: 1.5rem;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 22px;
`
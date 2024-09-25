'use client';
import { useCart } from '@/app/context/CartContext';
import styled from 'styled-components';

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <>
    <Title>Tu Carrito</Title>
    <CartContainer>
      {cartItems.length === 0 ? (
          <EmptyMessage>No hay productos en el carrito</EmptyMessage>
      ) : (
          <CartItemsContainer>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemQuantity>{item.quantity}</ItemQuantity>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>
                  USD ${(item.quantity * item.price).toFixed(2)}
                </ItemPrice>
              </CartItem>
            ))}
          </CartItemsContainer>
      )}
    </CartContainer>
    <ContinueShoppingButton onClick={() => window.history.back()}>
      SEGUIR COMPRANDO
    </ContinueShoppingButton>
    </>
  );
}

const CartContainer = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 15px;
  max-width: 75%;
  margin: 40px auto;
`;

const Title = styled.h1`
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: 2rem;
  margin: 4rem 2rem 2rem 12.5%;
  color: #343a40;
  text-align: left;
`;

const EmptyMessage = styled.p`
  font-size: 18px;
  color: #6c757d;
  text-align: center;
  margin-bottom: 30px;
`;

const CartItemsContainer = styled.div`
  margin-bottom: 30px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem 0;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
  }
  min-height: 45px;
`;

const ItemTitle = styled.p`
  font-size: 16px;
  color: darkslategrey;
  margin: 0;
  font-weight: 500;
  flex-grow: 1;
  padding-left: 15px;
`;

const ItemQuantity = styled.p`
  font-size: 16px;
  color: darkslategrey;
  margin-bottom: 0;
  font-weight: 600;
  min-width: 30px;
`;

const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: darkslategrey;
  white-space: nowrap;
  padding-left: 15px;
`;

const ContinueShoppingButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: mediumpurple;
  color: white;
  border: none;
  padding: 15px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;


import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useSearch } from '@/app/context/SearchContext';
import { useCart } from '@/app/context/CartContext';
import imgLogo from '@/app/logo.svg'
import imgShoppingCart from '@/app/shopping-cart.svg'

const Header = () => {
  const { cartItems } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <StyledHeader>
      <Image src={imgLogo} alt='logo'/>
      <SearchContainer>
        <SearchBar
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SpyglassIcon>🔍</SpyglassIcon>
      </SearchContainer>
      <Link href="/cart">
        <CartIcon>
          <Image src={imgShoppingCart} alt="Shopping cart" width='60'/>
          <Badge>{cartItems.length}</Badge>
        </CartIcon>
      </Link>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: mediumpurple;
`;
const SearchBar = styled.input`
  flex-grow: 1;
  margin: 0 1rem;
  padding: 0.5rem;
  width: 100%;
  border-radius: 35px;
  padding-left: 25px;
  padding-right: 55px;
  border: none;
  height: 50%;
  align-self: center;
`;

const SearchContainer = styled.div`
  position: relative;
  flex-grow: 1;
  max-width: 50%;
  margin: 0 1rem;
  display: flex;
  align-items: center;
`;
const SpyglassIcon = styled.span`
  position: absolute;
  right: 35px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  pointer-events: none;
`;
const CartIcon = styled.div`
  position: relative;
`;

const Badge = styled.span`
  position: absolute;
  border-radius: 50%;
  font-size: 13px;
  left: -15px;
  height: 25px;
  bottom: 0;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  color: black;
  font-weight: bold;
  border: 1px solid darkgray;
`;

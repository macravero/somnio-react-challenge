'use client'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import { useSearch } from './context/SearchContext'; 
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(3); 
  const [error, setError] = useState<string | null>(null); 
  const { searchTerm } = useSearch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          throw new Error('Error al cargar los productos');
        }
        const data: Product[] = await res.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        console.error('Error al cargar los productos', error);
        setError('Hubo un error al intentar cargar los productos. Por favor, intente nuevamente más tarde.');
      }
    };
    fetchProducts();
  }, []);

  const paginatedProducts = products.slice(0, visibleProducts)
  const filteredProducts = paginatedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <>
          <Container>
            {filteredProducts.slice(0, visibleProducts).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i}/>
            ))}
          </Container>

          {visibleProducts < products.length && (
            <Button onClick={() => setVisibleProducts((prev) => prev + 3)}>
              VER MÁS
            </Button>
          )}
        </>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Button = styled.button`
  margin: auto;
  display: block;
  background: white;
  border: 1px solid lightgray;
  padding: 10px;
  width: 15%;
  border-radius: 11px;
  font-weight: bold;
`
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin: 20px;
  font-size: 18px;
  font-weight: bold;
`;
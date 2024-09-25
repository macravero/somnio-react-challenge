'use client'
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import Header from './components/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SearchProvider>
            <Header />
            <main>{children}</main>
          </SearchProvider>
        </CartProvider>
      </body>
    </html>
  );
}

import React from 'react';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Header>
        <Logo>ShoppingSite</Logo>
        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>Shop</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </Nav>
      </Header>
      <Main>
        <Banner>
          <BannerText>Welcome to ShoppingSite</BannerText>
          <BannerSubText>Your one-stop shop for everything!</BannerSubText>
        </Banner>
        <ProductsSection>
          <Product>
            <ProductImage src="https://via.placeholder.com/150" alt="Product 1" />
            <ProductName>Product 1</ProductName>
            <ProductPrice>$10.00</ProductPrice>
          </Product>
          <Product>
            <ProductImage src="https://via.placeholder.com/150" alt="Product 2" />
            <ProductName>Product 2</ProductName>
            <ProductPrice>$20.00</ProductPrice>
          </Product>
          <Product>
            <ProductImage src="https://via.placeholder.com/150" alt="Product 3" />
            <ProductName>Product 3</ProductName>
            <ProductPrice>$30.00</ProductPrice>
          </Product>
        </ProductsSection>
      </Main>
      <Footer>
        © 2024 ShoppingSite. All rights reserved.
      </Footer>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavItem = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

const Banner = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const BannerText = styled.h1`
  font-size: 36px;
  margin: 0;
`;

const BannerSubText = styled.p`
  font-size: 18px;
  color: #666;
`;

const ProductsSection = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Product = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductName = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #333;
`;

const Footer = styled.footer`
  padding: 10px;
  text-align: center;
  background-color: #333;
  color: white;
`;

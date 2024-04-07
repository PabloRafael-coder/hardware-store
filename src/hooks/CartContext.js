import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';

const updateLocalStorage = async product => {
  localStorage.setItem('hardware:cartInfo', JSON.stringify(product));
};

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prod => prod.id === product.id);

    let newCartProducts = [];

    if (cartIndex >= 0) {
      newCartProducts = cartProducts;

      newCartProducts[cartIndex].quantify =
        newCartProducts[cartIndex].quantify + 1;
      setCartProducts(newCartProducts);
    } else {
      product.quantify = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
    }

    updateLocalStorage(newCartProducts);
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = localStorage.getItem('hardware:cartInfo');
      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };

    loadUserData();
  }, []);

  const increaseProduct = async productId => {
    const addProduct = cartProducts.map(product => {
      return productId === product.id
        ? { ...product, quantify: product.quantify + 1 }
        : product;
    });

    setCartProducts(addProduct);
    updateLocalStorage(addProduct);
  };

  const deleteProductCart = async productId => {
    const productFiltered = cartProducts.filter(
      product => product.id !== productId
    );
    setCartProducts(productFiltered);
    updateLocalStorage(productFiltered);
  };

  const decreaseProduct = async productId => {
    const indexProduct = cartProducts.findIndex(
      product => product.id === productId
    );

    if (cartProducts[indexProduct].quantify > 1) {
      const newProduct = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantify: product.quantify - 1 }
          : product;
      });

      setCartProducts(newProduct);
      updateLocalStorage(newProduct);
    } else {
      deleteProductCart(productId);
    }
  };

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProduct,
        decreaseProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with UserContext');
  }
  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node
};

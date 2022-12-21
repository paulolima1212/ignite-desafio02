import { ReactNode, createContext, useState } from 'react';
import { Coffee } from '../Pages/Home/Components/CoffeeCards';
import { produce } from 'immer';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeeToCart: (coffee: CartItem) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  console.log(cartItems);
  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}

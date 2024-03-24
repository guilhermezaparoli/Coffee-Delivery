import { ReactNode, createContext, useState } from 'react';


interface CartContextType {
   itemsCart: ItemsCardType[],
   setItemsCart: (value: ItemsCardType[]) => void
}

interface ItemsCardType {
    amount: number,
    description: string,
    id: number,
    image:string,
    name:string,
    price:string,
    tag: string[]
}

export const CartContext = createContext({
} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itemsCart, setItemsCart] = useState<ItemsCardType[]>([] as ItemsCardType[]);
  return (
    <CartContext.Provider value={{ itemsCart, setItemsCart }}>
      {children}
    </CartContext.Provider>
  );
}

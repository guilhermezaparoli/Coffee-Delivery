import { ReactNode, createContext, useState } from 'react';


interface CartContextType {
   itemsCart: ItemsCardType[],
   setItemsCart: (value: ItemsCardType[]) => void,
   dataOrder: DataOrderType,
   setDataOrder: (value: DataOrderType) => void
   setItemsLocalStorage: (value: ItemsCardType[]) => void
}

export interface ItemsCardType {
    amount: number,
    description: string,
    id: number,
    image:string,
    name:string,
    price:string,
    priceNumber:number,
    tag: string[]
}



interface DataOrderType {
    cep: number,
    rua: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string
    typePayment: string
  
}

export const CartContext = createContext({
} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const itemsCartLocalStorage = localStorage.getItem("@ignite-coofe-delivery:CooffesCart-1.0.0");
  const initialItemsCart = itemsCartLocalStorage ? JSON.parse(itemsCartLocalStorage) : [];

  // Initialize itemsCart state with the value from localStorage
  const [itemsCart, setItemsCart] = useState<ItemsCardType[]>(initialItemsCart);
  const [dataOrder, setDataOrder] = useState<DataOrderType>({} as DataOrderType);

  // Function to update itemsCart state and localStorage
  const setItemsLocalStorage = (newItemsCart: ItemsCardType[]) => {
    setItemsCart(newItemsCart);
    localStorage.setItem("@ignite-coofe-delivery:CooffesCart-1.0.0", JSON.stringify(newItemsCart));
  };


  return (
    <CartContext.Provider value={{ itemsCart, setItemsCart, dataOrder, setDataOrder, setItemsLocalStorage }}>
      {children}
    </CartContext.Provider>
  );
}

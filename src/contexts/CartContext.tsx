import { ReactNode, createContext, useState } from 'react';


interface CartContextType {
   itemsCart: ItemsCardType[],
   setItemsCart: (value: ItemsCardType[]) => void,
   dataOrder: DataOrderType,
   setDataOrder: (value: DataOrderType) => void
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
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string
  
}

export const CartContext = createContext({
} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itemsCart, setItemsCart] = useState<ItemsCardType[]>([] as ItemsCardType[]);
  const [dataOrder, setDataOrder] = useState<DataOrderType>({} as DataOrderType);
  return (
    <CartContext.Provider value={{ itemsCart, setItemsCart, dataOrder, setDataOrder }}>
      {children}
    </CartContext.Provider>
  );
}

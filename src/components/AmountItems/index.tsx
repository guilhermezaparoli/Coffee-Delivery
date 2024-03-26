import { Minus, Plus } from '@phosphor-icons/react';
import * as C from './styles';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

interface AmountItemsProps {
  amountItems: number;
  setAmountItems: (state: number) => void;
  windowControled?: boolean,
  data?: {
    id: number;
    name: string;
    tag: string[];
    description: string;
    price: string;
    image: string;
    priceNumber: number
  };
}

export function AmountItems({ amountItems = 0, setAmountItems, windowControled = false, data }: AmountItemsProps) {

  const [uncontroledAmountItems, setUncontroledAmountItems] = useState(amountItems)

const {itemsCart, setItemsLocalStorage} = useContext(CartContext)

  const itemCartNew = [...itemsCart]
  useEffect(() => {

   const index = itemCartNew.findIndex((item) => item.id == data?.id)
    
   if(itemCartNew[index]) {
    itemCartNew[index].amount = uncontroledAmountItems
   }
   

   setItemsLocalStorage([...itemCartNew])
  },[uncontroledAmountItems])

  function increaseNumberItems() {
    setAmountItems(amountItems + 1);
    setUncontroledAmountItems(uncontroledAmountItems + 1)
  }
  
  function decreaseNumberItems() {
    if (amountItems > 1) {
      setAmountItems(amountItems - 1);
    }

    if(uncontroledAmountItems > 1) {
      setUncontroledAmountItems(uncontroledAmountItems - 1)
    }
  }
  

  return (
    <C.Main>
      <C.IconMinus onClick={decreaseNumberItems} disabled={windowControled ? amountItems === 1 : uncontroledAmountItems == 1 }>
        <Minus weight="bold" />
      </C.IconMinus>
      <span>{windowControled ? amountItems : uncontroledAmountItems}</span>
      <C.IconPlus onClick={increaseNumberItems}>
        <Plus weight="bold" />
      </C.IconPlus>
    </C.Main>
  );
}

import { Minus, Plus } from '@phosphor-icons/react';
import * as C from './styles';

interface AmountItemsProps {
  amountItems: number;
  setAmountItems: (state: number) => void;
}

export function AmountItems({ amountItems, setAmountItems }: AmountItemsProps) {
  function increaseNumberItems() {
    setAmountItems(amountItems + 1);
  }
  
  function decreaseNumberItems() {
    if (amountItems > 1) {
      setAmountItems(amountItems - 1);
    }
  }
  

  return (
    <C.Main>
      <C.IconMinus onClick={decreaseNumberItems} disabled={amountItems === 1}>
        <Minus weight="bold" />
      </C.IconMinus>
      <span>{amountItems}</span>
      <C.IconPlus onClick={increaseNumberItems}>
        <Plus weight="bold" />
      </C.IconPlus>
    </C.Main>
  );
}

import * as C from './styles';
import CoffeeExpressoTrad from '../../assets/images/type-expresso.svg';
import CoffeeExpressoAme from '../../assets/images/type-americano.svg';
import CoffeeExpressoCre from '../../assets/images/type-expresso-cremoso.svg';
import CoffeeExpressoGel from '../../assets/images/type-caf-gelado.svg';
import CoffeeLeite from '../../assets/images/type-caf-com-leite.svg';
import CoffeeLatte from '../../assets/images/type-latte.svg';
import CoffeeCappuccino from '../../assets/images/type-capuccino.svg';
import CoffeeMocaccino from '../../assets/images/type-mochaccino.svg';
import CoffeeMacchiato from '../../assets/images/type-macchiato.svg';
import CoffeeChocolateQuente from '../../assets/images/type-chocolate-quente.svg';
import CoffeeCubano from '../../assets/images/type-cubano.svg';
import CoffeeHavaiano from '../../assets/images/type-havaiano.svg';
import CoffeeArabe from '../../assets/images/typerabe.svg';
import CoffeeIrlandes from '../../assets/images/type-irlands.svg';
import { AmountItems } from '../AmountItems';
import { ShoppingCartSimple } from '@phosphor-icons/react';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

interface CoffeeCardProps {
  data: {
    id: number;
    name: string;
    tag: string[];
    description: string;
    price: string;
    image: string;
  };
  index: number;
}

export function CoffeeCard({ data, index }: CoffeeCardProps) {
  const images = [
    CoffeeExpressoTrad,
    CoffeeExpressoAme,
    CoffeeExpressoCre,
    CoffeeExpressoGel,
    CoffeeLeite,
    CoffeeLatte,
    CoffeeCappuccino,
    CoffeeMacchiato,
    CoffeeMocaccino,
    CoffeeChocolateQuente,
    CoffeeCubano,
    CoffeeHavaiano,
    CoffeeArabe,
    CoffeeIrlandes,
  ];
  const [numberItems, setNumberItems] = useState<number>(1)

  const { itemsCart, setItemsCart } = useContext(CartContext);

  const itemCartNew = [...itemsCart]

  function addItemsCart() {
    const isItemList = itemCartNew.some((item) => item.id == data.id )

    if(isItemList) {
      const indexItemList = itemCartNew.findIndex((item) => item.id == data.id )
    itemCartNew[indexItemList].amount += numberItems
    } else {
      itemCartNew.push({...data, amount: numberItems})
    }
    
    setItemsCart(itemCartNew)
  }

  return (
    <C.GlobalContainer>
      <img src={images[index]} alt="" />
      <C.WrapperTags>
        {data.tag.map((tag, index) => {
          return (
            <C.TagsCofee key={index}>
              <p>{tag}</p>
            </C.TagsCofee>
          );
        })}
      </C.WrapperTags>

      <C.CoffeeName>{data.name}</C.CoffeeName>

      <C.CoffeeDescription>{data.description}</C.CoffeeDescription>

      <C.WrapperFooter>
        <p>
          R$ <span>{data.price}</span>
        </p>
        <C.AmountItemsAndAddCart>
          <AmountItems amountItems={numberItems} setAmountItems={setNumberItems}/>
          <C.AddItemsCard>
            <ShoppingCartSimple onClick={addItemsCart} weight="fill" />
          </C.AddItemsCard>
        </C.AmountItemsAndAddCart>
      </C.WrapperFooter>
    </C.GlobalContainer>
  );
}

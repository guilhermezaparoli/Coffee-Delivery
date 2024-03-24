import * as C from './styles';
import LogoCoffeeDelivery from '../../assets/images/logo.svg';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Header() {

  const {itemsCart} = useContext(CartContext)

  const totalItens = itemsCart.reduce((acc, cur) => acc + cur.amount , 0)


  return (
    <>
      <C.Main>
        <Link to={"/"}>
        <C.Logo>
          <img src={LogoCoffeeDelivery} alt="" />
        </C.Logo>
        </Link>
        <C.LocationAndCart>
          <C.CardLocation>
            <C.IconMapPin />
            <C.TextCardLocation>Porto Alegre, RS</C.TextCardLocation>
          </C.CardLocation>
          <C.CartStatus>
            <Link to={'/checkout'}>
              <C.IconCart />
            </Link>
            <C.AmountItensCart>
              <C.TextAmountItensCart>{totalItens}</C.TextAmountItensCart>
            </C.AmountItensCart>
          </C.CartStatus>
        </C.LocationAndCart>
      </C.Main>
      <Outlet />
    </>
  );
}

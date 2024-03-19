import * as C from './styles';
import LogoCoffeeDelivery from '../../assets/images/logo.svg';
import { Link, Outlet } from 'react-router-dom';

export function Header() {
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
          </C.CartStatus>
        </C.LocationAndCart>
      </C.Main>
      <Outlet />
    </>
  );
}

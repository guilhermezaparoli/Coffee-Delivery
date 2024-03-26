import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import * as C from './styles';
import MotoCycleDelivery  from "../../assets/images/motocicle-delivery.svg"
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function OrderSuccess() {
  const {dataOrder} = useContext(CartContext)
  
  return (
    <C.Global>
      <C.LeftBlock>
        <C.TextYellow>Uhu! Pedido confirmado</C.TextYellow>
        <C.SimpleText>
          Agora é só aguardar que logo o café chegará até você
        </C.SimpleText>
        <C.BaseBlock>
          <C.IconeTexto>
            <C.IconMapRounded>
              <MapPin weight="fill" />
            </C.IconMapRounded>
            <p> 
              Entrega em <C.BoldText>Rua {dataOrder.rua},{dataOrder.numero}</C.BoldText>
              , {dataOrder.bairro} - {dataOrder.cidade}, {dataOrder.uf}
            </p>
          </C.IconeTexto>

          <C.IconeTexto>
            <C.IconTimerRounded>
              <Timer weight="fill" />
            </C.IconTimerRounded>
            <p>
              Previsão de entrega <C.BoldText>20 min - 30 min</C.BoldText>
            </p>
          </C.IconeTexto>
          <C.IconeTexto>
            <C.IconMoneyRounded>
              <CurrencyDollar />
            </C.IconMoneyRounded>
            <p>
              Pagamento na entrega <C.BoldText>Cartão de Crédito</C.BoldText>
            </p>
          </C.IconeTexto>
        </C.BaseBlock>
      </C.LeftBlock>
      <C.RightBlock>
        <img src={MotoCycleDelivery}/>
      </C.RightBlock>
    </C.Global>
  );
}

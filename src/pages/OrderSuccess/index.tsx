import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
import * as C from './styles';
import MotoCycleDelivery  from "../../assets/images/motocicle-delivery.svg"

export function OrderSuccess() {
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
              Entrega em <C.BoldText>Rua João Daniel Martinelli, 102</C.BoldText>
              , Farrapos - Porto Alegre, RS
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

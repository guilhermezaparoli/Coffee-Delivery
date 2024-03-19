import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react"
import * as C from "./styles"
import { InputText } from "../../components/InputText"
import { SelectPayment } from "../../components/SelectPayment"
import { AmountItems } from "../../components/AmountItems"
import CoffeeExpressoAme from "../../assets/images/type-americano.svg"
import { SecondaryButton } from "../../components/Buttons/SecondaryButton"

export function Checkout() {
  return (
    <C.Global>
      <C.LeftBlock>
        <h3>Complete seu pedido</h3>

        <C.BaseBlock>
          <C.TextIconBlock>
            <MapPinLine />
            <div>
              <C.TextTitle>Endereço de Entrega</C.TextTitle>
              <C.TextSubtitle>Informe o endereço onde deseja receber seu pedido</C.TextSubtitle>
            </div>
          </C.TextIconBlock>
          <C.WrapperInputsText>

            <InputText type="number" placeHolder="CEP" style={{ width: "200px" }} />
            <InputText type="text" placeHolder="Rua" />
            <C.WrapperInputsInternal>

              <InputText type="number" placeHolder="Número" style={{ width: "200px" }} />
              <InputText type="text" placeHolder="Complemento" />
            </C.WrapperInputsInternal>

            <C.WrapperInputsInternal>

              <InputText type="text" placeHolder="Bairro" style={{
                width: "200px",
              }} />
              <InputText type="text" placeHolder="Cidade" />
              <InputText type="text" placeHolder="UF" style={{
                width: "60px",
              }} />
            </C.WrapperInputsInternal>
          </C.WrapperInputsText>
        </C.BaseBlock>

        <C.BaseBlock>
          <C.TextIconBlockPayment>
            <CurrencyDollar />
            <div>
              <C.TextTitle>Pagamento</C.TextTitle>
              <C.TextSubtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</C.TextSubtitle>
            </div>
          </C.TextIconBlockPayment>
          <C.PaymentMethod>
            <SelectPayment title="CARTÃO DE CŔEDITO" icon={<CreditCard />} />
            <SelectPayment title="CARTÃO DE DÉBITO" icon={<Bank />} />
            <SelectPayment title="DINHEIRO" icon={<Money />} />
          </C.PaymentMethod>
        </C.BaseBlock>


      </C.LeftBlock>
      <C.RightBlock>
        <h3>Cafés selecionados</h3>

        <C.CartBlock>

          <C.ItemCart>
            <img src={CoffeeExpressoAme} alt="" />

            <C.NameAmountRemoveItemContainer>
              <p>Expresso Tradicional</p>

              <C.AmountAndRemoveContainer>
                <AmountItems />
                <SecondaryButton icon={<Trash />} text="REMOVER" />
              </C.AmountAndRemoveContainer>

            </C.NameAmountRemoveItemContainer>
            <C.Price>R$ 9,90</C.Price>
          </C.ItemCart>

          <C.DivisionLine />


          <C.Checkout>

            <C.LineCheckout>

              <C.SimpleText>
                Total de itens
              </C.SimpleText>
              <C.SimpleText>
                R$ 29,70
              </C.SimpleText>
            </C.LineCheckout>

            <C.LineCheckout>

              <C.SimpleText>
                Entrega
              </C.SimpleText>
              <C.SimpleText>
                R$ 3,50
              </C.SimpleText>
            </C.LineCheckout>


            <C.LineCheckout>

              <C.BoldText>Total</C.BoldText>
              <C.BoldText>R$ 33,20</C.BoldText>
            </C.LineCheckout>
          </C.Checkout>
        </C.CartBlock>
      </C.RightBlock>
    </C.Global>
  )
}
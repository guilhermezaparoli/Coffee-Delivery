import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react';
import * as C from './styles';
import { InputText } from '../../components/InputText';
import { SelectPayment } from '../../components/SelectPayment';
import { AmountItems } from '../../components/AmountItems';
import CoffeeExpressoAme from '../../assets/images/type-americano.svg';
import { RemoveButton } from '../../components/Buttons/RemoveButton';
import { ConfirmButton } from '../../components/Buttons/ConfirmButton';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import * as zod from "zod";
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';


interface handleNewOrderData{
  cep: string,
  rua: string,
  numero: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string
}

export function Checkout() {
  const [typePaymentSelected, setTypePaymentSelected] = useState<string>('');
  const newOrderValidationSchema = zod.object({
    cep: zod.string().min(8, "teste"),
    rua: zod.string().min(3, "Informe a rua"),
    numero: zod.string().min(1, "Informe o número"),
    complemento: zod.string(),
    bairro: zod.string().min(3, "Informe o bairro"),
    cidade: zod.string().min(2, "Informe a cidade"),
    uf: zod.string().min(2, "Informe a UF correta")
  })
  const { register, handleSubmit, formState: {errors} } = useForm<handleNewOrderData>({
    resolver: zodResolver(newOrderValidationSchema)
  });
  // const navigate = useNavigate()
  
  function handleNewOrder(data: handleNewOrderData) {
    console.log(data);


    // navigate("/order-success")
  }

  toast.success('🦄 Wow so easy!');

  return (
    <C.Global>
      <C.LeftBlock>
        <h3>Complete seu pedido</h3>
        <C.BaseBlock>
          <C.TextIconBlock>
            <MapPinLine />
            <div>
              <C.TextTitle>Endereço de Entrega</C.TextTitle>
              <C.TextSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </C.TextSubtitle>
            </div>
          </C.TextIconBlock>
          <C.WrapperFormInputs>
            <InputText
              type="number"
              placeHolder="CEP"
              errors={errors.cep ? true : false}
              style={{ width: '200px' }}
              register={{ ...register('cep') }}
            />
            <InputText
              type="text"
              errors={errors.rua ? true : false}
              placeHolder="Rua"
              register={{ ...register('rua') }}
            />
            <C.WrapperInputsInternal>
              <InputText
                type="number"
              errors={errors.numero ? true : false}
                placeHolder="Número"
                style={{ width: '200px' }}
                register={{ ...register('numero')}}
              />
              <InputText
                type="text"
              errors={errors.complemento ? true : false}
                placeHolder="Complemento"
                register={{ ...register('complemento') }}
              />
            </C.WrapperInputsInternal>

            <C.WrapperInputsInternal>
              <InputText
                type="text"
              errors={errors.bairro ? true : false}
              placeHolder="Bairro"
                style={{
                  width: '200px',
                }}
                register={{ ...register('bairro') }}
              />
              <InputText
                type="text"
                placeHolder="Cidade"
              errors={errors.cidade ? true : false}
                register={{ ...register('cidade') }}
              />
              <InputText
                type="text"
                placeHolder="UF"
              errors={errors.uf ? true : false}
                style={{
                  width: '60px',
                }}
                register={{ ...register('uf') }}
              />
            </C.WrapperInputsInternal>
          </C.WrapperFormInputs>
        </C.BaseBlock>

        <C.BaseBlock>
          <C.TextIconBlockPayment>
            <CurrencyDollar />
            <div>
              <C.TextTitle>Pagamento</C.TextTitle>
              <C.TextSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </C.TextSubtitle>
            </div>
          </C.TextIconBlockPayment>
          <C.PaymentMethod>
            <SelectPayment
              isSelected={typePaymentSelected === 'CREDITO'}
              title="CARTÃO DE CŔEDITO"
              onClick={() => setTypePaymentSelected('CREDITO')}
              icon={<CreditCard />}
            />
            <SelectPayment
              isSelected={typePaymentSelected === 'DEBITO'}
              title="CARTÃO DE DÉBITO"
              onClick={() => setTypePaymentSelected('DEBITO')}
              icon={<Bank />}
            />
            <SelectPayment
              isSelected={typePaymentSelected === 'DINHEIRO'}
              title="DINHEIRO"
              onClick={() => setTypePaymentSelected('DINHEIRO')}
              icon={<Money />}
            />
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
                <AmountItems  />
                <RemoveButton icon={<Trash />} text="REMOVER" />
              </C.AmountAndRemoveContainer>
            </C.NameAmountRemoveItemContainer>
            <C.Price>R$ 9,90</C.Price>
          </C.ItemCart>

          <C.DivisionLine />

          <C.Checkout>
            <C.LineCheckout>
              <C.SimpleText>Total de itens</C.SimpleText>
              <C.SimpleText>R$ 29,70</C.SimpleText>
            </C.LineCheckout>

            <C.LineCheckout>
              <C.SimpleText>Entrega</C.SimpleText>
              <C.SimpleText>R$ 3,50</C.SimpleText>
            </C.LineCheckout>

            <C.LineCheckout>
              <C.BoldText>Total</C.BoldText>
              <C.BoldText>R$ 33,20</C.BoldText>
            </C.LineCheckout>
          </C.Checkout>
          <Link to={'/order-success'}>
            <ConfirmButton
              onClick={handleSubmit(handleNewOrder)}
              text="Confirmar"
            />
          </Link>
        </C.CartBlock>
      </C.RightBlock>
    </C.Global>
  );
}

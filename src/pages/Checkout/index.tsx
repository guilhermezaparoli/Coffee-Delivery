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
import { RemoveButton } from '../../components/Buttons/RemoveButton';
import { ConfirmButton } from '../../components/Buttons/ConfirmButton';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { toast } from 'react-toastify';
import { CartContext } from '../../contexts/CartContext';

interface handleNewOrderData {
  cep: number;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  typePayment: string;
}

export function Checkout() {
  const { itemsCart, setDataOrder, setItemsLocalStorage } =
    useContext(CartContext);
const [cepValue, setCepValue] = useState<string>("")

  const [typePaymentSelected, setTypePaymentSelected] =
    useState<string>('DINHEIRO');
  const newOrderValidationSchema = zod.object({
    cep: zod.number(),
    rua: zod.string().min(3, 'Informe a rua'),
    numero: zod.number().min(1, 'Informe o número'),
    complemento: zod.string(),
    bairro: zod.string().min(3, 'Informe o bairro'),
    cidade: zod.string().min(2, 'Informe a cidade'),
    uf: zod.string().min(2, 'Informe a UF correta'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<handleNewOrderData>({
    resolver: zodResolver(newOrderValidationSchema)
  });
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = e?.target.value

if(inputValue.length <= 8 && /^\d*$/.test(inputValue)){
  setCepValue(inputValue)
}
}

console.log(errors)

  function handleNewOrder(data: handleNewOrderData) {
    console.log(typePaymentSelected);
    let typePaymentFormated = '';
    switch (typePaymentSelected) {
      case 'DINHEIRO':
        typePaymentFormated = 'Dinheiro';
        break;
      case 'CREDITO':
        typePaymentFormated = 'Cartão de Cŕedito';
        break;
      case 'DEBITO':
        typePaymentFormated = 'Cartão de Débito';
        break;
    }

    setDataOrder({ ...data, typePayment: typePaymentFormated });

    navigate('/order-success');

    toast.success('Pedido realizado com sucesso!');
    setItemsLocalStorage([]);
  }

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

  const totalPrice = itemsCart.reduce(
    (acc, curr) => acc + curr.priceNumber * curr.amount,
    0
  );

  function removeItem(toDelet: number) {
    const itemToDelete = itemsCart.findIndex((item) => item.id == toDelet);

    if (itemToDelete !== -1) {
      itemsCart.splice(itemToDelete, 1);
    }

    setItemsLocalStorage([...itemsCart]);
    toast.success('Produto excluído do carrinho!');
  }

  useEffect(() => {}, [itemsCart]);

  useEffect(() => {
    Object.keys(errors).length > 0 &&
      toast.error('Preencha os campos obrigatórios!');
  }, [errors]);

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
            <C.TextSubtitle>*campos obrigatórios</C.TextSubtitle>
            <div>
              <InputText
                type="text"
                placeHolder="CEP*"
                errors={errors.cep ? true : false}
                style={{ width: '200px' }}
                register={{ ...register('cep', { valueAsNumber: true }) }}
                value={cepValue}
                onChange={handleChange}
                maxLength={8}
              />
              {errors.cep && (
                <C.TextError>Informe um CEP válido!</C.TextError>
              )}
            </div>

            <InputText
              type="text"
              errors={errors.rua ? true : false}
              placeHolder="Rua*"
              register={{ ...register('rua') }}
            />
            <C.WrapperInputsInternal>
              <InputText
                type="number"
                errors={errors.numero ? true : false}
                placeHolder="Número*"
                style={{ width: '200px' }}
                register={{ ...register('numero', {valueAsNumber:true}) }}
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
                placeHolder="Bairro*"
                style={{
                  width: '200px',
                }}
                register={{ ...register('bairro') }}
              />
              <InputText
                type="text"
                placeHolder="Cidade*"
                errors={errors.cidade ? true : false}
                register={{ ...register('cidade') }}
              />
              <InputText
                type="text"
                placeHolder="UF*"
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

        {itemsCart.length > 0 ? (
          <C.CartBlock>
            <div>
              {itemsCart.map((item) => (
                <C.ItemCart key={item.id}>
                  <img src={images[item.id]} alt="" />

                  <C.NameAmountRemoveItemContainer>
                    <p>{item.name}</p>

                    <C.AmountAndRemoveContainer>
                      <AmountItems
                        amountItems={item.amount}
                        setAmountItems={() => {}}
                        data={item}
                      />
                      <RemoveButton
                        icon={<Trash />}
                        onClick={() => removeItem(item.id)}
                        text="REMOVER"
                      />
                    </C.AmountAndRemoveContainer>
                  </C.NameAmountRemoveItemContainer>
                  <C.Price>R$ {item.price}</C.Price>
                </C.ItemCart>
              ))}
            </div>

            <C.DivisionLine />

            <C.Checkout>
              <C.LineCheckout>
                <C.SimpleText>Total de itens</C.SimpleText>
                <C.SimpleText>
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </C.SimpleText>
              </C.LineCheckout>

              <C.LineCheckout>
                <C.SimpleText>Entrega</C.SimpleText>
                <C.SimpleText>R$ 3,50</C.SimpleText>
              </C.LineCheckout>

              <C.LineCheckout>
                <C.BoldText>Total</C.BoldText>
                <C.BoldText>
                  R$ {(totalPrice + 3.5).toFixed(2).replace('.', ',')}
                </C.BoldText>
              </C.LineCheckout>
            </C.Checkout>
            <Link to={'/order-success'}>
              <ConfirmButton
                onClick={handleSubmit(handleNewOrder)}
                text="Confirmar"
              />
            </Link>
          </C.CartBlock>
        ) : (
          <C.CartNoItems>
            <C.ItemNoItemsCart>
              <p>Não há produtos adicionados no carrinho!</p>
              <Link to={'/'}>
                <C.ButtonSeeProducts>Ver produtos</C.ButtonSeeProducts>
              </Link>
            </C.ItemNoItemsCart>
          </C.CartNoItems>
        )}
      </C.RightBlock>
    </C.Global>
  );
}

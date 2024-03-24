import * as C from './styles';
import BigCoffee from '../../assets/images/big-coffee-home.svg';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import { CoffeeCard } from '../../components/CoffeeCard';

export function Home() {
  const dadosMockadosCardCoffee = [
    {
      id: 1,
      name: 'Expresso Tradicional',
      tag: ['Tradicional'],
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: '9,90',
      priceNumber: 9.9,
      image: 'CoffeeExpressoTrad',
    },
    {
      id: 2,
      name: 'Expresso Americano',
      tag: ['Tradicional'],
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: '8,90',
      priceNumber: 8.9,
      image: 'CoffeeExpressoAme',
    },
    {
      id: 3,
      name: 'Expresso Cremoso',
      tag: ['Tradicional'],
      description: 'Café expresso tradicional com espuma cremosa',
      price: '5,90',
      priceNumber: 5.9,
      image: 'CoffeeExpressoCre',
    },
    {
      id: 4,
      name: 'Expresso Gelado',
      tag: ['Tradicional', 'Gelado'],
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: '10,90',
      priceNumber: 10.9,
      image: 'CoffeeExpressoGel',
    },
    {
      id: 5,
      name: 'Café com Leite',
      tag: ['Tradicional', 'Com leite'],
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: '9,90',
      priceNumber: 9.9,
      image: 'CoffeeLeite',
    },
    {
      id: 6,
      name: 'Latte',
      tag: ['Tradicional', 'Com leite'],
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: '11,90',
      priceNumber: 11.9,
      image: 'CoffeeLatte',
    },
    {
      id: 7,
      name: 'Capuccino',
      tag: ['Tradicional', 'Com leite'],
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: '10,90',
      priceNumber: 10.9,
      image: 'CoffeeCappuccino',
    },
    {
      id: 17,
      name: 'Macchiato',
      tag: ['Tradicional', 'Com leite'],
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: '10,90',
      priceNumber: 10.9,
      image: 'CoffeeMacchiato',
    },
    {
      id: 8,
      name: 'Mocaccino',
      tag: ['Tradicional', 'Com leite'],
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: '9,90',
      priceNumber: 9.9,
      image: 'CoffeeMocaccino',
    },
    {
      id: 9,
      name: 'Chocolate Quente',
      tag: ['Especial', 'Com leite'],
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: '12,90',
      priceNumber: 12.9,
      image: 'CoffeeChocolateQuente',
    },
    {
      id: 10,
      name: 'Cubano',
      tag: ['Especial', 'Alcoólico', 'Gelado'],
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: '15,90',
      priceNumber: 15.9,
      image: 'CoffeeCubano',
    },
    {
      id: 11,
      name: 'Havaiano',
      tag: ['Especial'],
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: '13,90',
      priceNumber: 13.9,
      image: 'CoffeeHavaiano',
    },
    {
      id: 12,
      name: 'Árabe',
      tag: ['Especial'],
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: '12,90',
      priceNumber: 12.9,
      image: 'CoffeeArabe',
    },
    {
      id: 13,
      name: 'Irlandês',
      tag: ['Especial', 'Alcoólico'],
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: '14,90',
      priceNumber: 14.9,
      image: 'CoffeeIrlandes',
    },
  ];

  return (
    <>
    {/* <Header/> */}
    <C.GlobalStyle>
      <C.FirstBlock>
        <C.TextBlock>
          <C.TitleAndSubtitleBlock>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </C.TitleAndSubtitleBlock>

          <C.FeaturesBlock>
            <C.Container>
              <C.TextIconBlock>
                <C.IconCartRounded>
                  <ShoppingCart weight="fill" />
                </C.IconCartRounded>
                <p>Compra simples e segura</p>
              </C.TextIconBlock>
              <C.TextIconBlock>
                <C.IconTimerRounded>
                  <Timer weight="fill" />
                </C.IconTimerRounded>
                <p>Entrega rápida e rastreada</p>
              </C.TextIconBlock>
            </C.Container>

            <C.Container>
              <C.TextIconBlock>
                <C.IconPackageRounded>
                  <Package weight="fill" />
                </C.IconPackageRounded>
                <p>Embalagem mantém o café intacto</p>
              </C.TextIconBlock>
              <C.TextIconBlock>
                <C.IconCoffeeRounded>
                  <Coffee weight="fill" />
                </C.IconCoffeeRounded>
                <p>O café chega fresquinho até você</p>
              </C.TextIconBlock>
            </C.Container>
          </C.FeaturesBlock>
        </C.TextBlock>
        <C.ImageBlock>
          <img src={BigCoffee} alt="Imagem de um copo de café" />
        </C.ImageBlock>
      </C.FirstBlock>

      <C.ListCoffee>
        <h1>Nossos Cafés</h1>

        <C.Coffee>
          {dadosMockadosCardCoffee.map((item, index) => {
            return <CoffeeCard key={item.id} data={item} index={index} />;
          })}
        </C.Coffee>
      </C.ListCoffee>
    </C.GlobalStyle>
    </>
  );
}

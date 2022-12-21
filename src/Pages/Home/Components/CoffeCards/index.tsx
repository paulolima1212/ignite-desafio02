import { ShoppingCart } from 'phosphor-react';

import { QuantityInput } from '../../../../Components/QuantityInput';
import { RegularText, TitleText } from '../../../../Components/Typography';
import {
  AddCartWrapper,
  CardFooterContainer,
  CoffeeCardsContainer,
  DescriptionCoffee,
  NameCoffee,
  Tags,
} from './styles';
import { formatNumber } from '../../../../Utils/format';

export function CoffeeCards() {
  return (
    <CoffeeCardsContainer>
      <img
        src='https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1672617600&Signature=o5HQ7rktxEAPlsaiMfosMhEMBPH7WWxfdUa~QIAOB~2AY8XDsGGPIIGeYUQglzpQeIZjWDTeONJylTJvI8wjInPfgeZUEOt3LTKJbXWsHz2U1K49q0q2NbsdYjBkRsX00P5J5-4WFu47KEHl1nueeuO7zBmJndp14pxPHh8NIZDKwL0w2MlMuvybJxkuXqqo3BzrFjHCdgglzieXBt7GntOQP~rkczIiG00cxcg5-WnBqdoDyefNfnhQtlo1hhyHKFZzdwDo3Mj2XeVXp7ynSMk~fy6IQkqbtNLTdvnyGF6h3zozJZYsrikDYTI7QVywGLDcMFK0BT5eqAl7QRDddg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        alt=''
      />
      <Tags>
        <span>Tradicional</span>
      </Tags>
      <NameCoffee>Tradicional</NameCoffee>
      <DescriptionCoffee>
        O tradicional café feito com água quente e grãos moídos
      </DescriptionCoffee>
      <CardFooterContainer>
        <div>
          <RegularText size='s'>R$</RegularText>
          <TitleText size='m' color='text' as='strong'>
            {formatNumber.format(9.9)}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight='fill' size={22} />
          </button>
        </AddCartWrapper>
      </CardFooterContainer>
    </CoffeeCardsContainer>
  );
}

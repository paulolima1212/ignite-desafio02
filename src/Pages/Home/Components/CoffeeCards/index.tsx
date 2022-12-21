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
import { useCartContext } from '../../../../Hooks/useCartContext';
import { useState } from 'react';

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeeCards({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  function handleAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd);
  }

  function handleIncrease() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecrease() {
    if (quantity === 1) {
      return null;
    }
    setQuantity((prev) => prev - 1);
  }

  return (
    <CoffeeCardsContainer>
      <img
        src='https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1672617600&Signature=o5HQ7rktxEAPlsaiMfosMhEMBPH7WWxfdUa~QIAOB~2AY8XDsGGPIIGeYUQglzpQeIZjWDTeONJylTJvI8wjInPfgeZUEOt3LTKJbXWsHz2U1K49q0q2NbsdYjBkRsX00P5J5-4WFu47KEHl1nueeuO7zBmJndp14pxPHh8NIZDKwL0w2MlMuvybJxkuXqqo3BzrFjHCdgglzieXBt7GntOQP~rkczIiG00cxcg5-WnBqdoDyefNfnhQtlo1hhyHKFZzdwDo3Mj2XeVXp7ynSMk~fy6IQkqbtNLTdvnyGF6h3zozJZYsrikDYTI7QVywGLDcMFK0BT5eqAl7QRDddg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        alt=''
      />
      <Tags>
        {coffee.tags.map((tag) => {
          return <span>{tag}</span>;
        })}
      </Tags>
      <NameCoffee>{coffee.name}</NameCoffee>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>
      <CardFooterContainer>
        <div>
          <RegularText size='s'>R$</RegularText>
          <TitleText size='m' color='text' as='strong'>
            {formatNumber.format(coffee.price)}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddCoffeeToCart}>
            <ShoppingCart weight='fill' size={22} />
          </button>
        </AddCartWrapper>
      </CardFooterContainer>
    </CoffeeCardsContainer>
  );
}

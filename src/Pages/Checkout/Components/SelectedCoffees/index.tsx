import { Button } from '../../../../Components/Button';
import { TitleText } from '../../../../Components/Typography';
import { CardCoffeeCart } from '../CardCoffeeCart';
import { TotalOrderSection } from './TotalOrderSection';
import { DetailsContainer, SelectedCoffeesContainer } from './styles';

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size='xs' color='subtitle'>
        Selected Coffees
      </TitleText>

      <DetailsContainer>
        <CardCoffeeCart />
        <CardCoffeeCart />
        <CardCoffeeCart />
        <CardCoffeeCart />

        <TotalOrderSection />
        <Button text='Confirm order' />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}

import { CoffeeCards } from './Components/CoffeCards';
import { Intro } from './Components/Intro';
import { OurCoffees } from './Components/OurCoffees';
import { CoffeeListContainer, HomeContainer } from './styles';

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
      <CoffeeListContainer className='container'>
        <CoffeeCards />
        <CoffeeCards />
        <CoffeeCards />
        <CoffeeCards />
        <CoffeeCards />
        <CoffeeCards />
        <CoffeeCards />
        <CoffeeCards />
      </CoffeeListContainer>
    </HomeContainer>
  );
}

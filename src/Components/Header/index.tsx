import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles';
import logoCoffee from '../../assets/logo-coffee.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <HeaderContainer>
      <div className='container'>
        <img src={logoCoffee} alt='' />
        <HeaderButtonContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight='fill' />
            <span>Porto Alegre - RS</span>
          </HeaderButton>
          <HeaderButton variant='yellow'>
            <ShoppingCart size={20} weight='fill' />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
}

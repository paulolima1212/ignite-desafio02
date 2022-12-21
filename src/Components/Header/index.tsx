import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles';
import logoCoffee from '../../assets/logo-coffee.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <HeaderContainer>
      <div className='container'>
        <NavLink to={'/'}>
          <img src={logoCoffee} alt='' />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight='fill' />
            <span>Porto Alegre - RS</span>
          </HeaderButton>
          <HeaderButton variant='yellow'>
            <NavLink to={'/checkout'}>
              <ShoppingCart size={20} weight='fill' />
            </NavLink>
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
}

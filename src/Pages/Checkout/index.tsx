import { MapPin, MapPinLine } from 'phosphor-react';
import { CheckoutForm } from './Components/CheckoutForm';
import { SectionTitle } from './Components/SectionTitle';
import { CheckoutContainer } from './styles';

export function CheckoutPage() {
  return (
    <CheckoutContainer className='container'>
      <CheckoutForm />
    </CheckoutContainer>
  );
}

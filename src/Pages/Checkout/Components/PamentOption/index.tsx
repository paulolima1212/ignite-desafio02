import { CreditCard } from 'phosphor-react';
import { PaymentOptionsContainer } from './styles';

export function PaymentOption() {
  return (
    <PaymentOptionsContainer>
      <CreditCard size={16} />
      Credit card
      <input type='radio' name='' id='' />
    </PaymentOptionsContainer>
  );
}

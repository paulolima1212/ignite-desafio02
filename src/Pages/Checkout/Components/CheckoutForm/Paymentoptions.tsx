import { PaymentOption } from '../PamentOption';
import { PaymentOptionsContainer } from './styles';

export function PaymentOptions() {
  return (
    <PaymentOptionsContainer>
      <PaymentOption />
      <PaymentOption />
      <PaymentOption />
    </PaymentOptionsContainer>
  );
}

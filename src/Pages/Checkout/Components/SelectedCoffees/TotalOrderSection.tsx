import { RegularText } from '../../../../Components/Typography';
import { TotalOrderSectionContainer } from './styles';

export function TotalOrderSection() {
  return (
    <TotalOrderSectionContainer>
      <div>
        <RegularText size='s'>Total items</RegularText>
        <RegularText>9.90€</RegularText>
      </div>
      <div>
        <RegularText size='s'>Delivery</RegularText>
        <RegularText>3.90€</RegularText>
      </div>
      <div>
        <RegularText size='l' weight={700} color='subtitle'>
          Total Order
        </RegularText>
        <RegularText size='l' weight={700} color='subtitle'>
          13.80€
        </RegularText>
      </div>
    </TotalOrderSectionContainer>
  );
}

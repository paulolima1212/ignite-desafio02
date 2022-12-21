import { Input } from '../../../../Components/Input';
import { AddressFormContainer } from './styles';

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input placeholder='Zip code' className='zip-code' type='number' />
      <Input placeholder='Street' className='street' />
      <Input placeholder='Number' className='number' type='number' />
      <Input placeholder='Complement' className='complement' />
      <Input placeholder='District' />
      <Input placeholder='City' />
      <Input placeholder='UF' />
    </AddressFormContainer>
  );
}

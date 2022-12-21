import { Minus, Plus } from 'phosphor-react';

import { IconWrapper, QuantityInputContainer } from './styles';

export function QuantityInput({
  size = 'medium',
}: {
  size?: 'medium' | 'small';
}) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper>
        <Minus size={14} weight='fill' />
      </IconWrapper>
      <input type='number' readOnly value='1' />
      <IconWrapper>
        <Plus size={14} weight='fill' />
      </IconWrapper>
    </QuantityInputContainer>
  );
}

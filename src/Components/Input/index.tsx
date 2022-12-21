import { InputHTMLAttributes, forwardRef } from 'react';
import { InputStyledContainer, WrapperInput } from './styles';
import { RegularText } from '../Typography';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <WrapperInput>
        <InputStyledContainer {...props} ref={ref} />
        {error && <RegularText size='s'>{error}</RegularText>}
      </WrapperInput>
    );
  }
);

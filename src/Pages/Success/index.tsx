import { RegularText, TitleText } from '../../Components/Typography';
import {
  ContentContainer,
  OrderDetailsContainer,
  SuccessContainer,
} from './styles';

import motorcycleImg from '../../assets/motorcycle.svg';
import { InfoWithIcon } from '../../Components/InfoWithIcon';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function SuccessPage() {
  const { colors } = useTheme();
  return (
    <SuccessContainer className='container'>
      <div>
        <TitleText size='l' color='title'>
          Wow! Order confirmed.
        </TitleText>
        <RegularText size='l' color='subtitle'>
          Now just wait for your coffee to come to you
        </RegularText>
      </div>

      <ContentContainer>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin size={16} weight='fill' />}
            iconColor={colors['brand-purple-dark']}
            text={
              <p>
                Delivery on <strong>John Daniel Street</strong>, number 102
              </p>
            }
          />
          <InfoWithIcon
            icon={<Timer size={16} weight='fill' />}
            iconColor={colors['brand-yellow']}
            text={
              <p>
                Previous arrives <br />
                <strong>20min - 30min</strong>
              </p>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar size={16} weight='fill' />}
            iconColor={colors['brand-yellow-dark']}
            text={
              <p>
                Payment on arrives <br />
                <strong>Credit card</strong>
              </p>
            }
          />
        </OrderDetailsContainer>
        <img src={motorcycleImg} alt='' />
      </ContentContainer>
    </SuccessContainer>
  );
}

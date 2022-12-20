import styled from 'styled-components';

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconContainerProps {
  iconColor: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({ iconColor }) => iconColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors['base-background']};
`;

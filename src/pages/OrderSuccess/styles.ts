import styled from 'styled-components';

export const Global = styled.div`
  max-width: 70rem;
  margin: 5.875rem auto 10rem;

  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
 margin: 2rem auto 2rem;

  }
`;

export const LeftBlock = styled.div`
  > h3 {
    margin-bottom: 16px;
  }
`;

export const BaseBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 530px;
  gap: 32px;
  padding: 40px;

  border: 1px solid #dbac2c;
  border-radius: 6px 36px;

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const IconeTexto = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const BaseTextIconBlock = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 32px;

  > svg {
    font-size: 22px;
  }
`;

export const TextIconBlock = styled(BaseTextIconBlock)`
  > svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }
`;

export const RightBlock = styled.div`
  > h3 {
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
  > img {
    max-width: 400px;
  }
  }

`;
export const TextYellow = styled.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: 'Baloo 2', sans-serif;
  color: ${({ theme }) => theme['yellow-dark']};
`;

export const SimpleText = styled.p`
  font-size: 20;
  line-height: 1.3;
  margin-bottom: 40px;
`;

const IconBase = styled.div`
  padding: 8px;
  border-radius: 1000px;

  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${({ theme }) => theme.white};
  }
`;

export const IconMapRounded = styled(IconBase)`
  background-color: ${({ theme }) => theme['purple']};
`;
export const IconTimerRounded = styled(IconBase)`
  background-color: ${({ theme }) => theme['yellow']};
`;
export const IconMoneyRounded = styled(IconBase)`
  background-color: ${({ theme }) => theme['yellow-dark']};
`;

export const BoldText = styled.p`
  font-weight: 700;
  display: inline;
`;

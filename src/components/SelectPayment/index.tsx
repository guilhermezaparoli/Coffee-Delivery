import * as C from './styles';
import { IconProps } from '@phosphor-icons/react';

interface SelectPaymentProps {
  icon?: IconProps;
  title: string;
  isSelected?: boolean;
  onClick: () => void;
}

export function SelectPayment({
  icon,
  title,
  isSelected = false,
  onClick,
}: SelectPaymentProps) {
  return (
    <C.MainContainer onClick={onClick} isSelected={isSelected}>
      <C.BlockTextIcon>
        <>{icon}</>
        <p>{title}</p>
      </C.BlockTextIcon>
    </C.MainContainer>
  );
}

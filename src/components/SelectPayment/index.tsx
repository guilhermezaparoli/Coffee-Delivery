import * as C from './styles';
import { IconProps } from '@phosphor-icons/react';

interface SelectPaymentProps {
  icon?: IconProps;
  title: string;
  isSelected?: boolean;
  onClick: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: any,
}

export function SelectPayment({
  icon,
  title,
  isSelected = false,
  onClick,
  register
}: SelectPaymentProps) {
  return (
    <C.MainContainer onClick={onClick} isSelected={isSelected} {...register}>
      <C.BlockTextIcon>
        <>{icon}</>
        <p>{title}</p>
      </C.BlockTextIcon>
    </C.MainContainer>
  );
}

import styled, { css } from 'styled-components';
import useHandlerKeyPress from '../../hooks/useHandlerKeyPress';
import { theme } from '../../theme';
import TextGradient from '../commons/text-gradient';
import Text from '../texts/text';
import BaseButton from './base';

interface Props {
  selected?: boolean;
  width: string;
  height: string;
  onClick?: () => void;
  onKeyPressCallback?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = styled(BaseButton)<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${(p) => p.width};
  height: ${(p) => p.height};

  border-radius: 12px;
  border: none;

  background: ${(p) =>
    p.disabled
      ? p.theme.bgColors.specials.illustrationLight
      : p.selected
      ? p.theme.bgColors.brand
      : p.theme.bgColors.ligth};

  p {
    color: ${(p) => p.theme.colors.white};
    font-size: ${(p) => p.theme.textSizes.texts.desktop.l1};
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0%;
  }
`;

const BrandButton: React.FC<Props> = ({
  selected,
  width,
  height,
  children,
  onClick,
  onKeyPressCallback,
  className = '',
  disabled,
}) => {
  const onKeyPress = useHandlerKeyPress<HTMLButtonElement>(() => onKeyPressCallback?.());
  return (
    <Button
      selected={selected}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      onKeyPress={onKeyPress}
      disabled={disabled}>
      <Text>{!selected ? <TextGradient type='brand'>{children}</TextGradient> : children}</Text>
    </Button>
  );
};

export default BrandButton;

import useHandlerKeyPress from '../../../hooks/useHandlerKeyPress';
import TextGradient from '../../commons/text-gradient';
import Text from '../../texts/text';
import { Container } from './container';

export interface Props {
  selected?: boolean;
  width: string;
  height: string;
  onClick?: () => void;
  onKeyPressCallback?: () => void;
  disabled?: boolean;
  className?: string;
}

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
    <Container
      selected={selected}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      onKeyPress={onKeyPress}
      disabled={disabled}>
      <Text>{!selected ? <TextGradient type='brand'>{children}</TextGradient> : children}</Text>
    </Container>
  );
};

export default BrandButton;

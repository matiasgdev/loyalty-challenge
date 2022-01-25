import { AlertContainer } from './container';
import ErrorIcon from '../../list/icons/error-icon';
import SuccessIcon from '../../list/icons/success-icon';
import Text from '../../texts/text';

interface Props {
  type: 'error' | 'success';
  product?: string;
}

const Alert: React.FC<Props> = (props) => {
  let icon;
  let message;
  if (props.type === 'error') {
    icon = <ErrorIcon />;
    message = 'There was a problem with the transaction';
  }
  if (props.type === 'success') {
    icon = <SuccessIcon />;
    message = ' was redeemed successfully';
  }
  return (
    <AlertContainer role='Alert' arial-label={`Alert ${props.type}`}>
      <div className='alert-icon'>{icon}</div>
      <Text color='gray600'>
        <span className='alert-product'>{props.product}</span>
        {message}
      </Text>
    </AlertContainer>
  );
};

export default Alert;

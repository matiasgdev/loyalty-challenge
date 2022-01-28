import { keyframes } from 'styled-components';

export const skeleton = keyframes`
  0% {
    background-color: #E6EDF7;
  }

  100% {
    background: #DAE4F2;
  }
`;

export const navVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 70,
    }
  },
  hidden: (type: string) => ({
    opacity: 0,
    y: type === 'logo' ? '-100vw' : '-20vh',
  }),
};

export type ModalsState = {
  success?: {
    show: boolean;
    text?: string;
  };
  error?: {
    show: boolean;
    text: string;
  };
};

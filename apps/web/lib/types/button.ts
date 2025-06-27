export type ButtonProps = {
  className: string;
  isIconOnly: boolean;
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onPress?: () => void;
};

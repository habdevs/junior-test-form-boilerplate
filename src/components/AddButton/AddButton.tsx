import { AddBtn, TextBtn } from './styles';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  click: any;
}

export const AddButton: React.FC<ButtonProps> = ({
  type = 'button',
  click,
}) => {
  return (
    <AddBtn type={type} onClick={click}>
      <TextBtn>Add Card</TextBtn>
    </AddBtn>
  );
};

import { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface TextAreaProps {
  placeholder: string;
  register: UseFormRegister<any>;
  errors: ReactNode;
}

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  register,
  errors,
}) => {
  return (
    <div>
      <textarea placeholder={placeholder} {...register} />
      <div>{errors}</div>
    </div>
  );
};

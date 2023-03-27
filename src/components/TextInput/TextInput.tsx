interface TextInputProps {
  name: string;
  placeholder: string;
  register: any;
  errors: any;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  placeholder,
  register,
  errors,
}) => {
  return (
    <div>
      <div>{name}</div>
      <input placeholder={placeholder} {...register} />
      <div>{errors}</div>
    </div>
  );
};

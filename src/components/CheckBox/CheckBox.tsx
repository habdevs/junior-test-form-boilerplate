interface CheckBoxProps {
  textCheck: string;
  checkedBox: boolean;
  onChange: () => void;
  id: string;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  textCheck,
  checkedBox,
  onChange,
  id,
}) => {
  return (
    <label htmlFor={id}>
      <input type="checkbox" checked={checkedBox} onChange={onChange} />
      <span>{textCheck}</span>
    </label>
  );
};

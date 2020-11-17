import { Wrapper, HiddenInput, Label } from './styled';

const Tag = ({ id, label, onChange, defaultChecked }) => {
  return (
    <Wrapper>
      <HiddenInput
        id={id}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

export default Tag;

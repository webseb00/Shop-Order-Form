import { Label, Checkbox, InputWrapper, Input, Select, Option } from './Styles';

export const CheckboxItem = ({ label, title, value, handler }) => {
  return (
    <Label>
      <Checkbox 
        type="checkbox"
        name={title}
        value={value}
        onChange={handler}
      />
      {label}
    </Label>
  )
} 

export const InputField = ({ type, label, placeholder, required }) => {
  return (
    <InputWrapper>
      <Input 
        type={type}
        name={label}
        placeholder={placeholder}
        required={required}
      />
    </InputWrapper>
  )
}

export const SelectInput = ({ label, countries }) => {
  return (
    <Select name={label}>
      {Array.from(countries).map((country, index) => <Option key={index} for={country.toLowerCase()}>{country}</Option>)};
    </Select>
  )
}
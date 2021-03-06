import { Label, Checkbox, Radio, InputWrapper, Input, Textarea, Select, Option, ErrorField, Transition } from './Styles';

export const CheckboxItem = ({ label, name, value, handler }) => {
  return (
    <Label>
      <Checkbox 
        type="checkbox"
        name={name}
        checked={value} 
        onChange={handler}
      />
      {label}
    </Label>
  )
} 

export const RadioItem = ({ label, name, value, handler }) => {
  return (
    <Label>
      <Radio 
        type="radio"
        name={name}
        value={value}
        onChange={handler}
      />
      {label}
    </Label>
  )
}

export const InputField = ({ type, label, placeholder, required, refs, inputError }) => {
  return (
    <InputWrapper>
      <Input 
        type={type}
        name={label}
        placeholder={placeholder}
        required={required}
        {...refs}
      />
      {inputError && <ErrorField>{inputError.message || "To pole jest wymagane."}</ErrorField>}
    </InputWrapper>
  )
}

export const TextareaInput = ({ name, placeholder, refs }) => {
  return (
    <Textarea 
      name={name}
      placeholder={placeholder}
      {...refs}
    />
  )
}

export const SelectInput = ({ label, countries, refs }) => {
  return (
    <Select name={label} {...refs}>
      {Array.from(countries).map((country, index) => 
      <Option 
        key={index} 
        htmlFor={country.toLowerCase()}
        value={country}
        defaultValue={countries[1]}
        >
          {country}
      </Option>)};
    </Select>
  )
}

export const InputTransition = ({ children }) => {
  return (
    <Transition>
      {children}
    </Transition>
  )
}
import React from 'react';
import { Label } from '../atoms/Label';
import { Input } from '../atoms/Input';
import { Select, SelectOption } from '../atoms/Select';
import { Textarea } from '../atoms/Textarea';

interface BaseFormFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

interface InputFieldProps extends BaseFormFieldProps {
  type: 'input';
  inputType?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
}

interface SelectFieldProps extends BaseFormFieldProps {
  type: 'select';
  options: SelectOption[];
}

interface TextareaFieldProps extends BaseFormFieldProps {
  type: 'textarea';
  placeholder?: string;
  rows?: number;
}

type FormFieldProps = InputFieldProps | SelectFieldProps | TextareaFieldProps;

export const FormField: React.FC<FormFieldProps> = (props) => {
  const { label, name, required = false, error, value, onChange } = props;

  return (
    <div className="w-full">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      {props.type === 'input' && (
        <Input
          id={name}
          name={name}
          type={props.inputType || 'text'}
          placeholder={props.placeholder}
          error={error}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
      {props.type === 'select' && (
        <Select
          id={name}
          name={name}
          options={props.options}
          error={error}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
      {props.type === 'textarea' && (
        <Textarea
          id={name}
          name={name}
          placeholder={props.placeholder}
          rows={props.rows}
          error={error}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};


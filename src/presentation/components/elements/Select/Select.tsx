import { HTMLProps } from "react";

interface SelectProps extends HTMLProps<HTMLSelectElement> {
  label: string;
  error?: string;
  options: string[];
}

export const Select = ({ label, options }: SelectProps) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((opt) => (
        <p>{opt}</p>
      ))}
    </div>
  );
};

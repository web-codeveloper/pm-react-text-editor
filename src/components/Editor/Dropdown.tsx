import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onChange: (value: string) => void;
}

function Dropdown({ options, onChange }: DropdownProps) {
  return (
    <div className="dropdown">
      <select onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown size={16} className="dropdown-icon" />
    </div>
  );
}

export default Dropdown;
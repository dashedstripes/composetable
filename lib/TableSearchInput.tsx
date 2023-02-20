import React from 'react';

interface Props {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const TableSearchInput: React.FC<Props> = ({
  placeholder = 'Search...',
  value,
  onChange,
}) => {
  return (
    <input 
      type="text" 
      value={value} 
      placeholder={placeholder} 
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default TableSearchInput;
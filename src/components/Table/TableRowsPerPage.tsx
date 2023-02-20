import React from 'react';

interface Props {
  options: { value: string }[],
  selected: string;
  onChange: (value: string) => void;
}

const TableRowsPerPage: React.FC<Props> = ({
  options,
  selected,
  onChange
}) => {
  return (
    <select
      value={selected}
      onChange={(e) => onChange(e?.target?.value)}
    >
      {options?.map((option) => (
        <option
          key={option.value}
        >{option.value}</option>
      ))}
    </select>
  )
}

export default TableRowsPerPage;
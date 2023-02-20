import React, { ReactElement } from 'react';

interface Props {
  headers: { key: string, data: ReactElement }[],
  rows: { id: string, cells: { key: string, data: ReactElement }[] }[]
}

const Table: React.FC<Props> = ({
  headers,
  rows,
}) => {
  return (
    <table>
      <thead>
        <tr>
          {headers?.map((header) => (
            <th key={`header-${header.key}`}>
              <td>{header.data}</td>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row) => (
          <tr key={row?.id}>
            {row.cells?.map((cell) => (
              <td key={`${row?.id}-${cell.key}`}>{cell.data}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
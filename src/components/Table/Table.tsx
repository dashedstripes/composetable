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
            <th key={`header-${header.key}`}>{header.data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((row) => (
          <tr key={row?.id}>
            {row?.cells?.map((i) => (
              <td key={`${row?.id}-${i.key}`}>{i.data}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;
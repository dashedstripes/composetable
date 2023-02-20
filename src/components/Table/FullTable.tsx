import React, { useState } from 'react';
import Table from './Table';
import TablePagination from './TablePagination';

const data = {
  headers: [
    { key: 'ID', data: <span>ID</span> },
    { key: 'Name', data: <span>Name</span> }
  ],
  rows: [
    {
      id: '123',
      cells: [
        { key: '123', data: <span>123</span> },
        { key: 'Adam', data: <span>Adam</span> }
      ]
    },
    {
      id: '456',
      cells: [
        { key: '456', data: <span>456</span> },
        { key: 'Luna', data: <span>Luna</span> }
      ]
    },
  ]
}

interface Props {
}

const FullTable: React.FC<Props> = ({ }) => {
  const [rowsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = 50;

  const [headers] = useState(data.headers);
  const [rows, setRows] = useState(data.rows.slice(0, 1));

  return (
    <div>
      <Table
        headers={headers}
        rows={rows}
      />
      <div className="pagination">
        <TablePagination
          rowsPerPage={rowsPerPage}
          numOfItems={totalItems}
          currentPage={currentPage}
          firstButton={(isDisabled) => (
            <button
              className='page-button'
              disabled={isDisabled}
              onClick={() => {
                setRows(data.rows.slice(0, 1))
                setCurrentPage(1)
              }}
            >&lt;&lt;</button>
          )}
          previousButton={(isDisabled) => (
            <button
              className='page-button'
              disabled={isDisabled}
              onClick={() => {
                setRows(data.rows.slice(0, rowsPerPage))
                setCurrentPage(currentPage - 1)
              }}
            >&lt;</button>
          )}
          numberButton={(pageNumber, isDisabled) => (
            <button
              className='page-button'
              disabled={isDisabled}
              onClick={() => {
                setRows(data.rows.slice(pageNumber - 1, pageNumber))
                setCurrentPage(pageNumber)
              }}
            >{pageNumber}</button>
          )}
          nextButton={(isDisabled) => (
            <button
              className='page-button'
              disabled={isDisabled}
              onClick={() => {
                setRows(data.rows.slice(currentPage - 1, currentPage))
                setCurrentPage(currentPage + 1)
              }}
            >&gt;</button>
          )}
          lastButton={(lastPageNumber, isDisabled) => (
            <button
              className='page-button'
              disabled={isDisabled}
              onClick={() => {
                setRows(data.rows.slice(lastPageNumber - 1, lastPageNumber))
                setCurrentPage(lastPageNumber)
              }}
            >&gt;&gt;</button>
          )}
        />
      </div>
    </div>
  )
}

export default FullTable;
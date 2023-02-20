import React from 'react';
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
  return (
    <div>
      <Table
        headers={data.headers}
        rows={data.rows}
      />
      <div className="pagination">
        <TablePagination
          itemsPerPage={2}
          numOfItems={300}
          currentPage={45}
          firstButton={(isDisabled) => <button className='page-button' disabled={isDisabled}>&lt;&lt;</button>}
          previousButton={(isDisabled) => <button className='page-button' disabled={isDisabled}>&lt;</button>}
          numberButton={(text, isDisabled) => <button className='page-button' disabled={isDisabled}>{text}</button>}
          nextButton={(isDisabled) => <button className='page-button' disabled={isDisabled}>&gt;</button>}
          lastButton={(_, isDisabled) => <button className='page-button' disabled={isDisabled}>&gt;&gt;</button>}
        />
      </div>
    </div>
  )
}

export default FullTable;
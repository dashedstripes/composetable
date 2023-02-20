import React, { useState } from 'react';
import Table from './Table';
import TablePagination from './TablePagination';

// const data = {
//   headers: [
//     { key: 'ID', data: <span>ID</span> },
//     { key: 'Name', data: <span>Name</span> },
//     { key: 'Actions', data: <></> },
//   ],
//   rows: [
//     {
//       id: '123',
//       cells: [
//         { key: '123', data: <span>123</span> },
//         { key: 'Adam', data: <span>Adam</span> },
//         { key: 'actions', data: <button>actions</button> },
//       ]
//     },
//     {
//       id: '456',
//       cells: [
//         { key: '456', data: <span>456</span> },
//         { key: 'Luna', data: <span>Luna</span> },
//         { key: 'actions', data: <button>actions</button> },
//       ]
//     },
//   ]
// }

function generateDummyData(num: number = 110) {
  let d = [];
  for (let i = 0; i < num; i++) {
    d.push({ id: i, name: `${i}` })
  }
  return d;
}

interface Props {
}

const FullTable: React.FC<Props> = ({ }) => {
  const [rowsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState(generateDummyData());

  const rows = data?.slice(
    (currentPage - 1) * rowsPerPage,
    (currentPage - 1) * rowsPerPage + rowsPerPage
  ).map((item) => ({
    id: `${item.id}`, cells: [
      { key: `${item.id}`, data: <span>{item.id}</span> },
      { key: `${item.name}`, data: <span>{item.name}</span> },
    ]
  }))

  return (
    <div>
      <Table
        headers={[
          { key: 'ID', data: <span>ID</span> },
          { key: 'Name', data: <span>Name</span> },
        ]}
        rows={rows}
      />
      <div className="pagination">
        <TablePagination
          rowsPerPage={rowsPerPage}
          numOfItems={data.length}
          currentPage={currentPage}
          firstButton={(isDisabled) => (
            <button
              className='page-button'
              disabled={isDisabled}
              onClick={() => {
                setCurrentPage(1)
              }}
            >&lt;&lt;</button>
          )}
          previousButton={(isDisabled) => (
            <button
              className='page-button'
              disabled={isDisabled}
              onClick={() => {
                setCurrentPage(currentPage - 1)
              }}
            >&lt;</button>
          )}
          numberButton={(pageNumber, isDisabled) => (
            <button
              className='page-button'
              disabled={isDisabled}
              onClick={() => {
                setCurrentPage(pageNumber)
              }}
            >{pageNumber}</button>
          )}
          nextButton={(isDisabled) => (
            <button
              className='page-button'
              disabled={isDisabled}
              onClick={() => {
                setCurrentPage(currentPage + 1)
              }}
            >&gt;</button>
          )}
          lastButton={(lastPageNumber, isDisabled) => (
            <button
              className='page-button'
              disabled={isDisabled}
              onClick={() => {
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
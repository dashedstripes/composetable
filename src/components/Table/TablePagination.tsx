import React, { ReactElement } from 'react';

interface Props {
  currentPage: number;
  itemsPerPage: number;
  numOfItems: number;
  button: (text: string, isDisabled: boolean) => ReactElement;
}

const TablePagination: React.FC<Props> = ({
  currentPage,
  itemsPerPage,
  numOfItems,
  button
}) => {
  const totalPages = numOfItems / itemsPerPage;

  if (currentPage < 1 || currentPage > totalPages) {
    return null;
  }

  return (
    <div>
      {button('First', currentPage <= 1)}
      {button('Previous', currentPage <= 1)}

      {button(`${currentPage}`, false)}

      {button('Next', currentPage > totalPages)}
      {button('Last', currentPage > totalPages)}
    </div>
  )
}

export default TablePagination;
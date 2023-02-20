import React, { ReactElement } from 'react';

interface Props {
  currentPage: number;
  rowsPerPage: number;
  numOfItems: number;
  firstButton: (isDisabled: boolean) => ReactElement;
  previousButton: (isDisabled: boolean) => ReactElement;
  numberButton: (pageNumber: number, isDisabled: boolean) => ReactElement;
  nextButton: (isDisabled: boolean) => ReactElement;
  lastButton: (lastPageNumber: number, isDisabled: boolean) => ReactElement;
}

const TablePagination: React.FC<Props> = ({
  currentPage,
  rowsPerPage,
  numOfItems,
  firstButton,
  previousButton,
  numberButton,
  nextButton,
  lastButton
}) => {
  const totalPages = numOfItems / rowsPerPage;

  if (currentPage < 1 || currentPage > totalPages) {
    return null;
  }

  return (
    <div>
      {currentPage > 1 && (
        <>
          {firstButton(currentPage <= 1)}
          {previousButton(currentPage <= 1)}
        </>
      )}

    {currentPage - 1 > 0 && (
        numberButton(currentPage - 1, false)
      )}

      {numberButton(currentPage, true)}

      {currentPage + 1 < totalPages && (
        numberButton(currentPage + 1, false)
      )}

      {currentPage < totalPages && (
        <>
        {nextButton(currentPage > totalPages)}
        {lastButton(totalPages, currentPage > totalPages)}
        </>
      )}
    </div>
  )
}

export default TablePagination;
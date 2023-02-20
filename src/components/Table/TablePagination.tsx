import React, { ReactElement } from 'react';

interface Props {
  currentPage: number;
  itemsPerPage: number;
  numOfItems: number;
  firstButton: (isDisabled: boolean) => ReactElement;
  previousButton: (isDisabled: boolean) => ReactElement;
  numberButton: (text: string, isDisabled: boolean) => ReactElement;
  nextButton: (isDisabled: boolean) => ReactElement;
  lastButton: (text: string, isDisabled: boolean) => ReactElement;
}

const TablePagination: React.FC<Props> = ({
  currentPage,
  itemsPerPage,
  numOfItems,
  firstButton,
  previousButton,
  numberButton,
  nextButton,
  lastButton
}) => {
  const totalPages = numOfItems / itemsPerPage;

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
        numberButton(`${currentPage - 1}`, false)
      )}

      {numberButton(`${currentPage}`, true)}

      {currentPage + 1 < totalPages && (
        numberButton(`${currentPage + 1}`, false)
      )}

      {currentPage < totalPages && (
        <>
        {nextButton(currentPage > totalPages)}
        {lastButton(`${totalPages}`, currentPage > totalPages)}
        </>
      )}
    </div>
  )
}

export default TablePagination;
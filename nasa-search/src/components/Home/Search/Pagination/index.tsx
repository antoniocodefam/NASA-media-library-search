import Pagination from "react-bootstrap/Pagination";

export const TEASERS_PER_PAGE = 6;

interface HomeSearchPaginationProps {
  itemsAmount: number;
  currentPage: number;
  onPageChange: (nextPage: number) => void;
}
export default function HomeSearchPagination({
  itemsAmount,
  currentPage,
  onPageChange,
}: HomeSearchPaginationProps) {
  const totalPages = Math.ceil(itemsAmount / TEASERS_PER_PAGE);

  return (
    <Pagination className="justify-content-center">
      {totalPages > 2 && (
        <Pagination.First
          data-test-id="first"
          onClick={() => onPageChange(1)}
        />
      )}
      {currentPage > 1 && (
        <Pagination.Item onClick={() => onPageChange(currentPage - 1)}>
          {currentPage - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{currentPage}</Pagination.Item>
      {currentPage < totalPages - 2 && (
        <Pagination.Item onClick={() => onPageChange(currentPage + 1)}>
          {currentPage + 1}
        </Pagination.Item>
      )}
      {totalPages > 6 && (
        <Pagination.Last
          data-test-id="last"
          onClick={() => onPageChange(totalPages)}
        />
      )}
    </Pagination>
  );
}

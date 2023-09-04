import React from "react";

import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  onChangePage: (number: number) => void;
  value: number;
};

const Pagination: React.FC<PaginationProps> = ({ onChangePage, value }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      forcePage={value - 1}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;

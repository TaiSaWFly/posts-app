import React from "react";
import { Pagination } from "antd";

const Paginate = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize) * 10;
  if (pageCount === 10) return null;

  return (
    <Pagination
      defaultCurrent={currentPage}
      total={pageCount}
      onChange={onPageChange}
    />
  );
};

export default Paginate;

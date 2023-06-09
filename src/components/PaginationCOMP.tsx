import React from "react";
import Pagination from "@mui/material/Pagination";
import { useRecoilState } from "recoil";

import { pageNumber } from "../states/TodoData";

export default function PaginationCOMP({
  total,
  countPerPage,
}: {
  total: number;
  countPerPage: number;
}) {
  const [pageCount, setPageCount] = useRecoilState(pageNumber);
  return (
    <div>
      <Pagination
        count={Math.ceil(total / countPerPage)}
        onChange={(_, value: number) => setPageCount(value)}
      />
    </div>
  );
}

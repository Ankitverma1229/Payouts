import React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import { GrPrevious, GrNext } from "react-icons/gr"; // Import icons

const Pagination = () => {
  const List = styled("ul")({
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  });

  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav>
      <List className="flex items-center justify-center">
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button type="button" className="px-4 py-2 flex" {...item}>
                {page}
              </button>
            );
          } else if (type === "previous" || type === "next") {
            children = (
              <button
                type="button"
                className="px-6 rounded-md flex items-center gap-2 py-1 border-2 text-md border-[#999999]"
                {...item}
              >
                {type === "previous" ? <GrPrevious className="mr-2" /> : null}
                {type}
                {type === "next" ? <GrNext className="ml-2" /> : null}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
};

export default Pagination;

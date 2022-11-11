import { React } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  const maxPageNumber = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= maxPageNumber; i++) {
    pageNumbers.push(i);
  }

  let left = currentPage - 1;
  let right = currentPage + 1;

  return (
    <>
      {maxPageNumber !== 1 ? (
        <div className="numbersCard">
          <div>
            <IconButton
              onClick={() =>
                setCurrentPage(currentPage !== 1 ? left : currentPage)
              }
            >
              <ChevronLeftIcon />
            </IconButton>
            {pageNumbers.map((number) => (
              <IconButton
                key={number}
                onClick={() => paginate(number)}
                className={
                  currentPage === number ? "pageLink active" : "pageLink"
                }
              >
                {number}
              </IconButton>
            ))}
            <IconButton
              onClick={() =>
                setCurrentPage(currentPage !== maxPageNumber ? right : 1)
              }
            >
              <ChevronRightIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

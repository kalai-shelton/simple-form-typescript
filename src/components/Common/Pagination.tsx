import React from 'react';


export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

export const PaginationComponent: React.FC<Props> = ({
  page,
  totalPages,
  handlePagination,
}) => {
  return (
    <div className="">
      <div className=" flex justify-center items-center gap-x-8">
        {/* {page !== 1 && ( */}
          <button
            onClick={() => handlePagination(page - 1)}
            disabled = {page === 1 }
            type="button"
            className={`focus:outline-none bg-primary rounded-full p-3.5    shadow-md disabled:opacity-50`}
          >
            &lt;
          </button>
        {/* )} */}
        <button
          onClick={() => handlePagination(1)}
          type="button"
          className="focus:outline-none  px-3 py-2   "
        >
          {1}
        </button>
        {page > 3 && <div className="text-blue-200 font-bold">. . .</div>}
        {page === totalPages && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page - 2)}
            type="button"
            className="focus:outline-none  px-3 py-2   "
          >
            {page - 2}
          </button>
        )}
        {page > 2 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className="focus:outline-none  px-3 py-2   "
          >
            {page - 1}
          </button>
        )}
        {page !== 1 && page !== totalPages && (
          <button
            onClick={() => handlePagination(page)}
            type="button"
            className="focus:outline-none bg-primary rounded-full p-3.5 -red-400 shadow-md"
          >
            {page}
          </button>
        )}
        {page < totalPages - 1 && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className="focus:outline-none  px-3 py-2   "
          >
            {page + 1}
          </button>
        )}
        {page === 1 && totalPages > 3 && (
          <button
            onClick={() => handlePagination(page + 2)}
            type="button"
            className="focus:outline-none  px-3 py-2   "
          >
            {page + 2}
          </button>
        )}
        {page < totalPages - 2 && <div className="text-blue-200 font-bold">. . .</div>}
        <button
          onClick={() => handlePagination(totalPages)}
          type="button"
          className="focus:outline-none  px-3 py-2  "
        >
          {totalPages}
        </button>
        {/* {page !== totalPages && ( */}
          <button
            onClick={() => handlePagination(page + 1)}
            disabled={page === totalPages}
            type="button"
            className={`focus:outline-none  bg-primary rounded-full p-3.5    shadow-md disabled:opacity-50`}
          >
            &gt;
          </button>
        {/* )} */}
      </div>
    </div>
  );
};
export const Pagination = PaginationComponent;
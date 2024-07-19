import { FC, memo, useMemo } from "react";

type LoadMoreBtnProps = {
  state: any;
  fetchDataFunc: any;
  additionalParam: any;
};

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({
  state,
  fetchDataFunc,
  additionalParam,
}) => {
  return useMemo(() => {
    if (state !== null && state.totalDocs > state.results.length) {
      return (
        <button
          onClick={() =>
            fetchDataFunc({ ...additionalParam, page: state.page + 1 })
          }
          className="text-dark-grey p-2 px-3 hover:bg-grey/30 rounded-md flex items-start gap-2"
        >
          Load More
        </button>
      );
    }
  }, [state, fetchDataFunc, additionalParam]);
};

export default memo(LoadMoreBtn);

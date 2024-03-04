import React, { Suspense, lazy, memo, useMemo, useState,FC } from "react";
import ReviewCard from "./ReviewCard";
import { BackDrop, Button } from "@components/ui";
import { FaRegCommentDots } from "react-icons/fa6";
import { useMediaQuery } from "@hooks/hooks";
import { useSelector } from "react-redux";
import { ReviewsProps } from "@types";
import { RootState } from "@redux/store";
const ReviewModal = lazy(() => import("./ReviewModal"));

type ReviewsTypes = {
reviews:ReviewsProps[]
}

const Reviews:FC<ReviewsTypes> = ({ reviews }) => {
  const [openModal, setOpenModal] = useState(false);
  const isMobile = useMediaQuery("(max-width:640px)");
  const { user } = useSelector((state:RootState) => state.user);
  const responsiveButtonText = useMemo(
    () =>
      isMobile ? (
        <FaRegCommentDots className="text-[20px]" />
      ) : (
        "Write a review "
      ),
    [isMobile]
  );
  return (
    <section id="reviews">
      <div className="container max-w-[1000px] pb-[80px]">
        <div className="flex items-center justify-between w-full border-b-[#eddeded] border-b-[1px]">
          <h1 className="form_heading text-[25px] md:text-[34px] py-[20px]">
            Customer Reviews
          </h1>
          {/* {user && (
            <Tooltip title={"Comment"}>
              <Button
                variants={"outline"}
                className={" max-w-[70px] sm:max-w-[150px]"}
                onClick={() => setOpenModal(true)}
              >
                {responsiveButtonText}
              </Button>
            </Tooltip>
          )} */}
        </div>
        <div className="flex flex-col gap-[10px] w-full">
          {reviews &&
            reviews?.map((review, index) => (
              <ReviewCard {...review} key={index} />
            ))}
        </div>
      </div>

      {user && openModal && (
        <Suspense fallback={<BackDrop isOpen />}>
          <ReviewModal openModal={openModal} setOpenModal={setOpenModal} />
        </Suspense>
      )}
    </section>
  );
};

export default memo(Reviews);

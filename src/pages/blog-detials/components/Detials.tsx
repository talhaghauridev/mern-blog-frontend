import { Image } from "@components/ui";
import { IBlog } from "@types";
import { FC } from "react";

const Detials: FC<IBlog> = ({
  title,
  image,
  comments,
  description,
}) => {
  return (
    <section id="detials">
      <div className="container py-[90px]">
        <Image
          className="w-full h-[400px] "
          src={image?.url ? "" : ""}
          alt={title}
        />

        <div className="flex items-center justify-start gap-[5px] font-Sans text-[16px]">
          <span className="font-SansBold">{title}</span>
        </div>

        <div className="flex items-center justify-start gap-[6px] text-[17px] font-PoppinsBold ">
          <div className="">Description</div>

          <p className="text-gray-500 font-Sans text-[15px] line-clamp-3">
            {description}
          </p>
        </div>
        {comments &&
          comments?.map((com) => (
            <div>
              <span>
                Comment
                {com.comment}
              </span>

              <b>{com.user.name}</b>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Detials;

import { Image } from "@components/ui";
import React, { FC } from "react";
import { IBlog } from "src/types";

const Detials: FC<IBlog> = ({
  _id,
  title,
  image,
  user,
  comments,
  description,
}) => {
  return (
    <section id="detials">
      <div className="container py-[90px]">
        <Image
          className="w-full h-[200px]"
          src={image?.public_id ? "" : ""}
          alt={title}
        />
      </div>

      <h1>{title}</h1>

      <p>{description}</p>

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
    </section>
  );
};

export default Detials;

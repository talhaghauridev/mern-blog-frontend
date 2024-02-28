import { Link } from "react-router-dom";
import { Image } from "@components/ui";
import { FC } from "react";

type BlogCardProps = {
  title: string;
  image: string;
  description: string;
  createdAt: string;
  _id: string;
};

const BlogCard: FC<BlogCardProps> = ({
  _id,
  createdAt,
  description,
  image,
  title,
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
      <Link
        to={_id}
        className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
      >
        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
          alt="Photo by Lorenzo Herrera"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </Link>

      <div className="flex gap-[10px] flex-col  p-[15px] sm:p-[20px]">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        <p className=" text-gray-500 line-clamp-2">{description}</p>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"
                loading="lazy"
                alt="Photo by peter bucks"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <span className="block text-indigo-500">Jane Jackobs</span>
              <span className="block text-sm text-gray-400">{createdAt}</span>
            </div>
          </div>

          <span className="rounded border px-2 py-1 text-sm text-gray-500">
            Article
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

import BlogList from "./BlogList";

const Blogs = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="container py-[50px]">
        <div className="mb-10 md:mb-16">
          <h2 className=" text-[40px] m-auto md:text-[50px] font-PoppinsBold font-bold text-[#222935] leading-[1.2] text-center">
            Latest Blog
          </h2>
        </div>
        <BlogList />
      </div>
    </div>
  );
};

export default Blogs;

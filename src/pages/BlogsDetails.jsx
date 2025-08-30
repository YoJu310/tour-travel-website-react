import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = (props) => {
  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const { image, date, title, description, author } = location.state;

  return (
    <div className=" pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-89% aspect-w-16 aspect-h-9 transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container ">
        <p className="text-slate-600 text-sm py-3 ">
          {" "}
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-xl tracking-wide text-justify mt-5">{description}</p>
      </div>

      {/* All Blogs Section */}
      <BlogsComp />
    </div>
  );
};

export default BlogsDetails;

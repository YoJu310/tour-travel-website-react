import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p className="text-xl ">
          Welcome to Travellogo, where the spirit of adventure is woven into every itinerary we craft. We're not just a travel agency; we're a team of passionate explorers dedicated to transforming your travel dreams into tangible, unforgettable experiences. Our journey began with a simple belief: travel should be more than just sightseeing; it should be a deep dive into the heart of a destination, a chance to connect with cultures, and a catalyst for personal growth.
          </p>
          <br />
          <p className="text-xl ">
          we prioritize your satisfaction above all else. We handle every detail, from flight bookings and accommodation arrangements to guided tours and local insights, allowing you to relax and fully immerse yourself in the moment. We are committed to sustainable and responsible tourism, respecting the environments and communities we visit. Join us, and let us embark on a journey together, creating memories that will last a lifetime.
          </p>
        </div>
      </div>
      {/* <Location /> */}
      <BlogsComp />
    </>
  );
};

export default About;

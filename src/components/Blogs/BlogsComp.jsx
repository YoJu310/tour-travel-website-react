import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "India presents a breathtaking array of destinations, each offering a unique glimpse into its rich tapestry of culture and natural beauty. The iconic Taj Mahal in Agra stands as a testament to eternal love, its pristine white marble drawing visitors from around the globe. For those seeking relaxation, Goa's sun-kissed beaches and vibrant nightlife provide a perfect escape. Kerala's tranquil backwaters offer a serene experience, where lush landscapes and Ayurvedic traditions create a sense of peace. In Rajasthan, majestic forts and colorful cities like Jaipur and Jodhpur reveal the grandeur of India's royal heritage. And in the northern reaches, Ladakh's awe-inspiring mountain vistas and Buddhist monasteries offer a spiritual and adventurous journey. From historical monuments to natural wonders, India's diverse landscapes and cultural heritage ensures a memorable travel experience.",  
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The United States presents a diverse tapestry of experiences, from bustling urban centers to awe-inspiring natural wonders. New York City, a global hub, pulses with energy, offering iconic landmarks, world-class museums, and a rich cultural mosaic. The Grand Canyon, a geological masterpiece, captivates visitors with its vastness and breathtaking vistas. Hawaii's tropical islands beckon with pristine beaches, volcanic landscapes, and a unique Polynesian spirit. Los Angeles, the heart of the entertainment industry, blends Hollywood glamour with diverse neighborhoods and sun-drenched beaches. Finally, the nation's vast network of National Parks, including Yosemite and Yellowstone, showcases the stunning beauty and ecological diversity of the American landscape, offering endless opportunities for outdoor adventure and exploration.", 
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Japan seamlessly blends tradition and modernity. Tokyo's vibrant cityscape, Kyoto's ancient temples, and Osaka's culinary delights offer diverse experiences. Hiroshima's poignant history and Hokkaido's natural beauty provide contrasting yet compelling attractions. From serene gardens to bustling markets, Japan's unique culture and stunning landscapes create an unforgettable journey.",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;

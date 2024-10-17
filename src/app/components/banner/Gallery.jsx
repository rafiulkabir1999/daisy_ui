import React from "react";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Adventure",
    //   imgSrc: "./image/poster/poser_01.png",
      imgSrc: "./image/poster/poster_03.jpg",
      desc:"this is description"
    },
    {
      title: "Random Title",
      imgSrc: "./image/poster/poster_04.jpg",
    },
    {
      title: "Explore The World",
      imgSrc: "./image/poster/poster_05.jpg",
    //   discount: "50% DISCOUNT",
    },
    {
      title: "Dream Vacation",
      imgSrc: "./image/poster/poster_02.png",
    },
    {
      title: "Relax & Unwind",
      imgSrc: "./image/poster/poster_01.png",
    },
  ];

  return (
  <div className="">
    <h1 className="text-3xl text-center py-10 font-bold text-black opacity-60">International Tour Booking</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {galleryItems.map((item, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden hover:shadow-2xl transition-all ease-out hover:-translate-y-5 hover:scale-105"
        >
          <img
            src={item.imgSrc}
            alt={item.title}
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-4 text-white">
          <div className="">
          <div className="text-lg font-bold capitalize">{item.title}</div>
          <div className="text-sm font-light opacity-50">{item.desc}</div>
          </div>
            {item.discount && (
              <div className="bg-blue-600 text-xs rounded-full px-2 py-1 inline-block">
                {item.discount}
              </div>
            )}
            <button className="btn btn-warning mt-4 w-fit px-4 flex items-center space-x-2">
              <span>View More</span>
              <span>→</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Gallery;

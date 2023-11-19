import React from "react";
import StarRatings from "react-star-ratings";

function CardComponent({ product, isLoading }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-10">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        product?.map((e) => (
          <div key={e.id} className="border-2 rounded-lg h-[35em] relative">
            <img
              className="h-[25em] w-full object-cover mb-2 rounded-t-lg "
              src={e.thumbnail}
            />
            <i className="fa-regular fa-heart text-2xl bg-[#A8A5A4] w-12 h-12 px-[12px] py-[8.5px] text-[#FFFFFF] absolute left-[11.4em] top-[0.75em]"></i>
            <div className="px-5">
              <h2 className="font-semibold">{e.title}</h2>
              <p className="text-[#6D7482] line-clamp-2">{e.description}</p>
              <h1 className="text-xl font-bold mt-2">${e.price}</h1>
              <StarRatings
                rating={e.rating}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="15px"
                starSpacing="2px"
                name="rating"
                // changeRating={() => {}}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CardComponent;

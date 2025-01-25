import React from 'react';
import { resizeImage } from '@/helpers/resizeImage';
import StarRating from '../StarRating';

const CardTop = ({ komikData }) => {
  return (
    <>
      {komikData.map((komik) => (
        <div
          key={komik.rank}
          className="flex items-start gap-4 border-t border-gray-500 bg-gray-800 p-3"
        >
          {/* Image */}
          <div className="w-28 h-32 flex-shrink-0 relative">
            <img
              src={resizeImage(komik.image, 800, 830)}
              alt={komik.title}
              className="h-full w-full object-fill rounded-lg"
            />
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {komik.rank}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between overflow-hidden">
            <h1 className="text-sm font-semibold text-white truncate">
              {komik.title}
            </h1>

            <div className="flex flex-wrap gap-1 mt-2 overflow-hidden">
              {komik.genres.map((genre, index) => (
                <p
                  key={index}
                  className="text-[10px] text-white break-words whitespace-normal"
                >
                  {genre}
                </p>
              ))}
            </div>

            <div className="mt-2 flex items-center text-xs">
              <StarRating rating={Number(komik.rating)} />
              <span className="text-white ml-2">{komik.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardTop;

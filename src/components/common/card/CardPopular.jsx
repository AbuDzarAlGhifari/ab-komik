import React from 'react';
import { resizeImage } from '@/helpers/resizeImage';
import StarRating from '../StarRating';
import { Link } from 'react-router-dom';
import { slugify } from '@/helpers/slugify';

const CardPopular = ({ komik }) => {
  return (
    <div className="p-0.5">
      <div className="bg-gray-800 p-1 rounded-lg">
        <img
          src={resizeImage(komik.imageSrc, 800, 830)}
          alt={komik.title}
          className="h-32 sm:h-48 w-full object-cover object-top rounded-lg"
        />

        <Link
          className="mt-2 text-sm font-semibold text-white truncate"
          to={`/detail/${slugify(komik.title)}`}
        >
          {komik.title}
        </Link>

        <p className="text-xs text-gray-400 truncate">{komik.chapter}</p>

        <div className="mt-2 flex items-center">
          <StarRating rating={Number(komik.rating)} />
          <span className="text-white ml-2 text-xs">{komik.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default CardPopular;

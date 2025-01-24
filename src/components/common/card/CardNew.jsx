import React from 'react';
import { resizeImage } from '@/helpers/resizeImage';
import { TbPointFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { slugify } from '@/helpers/slugify';

const CardNew = ({ komikData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      {komikData.map((komik) => (
        <div
          key={komik.title}
          className="flex items-start gap-4 border-t border-gray-500 bg-gray-800 p-3"
        >
          {/* Image */}
          <div className="w-24 h-28 flex-shrink-0 relative">
            <img
              src={resizeImage(komik.imageSrc, 800, 830)}
              alt={komik.title}
              className="h-full w-full object-fill rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col w-full justify-between overflow-hidden">
            <Link
              to={`/detail/${slugify(komik.title)}`}
              className="text-sm font-semibold cursor-pointer text-white truncate hover:underline"
            >
              {komik.title}
            </Link>

            {/* Chapters */}
            <div className="mt-2">
              {komik.chapters.map((chapter, index) => (
                <div
                  key={index}
                  className="flex items-center mb-1.5 justify-between text-xs"
                >
                  <div className="flex gap-0.5 text-gray-400 items-center">
                    <TbPointFilled />
                    <span>{chapter.chapterTitle}</span>
                  </div>
                  <span className="text-gray-400">{chapter.timeAgo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardNew;

import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';
import { getDetailKomik } from '@/services/api';
import { MdOutlineMenuBook } from 'react-icons/md';
import StarRating from '@/components/common/StarRating';

const DetailKomik = () => {
  const { komikId } = useParams();
  const {
    data: komikDetail,
    isLoading,
    error,
  } = useFetch(() => getDetailKomik(komikId));

  if (isLoading) return <div className="text-white p-3">Loading...</div>;
  if (error) return <div className="text-white p-3">Error: {error}</div>;

  if (!komikDetail)
    return <div className="text-white p-3">No details available</div>;

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-3 rounded-2xl">
          <img
            src={komikDetail.imageSrc}
            alt={komikDetail.title}
            className="w-64 rounded-2xl"
          />
        </div>
        <div className="col-span-9">
          {/* Title */}
          <div className="text-2xl font-bold mb-4 flex items-center gap-2">
            <MdOutlineMenuBook /> {komikDetail.title}
          </div>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <StarRating rating={Number(komikDetail.rating)} />
            <span className="text-white text-sm">{komikDetail.rating}</span>
          </div>

          {/* Additional Info */}
          <div className="mt-4 space-y-2">
            {/* Followed By */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-300 w-24">Diikuti:</span>
              <span className="text-white">{komikDetail.followedBy}</span>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-300 w-24">Status:</span>
              <span className="text-white">{komikDetail.status}</span>
            </div>

            {/* Type */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-300 w-24">Tipe:</span>
              <span className="text-white">{komikDetail.type}</span>
            </div>

            {/* Released */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-300 w-24">Dirilis:</span>
              <span className="text-white">{komikDetail.released}</span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-300 w-24">Penulis:</span>
              <span className="text-white">{komikDetail.author}</span>
            </div>

            {/* Artist */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-300 w-24">
                Ilustrator:
              </span>
              <span className="text-white">{komikDetail.artist}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKomik;

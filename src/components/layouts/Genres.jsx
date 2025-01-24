import useFetch from '@/hooks/useFetch';
import { getGenre } from '@/services/api';
import React from 'react';
import { IoMdTrophy } from 'react-icons/io';

const Genres = () => {
  const { data: genreData, isLoading, error } = useFetch(getGenre);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const genres = genreData?.genres || [];

  if (!genres.length) {
    return <div>No genres available</div>;
  }

  return (
    <div className="bg-gray-900 p-4 mt-2">
      <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
        <IoMdTrophy />
        <h1>Genres</h1>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {genres.map((genre) => (
          <div
            key={genre.value}
            className="bg-gray-700 text-sm font-semibold cursor-pointer text-white py-1 px-0.5 text-center rounded-lg hover:bg-gray-600 transition"
          >
            {genre.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;

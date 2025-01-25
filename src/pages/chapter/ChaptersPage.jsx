import useFetch from '@/hooks/useFetch';
import { getDetailChapter } from '@/services/api';
import React from 'react';
import { useParams } from 'react-router-dom';

const ChaptersPage = () => {
  const { chapterSlug } = useParams();
  const {
    data: chapterDetails,
    isLoading,
    error,
  } = useFetch(() => getDetailChapter(chapterSlug || ''));

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (!chapterDetails) {
    return <div className="text-center py-10">No chapter details found.</div>;
  }

  const { title, images = [] } = chapterDetails;

  return (
    <div className=" bg-gray-800 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center my-6">{title}</h1>

      <div className=" w-full max-w-screen-lg mx-auto">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Chapter ${chapterSlug} - Image ${index + 1}`}
              className="w-full h-auto shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChaptersPage;

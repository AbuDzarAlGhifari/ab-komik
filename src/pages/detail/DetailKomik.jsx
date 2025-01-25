import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';
import { getDetailKomik } from '@/services/api';
import DetailSection from './_component/DetailSection';
import ChapterSection from './_component/ChapterSection';

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
      <DetailSection komikDetail={komikDetail} />
      <ChapterSection komikDetail={komikDetail} nameKomik={komikId} />
    </div>
  );
};

export default DetailKomik;

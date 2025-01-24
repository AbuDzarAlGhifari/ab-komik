import React from 'react';
import CardNew from '@/components/common/card/CardNew';
import useFetch from '@/hooks/useFetch';
import { getKomikNew } from '@/services/api';
import { MdNewReleases } from 'react-icons/md';

const NewSection = () => {
  const { data: komikData, isLoading, error } = useFetch(getKomikNew);

  if (isLoading) return <div className="text-white p-3">Loading...</div>;
  if (error) return <div className="text-white p-3">Error: {error}</div>;
  return (
    <div className="p-4 bg-gray-900 my-2">
      <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
        <MdNewReleases />
        <h1>New Komik</h1>
      </div>
      <CardNew komikData={komikData} />
    </div>
  );
};

export default NewSection;

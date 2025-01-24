import CardOngoing from '@/components/common/card/CardOngoing';
import useFetch from '@/hooks/useFetch';
import { getKomikOngoing } from '@/services/api';
import React from 'react';
import { IoMdTrophy } from 'react-icons/io';

const OngoingSection = () => {
  const { data: komikData, isLoading, error } = useFetch(getKomikOngoing);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="p-4 bg-gray-900">
      <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
        <IoMdTrophy />
        <h1>On-Going Komik</h1>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
        {komikData.map((komik) => (
          <CardOngoing key={komik.title} komik={komik} />
        ))}
      </div>
    </div>
  );
};

export default OngoingSection;

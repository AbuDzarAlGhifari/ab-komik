import React from 'react';
import CardTop from '@/components/common/card/CardTop';
import useFetch from '@/hooks/useFetch';
import { getKomikTop } from '@/services/api';
import { IoMdMedal } from 'react-icons/io';

const TopSection = () => {
  const { data: komikData, isLoading, error } = useFetch(getKomikTop);
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  if (isLoading) return <div className="text-white p-3">Loading...</div>;
  if (error) return <div className="text-white p-3">Error: {error}</div>;

  return (
    <>
      <div className="flex items-center gap-1.5 text-white p-3 bg-gray-800">
        <IoMdMedal />
        <h1>Top Komik</h1> - <h1>{currentMonth}</h1>
      </div>

      <CardTop komikData={komikData} />
    </>
  );
};

export default TopSection;

import React, { useEffect, useState } from 'react';
import { Pagination } from '../Common/Pagination';
import profileData from '../../data/profileData.json'
import { Cards } from "./Cards"

export const CardLists = () => {
  const [isCards, setCards] = useState<any[]>([])
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const handlePages = (updatePage: number) => setPage(updatePage);
  let start:number = page === 1 ? 0 : (page*4) - 4;
  let end:number =page === 1 ? 4: page * 4;

  useEffect(()=>{
 setCards(profileData?.slice(start, end))
  },[page,start,end])

return (
    <div className="grid content-between min-h-screen bg-gray-50 py-14">
        {/* <div className='font-bold text-green-500 my-6 text-center'>{page}  {start}  {end}</div> */}
       <div className='flex justify-center  flex-row flex-wrap gap-y-10 gap-x-8 w-full   pt-10'>
       
      {isCards?.map((prof)=>{
        return(
      <Cards key={prof.id} prof={prof}/>
        )
    })}
     </div>  
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePagination={handlePages}
      />
    </div>
  );
};
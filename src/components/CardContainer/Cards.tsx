import React,{FC} from 'react'

interface Profile {
  id: number,
  name: string,
  companyName:string,
  email:string,
  mobile:number,
  address:string,
 
}
interface Props{
  prof:Profile;
}
export const Cards:FC<Props> =({prof})=>{ 
  
  return (
    <div className="w-64 h-84 shadow-md bg-gray-50 hover:-translate-y-1 hover:scale-105 rounded-md"
    style={{background:"linear-gradient(165deg, rgb(176,224,230)35%, rgb(250,253,253)35%)"}}>
      <div className="flex flex-col justify-center w-full ">
      <div className="rounded-full w-28 h-28 bg-gray-200 mt-7 ml-8 grid ">
        <img className="place-self-center w-28 h-28 rounded-full " src="/images/img1.png"/>
       </div>
      <div className=" flex flex-col p-5 self-center">
          <div className="font-bold font-Montserrat mb-3 mt-5 text-lg uppercase">{prof.name}-{prof.id}</div>
          <div className="text-sm font-semibold">{prof.companyName}</div>
          <div className="text-sm font-semibold">{prof.email}</div>
          <div className="text-sm">{prof.mobile}</div>
          <div className="text-sm">{prof.address}</div>

        </div>


</div>

      
  
    </div>
  )
}


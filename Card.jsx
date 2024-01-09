"use client";


import { useState } from 'react'
import { Info } from 'lucide-react';

const Card = ({title, info, img, userName}) => {

    const [moreInfo, setMoreInfo] = useState (false)
  return (
    <div>
        
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="pl-5 pr-5 pt-5 rounded-t-lg" src={img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
        
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-700">{title}</h5>
        </a>
        <p class="mb-2 text-sm text-gray-500">{userName}</p>
        { moreInfo? <p class="mb-2 font-normal text-sm text-gray-600">{info}</p>  : <h5></h5>}
        <a onClick={()=> setMoreInfo(!moreInfo)} class="inline-flex items-center px-3 py-2 text-sm font-light text-center text-white bg-gray-300 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <Info />
             {/* <svg  class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg> */}
        </a>
    </div>
</div>
    </div>
  )
}

export default Card
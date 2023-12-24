import React from 'react';
import { Link } from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md';


export default function ListingItem({listing}) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow duration-300
     overflow-hidden rounded-lg w-full sm:w-[320px]'>
        <Link to={`/listing/${listing._id}`}>
            <img src={listing.imageUrls[0]} alt='listing cover' 
            className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scal duration-300'/>

            <div className='p-3 flex flex-col gap-2 w-full'>
                <p className=' truncate text-lg font-semibold'>{listing.name}</p>
           
            <div className='flex items-center gap2'>
               <MdLocationOn className='h-4 w-4 text-green-700'/>
               <p className='truncate text-gray-600 '>{listing.address}</p>
            </div>
            <p className='text-sm text-gray-600 line-clamp-2'>{listing.description}</p>

             <p className='text-slate-500 mt-2 font-semibold flex items-center'>$
                {listing.offer ? 
                listing.discountPrice.toLocaleString('en-us'):
                listing.regularPrice.toLocaleString('en-us')}
                {listing.type==='rent' && ' / month'}</p>

                <div className='text-slate-700 flex gap-4'>
                   <div className='font-bold text-xs'>
                    {listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed` }
                   </div>
                   <div className='font-bold text-xs'>
                    {listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath` }
                   </div>

                </div>
            </div>
        </Link>
    </div>
    
  )
}
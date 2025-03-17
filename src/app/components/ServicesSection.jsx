import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const ServicesSection = async () => {
  const serviceCollection = dbConnect(collectionNameObj.servicesCollection)
  const data = await serviceCollection.find({}).toArray();

  console.log(data)
  return (
    <div className='grid gap-4 lg:grid-cols-3 p-10'>
      {data && data.map(item => <div key={item._id} className='shadow-lg p-4 rounded-lg'>
        <Image src={item?.img} height={280} width={400} alt={item.title} className='rounded-lg ' />
        <h2 className='text-2xl text-black/70 font-bold pt-4'>{item.title}</h2>
        <div className='flex items-center justify-between'>
          <p className='text-orange-500 pt-2 font-bold text-xl'>Price: {item.price}$</p>
          <Link href={`/services/${item._id}`}>
            <FaArrowRight className='text-orange-500 text-xl' />
          </Link>
        </div>
      </div>)}
    </div>
  )
}

export default ServicesSection
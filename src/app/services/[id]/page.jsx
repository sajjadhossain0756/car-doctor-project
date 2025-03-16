import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

const ServiceDetailsPage = async ({ params }) => {
    const p = await params;

    const serviceCollection = dbConnect(collectionNameObj.servicesCollection)
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) })
    return (
        <div className='px-10 py-4 '>
            <section className='mb-6'>
                <figure className='relative w-full h-[400px]'>
                    <Image src={'/assets/images/checkout/checkout.png'} fill
                        className='object-cover rounded-xl' alt='checkout' />
                    <div className='absolute overlay-bg h-full w-full rounded-xl'></div>
                    <div className='absolute w-full h-full flex items-center pl-10'>
                        <div>
                            <h2 className='text-white font-bold text-5xl'>Service Details</h2>
                        </div>
                    </div>
                </figure>
            </section>
            <section className='flex gap-4 items-center'>
                <figure className='flex-1'>
                <Image src={data?.img} height={300} width={540}  className='rounded-lg' alt={data?.title} />
                </figure>
                <div className='flex-1'>
                    <p className='text-4xl font-semibold pb-4'>{data?.title}</p>
                    <p>{data?.description}</p>
                    <p className='text-orange-500 font-bold text-xl pt-4'>Price: {data?.price}$</p>
                </div>
            </section>
        </div>
    )
}

export default ServiceDetailsPage
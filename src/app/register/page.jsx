'use client'
import React from 'react'
import Lottie from 'lottie-react'
import Link from 'next/link'
import registerLottie from '../../../public/assets/images/login/register.json'
import RegisterForm from './components/RegisterForm'
import SocialLogin from '../signIn/components/SocialLogin'

const page = () => {
    return (
        <div>
            <div className='flex items-center
       bg-gray-100 border-2 dark:border-purple-300 dark:bg-gray-700  rounded-lg shadow-lg  my-6 mx-20'>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    {/* <div className='flex justify-center mx-auto'>
                        <img className='w-auto h-7 sm:h-8' src={logo} alt='' />
                    </div> */}

                    <p className='mt-3 text-xl text-center dark:text-white text-gray-600 '>
                        Get Your Free Account Now.
                    </p>
                    {/* social login start here */}
                    <SocialLogin></SocialLogin>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center dark:text-gray-300 text-gray-500 uppercase  hover:underline'>
                            or Registration with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    {/* from start here */}
                    <RegisterForm></RegisterForm>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b '></span>

                        <Link
                            href={'/signIn'}
                            className='text-xs dark:text-gray-300 text-gray-500 uppercase  hover:underline'
                        >
                            If You have Account, sign in
                        </Link>

                        <span className='w-1/5 border-b '></span>
                    </div>
                </div>
                <div
                    className='hidden lg:block lg:w-1/2'
                >
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
            </div>
        </div>
    )
}

export default page
'use client'
import Link from 'next/link'
import React from 'react'
import SignInForm from './components/SignInForm'
import Lottie from 'lottie-react'
import signInLottie from '../../../public/assets/images/login/login.json'
import SocialLogin from './components/SocialLogin'

const page = () => {
    return (
        <div>
            <div className='flex items-center lg:flex-row-reverse my-6 mx-20
       bg-gray-100 border-2 dark:border-purple-300 dark:bg-gray-700 rounded-lg shadow-lg  '>
                <div
                    className='hidden lg:block lg:w-1/2'
                >
                    <Lottie animationData={signInLottie}></Lottie>
                </div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    {/* <div className='flex justify-center mx-auto'>
                        <img className='w-auto h-7 sm:h-8' src={logo} alt='' />
                    </div> */}

                    <p className='mt-3 text-xl text-center dark:text-white text-gray-600 '>
                        Welcome back!
                    </p>
                    {/* social login start here */}
                    <SocialLogin></SocialLogin>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center dark:text-gray-300 text-gray-500 uppercase  hover:underline'>
                            or login with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    {/* start form here */}
                    <SignInForm></SignInForm>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  '></span>

                        <Link
                            href={'/register'}
                            className='text-xs dark:text-gray-300 text-gray-500 uppercase  hover:underline'
                        >
                            If You have no Account, Sign up
                        </Link>

                        <span className='w-1/5 border-b '></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page